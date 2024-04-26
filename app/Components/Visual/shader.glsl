#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_dotSize;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 grid = fract(st * u_dotSize);
    float circle = smoothstep(0.5, 0.51, length(grid - 0.5));
    vec3 color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}
