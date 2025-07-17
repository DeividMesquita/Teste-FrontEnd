import "./index.css";

// componente para titulos de seções
function TitleSection({ title }) {
  return (
    <div className="container-xxl title-section">
      <h1>{title}</h1>
      {/* Usando a tag <a> em vez de <button> pois é destinada à navegação entre páginas */}
      <a>Ver mais</a>
    </div>
  );
}


export default TitleSection;