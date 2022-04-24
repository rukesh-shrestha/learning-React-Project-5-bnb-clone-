import "./css/style.css";
import Image from "./Image";
import HeroText from "./Hero-Text";
import LowerSection from "./Hero-Lower-Section";
import hero from "./images/hero-image.png";
export default function Hero() {
  return (
    <>
      <div className="px-5 bg-white hero">
        <Image image={hero} style="imgheight" />
        <HeroText
          title="Online Experiences"
          desc1="Join unique interactive activities led by"
          desc2="one-of-a-kind hosts—all without leaving"
          desc3="home."
        />
        <LowerSection />
      </div>
    </>
  );
}
