import "./index.css";

// Esse componente é responsável por renderizar a descrição do filme para evitar repetição de código
function Description(props) {
  return (
    <div className={`about__movie--description--gender ${props.className}`}>
      <h3>{props.h3}</h3>

      <p>{props.p}</p>
    </div>
  );
}

export default Description;
