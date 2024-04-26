"use client"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const GridShader = () => {
  const dotSizeRef = useRef(0.1); // Adjust dot size here
  const backgroundColorRef = useRef(new THREE.Color('skyblue')); // Adjust background color

  const materialRef = useRef();

  useEffect(() => {
    const vertexShader = `#version 330 core

    layout (location = 0) in vec3 aPos;
    
    out vec2 uv;
    
    void main() {
      gl_Position = vec4(aPos, 1.0);
      uv = vec2(aPos.x, aPos.y) + 0.5; // Offset UV to center dots
    }
    `; // Paste vertex shader code here
    const fragmentShader = `#version 330 core

    in vec2 uv;
    
    out vec4 FragColor;
    
    uniform float dotSize; // Size of the dots (adjust for desired size)
    uniform vec3 backgroundColor; // Background color
    
    float smoothstep(float edge0, float edge1, float value) {
      // Implement smoothstep function for smoother dot edges (optional)
      // You can find implementations online
      return 1.0;
    }
    
    void main() {
      float circle = smoothstep(0.5 - dotSize, 0.5 + dotSize, distance(uv, vec2(0.5, 0.5)));
      FragColor = vec4(vec3(1.0), circle); // White dots, adjust for color
      FragColor.a *= smoothstep(0.0, 0.1, distance(uv, vec2(0.5, 0.5))); // Fade out edges (optional)
      FragColor = mix(FragColor, vec4(backgroundColor, 1.0), 1.0 - circle); // Apply background color
    }
    `; // Paste fragment shader code here

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        dotSize: { value: dotSizeRef.current },
        backgroundColor: { value: backgroundColorRef.current },
      },
    });
    materialRef.current = material;
  }, []);

//   useFrame(() => {
//     // Update uniforms if needed for animations
//   });

  return (
    <Canvas>
      <planeGeometry args={[2, 2]} /> {/* Adjust plane size as needed */}
      <mesh material={materialRef.current} />
    </Canvas>
  );
};

export default GridShader;
