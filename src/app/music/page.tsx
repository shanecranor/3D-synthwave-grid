//music page
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import ElectricArmy from "@/public/assets/img/electric-army.jpg";
import "./page.scss";
import Navbar from "@/components/old-components/Navbar/Navbar";
const Page = () => {
  return (
    <main>
      <Navbar />
      <h1>Music</h1>
      <div className="grid">
        <section>
          <h2>The Electric Army</h2>
          <img src={ElectricArmy.src} alt="Hotbed of Descent Album Cover" />
        </section>
        <section>
          <h2>Soundcloud</h2>
          <PlaceholderImage seed="3D Arcade Game" animate />
        </section>
      </div>
    </main>
  );
};

export default Page;
