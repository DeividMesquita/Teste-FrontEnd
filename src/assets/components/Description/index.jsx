import "./index.css";

function Description(props) {
  return (
    <div className={`about__movie--description--gender ${props.className}`}>
      <h3>{props.h3}</h3>

      <p>{props.p}</p>
    </div>
  );
}

export default Description;
