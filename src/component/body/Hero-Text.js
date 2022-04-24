export default function HeroText(props) {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="text-title">
          <p>{props.title}</p>
        </div>
        <div className="text-description">
          <p>
            {props.desc1} <br />
            {props.desc2} <br />
            {props.desc3}
          </p>
        </div>
      </div>
    </>
  );
}
