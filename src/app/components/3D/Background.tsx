import { GradientTexture } from "@react-three/drei";
import * as THREE from "three";
export const Background = ({
  windowDimensions,
}: {
  windowDimensions: { width: number; height: number; ratio: number };
}) => {
  return (
    <mesh
      scale={[25, 25 * windowDimensions.ratio, 25]}
      position={[0, 0, -1]}
      rotation={[0, 0, Math.PI / 2]}
    >
      <planeGeometry />
      <meshBasicMaterial
        blending={THREE.NormalBlending}
        color={[2, 2, 2]}
        depthTest={false}
        depthWrite={false}
      >
        <GradientTexture
          stops={[0, 1]} // As many stops as you want
          colors={["#4d003d", "#002440"]} // Colors need to match the number of stops
          size={1024} // Size is optional, default = 1024
        />
      </meshBasicMaterial>
    </mesh>
  );
};
