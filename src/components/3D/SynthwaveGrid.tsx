import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface SynthwaveGridProps {
  size?: number;
  divisions?: number;
  thickness?: number;
  position?: THREE.Vector3 | [number, number, number];
  color?: string | THREE.Color | [number, number, number];
  endColor?: string | THREE.Color | [number, number, number];
  opacity?: number;
}

export function SynthwaveGrid({
  size = 200,
  divisions = 140,
  thickness = 0.02,
  position = [0, -1.2, -40],
  color = [14, 0.6, 20],
  endColor = [5, 10, 10],
  opacity = 1,
}: SynthwaveGridProps) {
  const startPos = new THREE.Vector3(...position);
  const linesRef = useRef<THREE.Group>(null!);
  useFrame(() => {
    linesRef.current.position.z += 0.01;
    if (linesRef.current.position.z > (size * 2) / divisions + startPos.z) {
      linesRef.current.position.z = startPos.z;
    }
  });

  const lines = useMemo(() => {
    const linesArray = [];
    const step = size / divisions;
    const halfSize = size / 2;

    for (let i = 0; i <= divisions; i++) {
      const position = -halfSize + i * step;
      // Vertical lines
      linesArray.push(
        <mesh key={`v-${i}`} position={[position, 0, 0]}>
          <boxGeometry args={[thickness, thickness, size]} />
          <meshBasicMaterial
            color={color}
            opacity={opacity}
            // depthWrite={false}
          />
        </mesh>
      );
      if (i % 2 === 0) {
        // Horizontal lines
        const modifiedColor = new THREE.Color(...color);
        modifiedColor.lerp(new THREE.Color(...endColor), 1 - i / divisions);
        linesArray.push(
          <mesh key={`h-${i}`} position={[0, 0, position]}>
            <boxGeometry args={[size * 2, thickness * 1, thickness]} />
            <meshBasicMaterial
              color={modifiedColor}
              opacity={opacity}
              // depthTest={false}
            />
          </mesh>
        );
      }
    }

    return linesArray;
  }, [size, divisions, thickness, color]);

  return (
    <group ref={linesRef} position={position}>
      {lines}
    </group>
  );
}
