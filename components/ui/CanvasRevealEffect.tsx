import * as THREE from "three";
import { useMemo } from "react";
import { Size } from "some-types"; // Replace with the actual type or library you're using for Size

interface Uniforms {
  [key: string]: {
    value: number | number[] | number[][];
    type: string;
  };
}

// Mock getUniforms function - replace this with your actual implementation
const getUniforms = (): Uniforms => {
  return {
    u_color: { value: [1.0, 0.0, 0.0], type: "uniform3f" },
    u_opacity: { value: 0.5, type: "uniform1f" },
    u_positions: {
      value: [
        [0, 0, 0],
        [1, 1, 1],
      ],
      type: "uniform3fv",
    },
  };
};

type Props = {
  source: string; // Shader source code
  size: Size; // Object with width and height properties
};

const ShaderMaterialComponent = ({ source, size }: Props) => {
  // Prepare uniforms based on their type
  const preparedUniforms = useMemo(() => {
    const uniforms = getUniforms();
    const result: { [key: string]: { value: any; type: string } } = {};

    for (const uniformName in uniforms) {
      const uniform = uniforms[uniformName];

      switch (uniform.type) {
        case "uniform1f":
          result[uniformName] = { value: uniform.value as number, type: "1f" };
          break;
        case "uniform3f":
          result[uniformName] = {
            value: new THREE.Vector3().fromArray(uniform.value as number[]),
            type: "3f",
          };
          break;
        case "uniform1fv":
          result[uniformName] = {
            value: uniform.value as number[],
            type: "1fv",
          };
          break;
        case "uniform3fv":
          result[uniformName] = {
            value: (uniform.value as number[][]).map((v) =>
              new THREE.Vector3().fromArray(v)
            ),
            type: "3fv",
          };
          break;
        case "uniform2f":
          result[uniformName] = {
            value: new THREE.Vector2().fromArray(uniform.value as number[]),
            type: "2f",
          };
          break;
        default:
          console.error(`Invalid uniform type for '${uniformName}'.`);
          break;
      }
    }

    return result;
  }, []);

  // Create material using useMemo
  const material = useMemo(() => {
    const resolution = new THREE.Vector2(size.width * 2, size.height * 2);

    return new THREE.ShaderMaterial({
      vertexShader: `...`, // Replace with your actual vertex shader code
      fragmentShader: source,
      uniforms: {
        ...preparedUniforms,
        u_resolution: { value: resolution, type: "2f" },
      },
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });
  }, [source, preparedUniforms, size.width, size.height]);

  // The material object is ready for use in a THREE.js scene
  return material;
};

export default ShaderMaterialComponent;
