import { useEffect } from "react";

import { Canvas, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  // Noise,
  // Scanline,
  Vignette,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import "./App.scss";
import { SynthwaveGrid } from "./components/3D/SynthwaveGrid";

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
          <SynthwaveGrid color={[15 * p, 2 * p, 20 * p]} />
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
