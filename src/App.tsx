import { useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  // Noise,
  // Scanline,
  Vignette,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { BlendFunction } from "postprocessing";
import "./App.scss";
import { SynthwaveGrid } from "./components/3D/SynthwaveGrid";
import { Cloud, Clouds, GradientTexture, Stars } from "@react-three/drei";

function App() {
  const p = 1;
  return (
    <>
      <main>
        <h1>Shane Cranor</h1>
        <nav>
          <a>Code</a>
          <a>Music</a>
          <a>Photos</a>
        </nav>
      </main>
      <div className="three-js-canvas">
        <Canvas>
          <SetCameraPosition />
          <ambientLight intensity={2.0} />
          {/* <ambientLight intensity={1.0} /> */}
          <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0}
              intensity={0.4}
              levels={6}
              radius={0.7}
              mipmapBlur={true}
              opacity={1.0}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0}
              intensity={0.4}
              levels={9}
              radius={0.3}
              mipmapBlur={true}
              opacity={1}
            />
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

          <Clouds material={THREE.MeshBasicMaterial}>
            <Cloud
              segments={80}
              bounds={[20, 1, 1]}
              growth={10}
              position={[-40, 0, -60]}
              volume={10}
              color={[0.23, 0, 0.23]}
              speed={0.01}
              opacity={0.1}
            />
            <Cloud
              segments={80}
              bounds={[20, 1, 1]}
              growth={10}
              position={[40, 0, -60]}
              volume={10}
              color={[0, 20 / 255, 48 / 255]}
              speed={0.01}
              opacity={0.1}
            />
          </Clouds>
          <SynthwaveGrid color={[15 * p, 2 * p, 20 * p]} />
          {/* <Stars
            radius={100}
            depth={50}
            count={10000}
            factor={2}
            saturation={0}
            speed={1}
          /> */}
          <mesh scale={25} position={[0, 0, -1]} rotation={[0, 0, Math.PI / 2]}>
            <planeGeometry />
            <meshBasicMaterial
              blending={THREE.AdditiveBlending}
              opacity={2}
              reflectivity
              depthTest={false}
              depthWrite={false}
            >
              <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={["#3d003d", "#001430"]} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
              />
            </meshBasicMaterial>
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

function SetCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    camera.rotation.set(0.25, 0, 0);
  }, [camera]);

  return null;
}

export default App;
