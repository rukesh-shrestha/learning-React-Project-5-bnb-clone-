export default function Image(props) {
  return (
    <>
      <div className="container bg-white">
        <img src={props.image} alt="" className={`img-fluid ${props.styles}`} />
      </div>
    </>
  );
}
