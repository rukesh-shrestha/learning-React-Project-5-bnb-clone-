import Image from "./Image";
import image1 from "./images/image1.png";
import HeroLower from "./Hero-Lower-Text";

export default function LowerSection() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Image image={image1} styles="lowerimage" />
          <HeroLower />
        </div>
      </div>
    </>
  );
}
