"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const DotGrid = ({
  dotSize = 3,
  totalSize = 4,
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  shader = `
    float animation_speed_factor = ${animationSpeed.toFixed(1)};
    float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
    opacity *= step(intro_offset, u_time * animation_speed_factor);
    opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
  `,
  containerClassName,
}: {
  dotSize?: number;
  totalSize?: number;
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  shader?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={containerClassName}>
      <Canvas className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          totalSize={totalSize}
          opacities={opacities}
          shader={shader}
        />
      </Canvas>
    </div>
  );
};

const DotMatrix: React.FC<{
  colors: number[][];
  dotSize: number;
  totalSize: number;
  opacities: number[];
  shader: string;
}> = ({ colors, dotSize, totalSize, opacities, shader }) => {
  const uniforms = React.useMemo(() => {
    return {
      u_colors: {
        value: colors.flatMap(color => color.map(c => c / 255)),
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: {
        value: totalSize,
        type: "uniform1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "uniform1f",
      },
    };
  }, [colors, dotSize, totalSize, opacities]);

  return (
    <Shader
      source={`
        precision mediump float;
        in vec2 fragCoord;
        
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
          return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }
        void main() {
          vec2 st = fragCoord.xy;
          float opacity = step(0.0, st.x) * step(0.0, st.y);
          vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
          float frequency = 5.0;
          float show_offset = random(st2);
          float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
          opacity *= u_opacities[int(rand * 10.0)];
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
          opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
          vec3 color = u_colors[int(show_offset * 6.0)];
          ${shader}
          fragColor = vec4(color, opacity);
          fragColor.rgb *= fragColor.a;
        }
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

const Shader = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number;
      type: string;
    };
  };
  maxFps?: number;
}) => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={new THREE.ShaderMaterial({
        vertexShader: `
          precision mediump float;
          in vec2 coordinates;
          uniform vec2 u_resolution;
          out vec2 fragCoord;
          void main(){
            float x = position.x;
            float y = position.y;
            gl_Position = vec4(x, y, 0.0, 1.0);
            fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
            fragCoord.y = u_resolution.y - fragCoord.y;
          }
        `,
        fragmentShader: source,
        uniforms: {
          ...uniforms,
          u_time: { value: 0, type: "1f" },
          u_resolution: { value: new THREE.Vector2(window.innerWidth * 2, window.innerHeight * 2) }, // Initialize u_resolution
        },
        glslVersion: THREE.GLSL3,
        blending: THREE.CustomBlending,
        blendSrc: THREE.SrcAlphaFactor,
        blendDst: THREE.OneFactor,
      })} attach="material" />
    </mesh>
  );
};
