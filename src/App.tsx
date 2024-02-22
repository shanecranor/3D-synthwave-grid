import { useState } from "react";
import "./App.scss";
import { ThreeJsCanvas } from "./ThreeJsCanvas";

function App() {
  const [tile, setTile] = useState(0);

  return (
    <>
      <main>
        <div
          className="nav-grid"
          style={{ transform: `translateX(${tile * -100}vw)` }}
        >
          <div className="landing-page">
            <h1
              onClick={() => {
                setTile((old) => (old + 1) % 2);
              }}
            >
              Shane Cranor
            </h1>
            <nav>
              <a>Code</a>
              <a>Music</a>
              <a>Photos</a>
            </nav>
          </div>
          <section className="about-me">
            <div className="page-contents">
              <h2>About Me</h2>
              <p>
                Hey there! I am a full stack developer with Typescript and React
                being my preferred languages. I recently graduated with a BS and
                MS in Computer Science from the Colorado School of Mines. I play
                bass, drums, guitar, and keys and I mixed and mastered an album
                for my band, The Electric Army{" "}
                <a href="https://open.spotify.com/artist/39DDKLQfC72gb8Q8cy4RIr">
                  (listen here!)
                </a>
                .
              </p>
              <p>
                Some fun facts about me: I{"'"}m a shill for Cloudflare
                workers/pages, I love to cook, mess with electronics and make
                music. I played collegiate Valorant (e-sports) in college and I
                enjoy gaming occasionally.
              </p>
              <button
                onClick={() => {
                  setTile(tile - 1);
                }}
              >
                back
              </button>
            </div>
          </section>
        </div>
      </main>
      <div className="three-js-canvas">
        <ThreeJsCanvas />
      </div>
    </>
  );
}

export default App;
