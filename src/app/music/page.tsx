//music page
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import ElectricArmy from "@/public/assets/img/electric-army.jpg";
import "./page.scss";
import Navbar from "@/components/old-components/Navbar/Navbar";
import Link from "next/link";
const Page = () => {
  return (
    <main className="p-music">
      <Navbar />
      <h1>Music</h1>
      <div className="grid">
        <Link href="https://open.spotify.com/album/0wD82OWewTSDZiNVjRIaPT">
          <section>
            <h2>The Electric Army</h2>
            <img src={ElectricArmy.src} alt="Hotbed of Descent Album Cover" />
          </section>
        </Link>
        <Link href="https://soundcloud.com/shane_cranor">
          <section>
            <h2>Soundcloud</h2>
            <div className="placeholder">
              <PlaceholderImage seed="3D Arcade Game" animate />
            </div>
          </section>
        </Link>
      </div>
    </main>
  );
};

export default Page;
