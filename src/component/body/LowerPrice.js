export default function LowerPrice(props) {
  return (
    <>
      <div>
        <p>
          <span style={{ fontWeight: "bold" }}>{props.price}</span>
          {props.person}
        </p>
      </div>
    </>
  );
}
