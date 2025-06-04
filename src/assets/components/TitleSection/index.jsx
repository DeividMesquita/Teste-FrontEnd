import "./index.css";

function TitleSection({ title }) {
  return (
    <div className="container-xxl title-section">
      <h1>{title}</h1>
      <a>Ver mais</a>
    </div>
  );
}


export default TitleSection;