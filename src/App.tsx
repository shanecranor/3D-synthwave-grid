import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
import { KernelSize, BlendFunction } from "postprocessing";
import "./App.css";

function App() {
  const p = 1.0;
  const o = 1;
  return (
    <div className="app">
      <Canvas>
        <SetCameraPosition />
        <ambientLight intensity={2.0} />
        {/* <ambientLight intensity={1.0} /> */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.4}
            levels={4}
            radius={0.5}
            mipmapBlur={true}
            opacity={1.0}
          />
          {/* <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.4}
            levels={9}
            radius={0.3}
            mipmapBlur={true}
            opacity={1}
          /> */}
          {/* <Noise opacity={0.1} /> */}

          <Vignette
            offset={0.4} // vignette offset
            darkness={0.6} // vignette darkness
            eskil={false} // Eskil's vignette technique
            blendFunction={BlendFunction.DARKEN} // blend mode
          />
          {/* <Scanline
            blendFunction={BlendFunction.NORMAL} // blend mode
            density={1.6} // scanline density
            opacity={0.1} // scanline opacity
          /> */}
        </EffectComposer>
        <SynthwaveGrid color={[15 * p, 2 * p, 20 * p]} opacity={o} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}
function Box(props: JSX.IntrinsicElements["mesh"]) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function SetCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    camera.rotation.set(0.25, 0, 0);
  }, [camera]);

  return null;
}

interface SynthwaveGridProps {
  size?: number;
  divisions?: number;
  thickness?: number;
  position?: THREE.Vector3 | [number, number, number];
  color?: string | THREE.Color | [number, number, number];
  opacity?: number;
}

function SynthwaveGrid({
  size = 100,
  divisions = 70,
  thickness = 0.01,
  position = [0.2, -1.2, 0],
  color = [14, 0.6, 20],
  opacity = 1,
}: SynthwaveGridProps) {
  const linesRef = useRef<THREE.Group>(null!);
  useFrame(() => {
    linesRef.current.position.z += 0.01;
    if (linesRef.current.position.z > size / divisions) {
      linesRef.current.position.z = 0;
    }
  });
  const lines = useMemo(() => {
    const linesArray = [];
    const step = size / divisions;
    const halfSize = size / 2;

    for (let i = 0; i <= divisions; i++) {
      const position = -halfSize + i * step;

      // Horizontal lines
      linesArray.push(
        <mesh key={`h-${i}`} position={[0, 0, position]}>
          <boxGeometry args={[size, thickness, thickness]} />
          <meshBasicMaterial color={color} opacity={opacity} />
        </mesh>
      );

      // Vertical lines
      linesArray.push(
        <mesh key={`v-${i}`} position={[position, 0, 0]}>
          <boxGeometry args={[thickness, thickness, size]} />
          <meshBasicMaterial color={color} opacity={opacity} />
        </mesh>
      );
    }

    return linesArray;
  }, [size, divisions, thickness, color]);

  return (
    <group ref={linesRef} position={position}>
      {lines}
    </group>
  );
}
export default App;
