import Image from "./Image";
import star from "./images/Star.png";
import LowerText from "./HeroLower-Text";
import LowerPrice from "./LowerPrice";

export default function HeroLowerText() {
  return (
    <>
      <div className="d-flex starpadding divheight">
        <div>
          <Image image={star} style="star" />
        </div>

        <div>
          <LowerText text="5.0" />
        </div>
        <div style={{ paddingLeft: "3px" }}>
          <LowerText text="(6)" />
        </div>
        <div>
          <LowerText text=". USA" />
        </div>
      </div>
      <div>
        <div className="desc">
          <LowerText text="Life lessons with Katie Zaferes" />

          <LowerPrice price="From $136" person=" /person" />
        </div>
      </div>
    </>
  );
}
