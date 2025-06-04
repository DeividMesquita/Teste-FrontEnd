import "./index.css";

function Author({name,date,rate}) {
  return (
    <div className="author">
      <p>
        por <span>{name}</span>
      </p>
      <div className="author__info">
        <div className="author__info--date">
            <p>{date}</p>
        </div>
        <div className="author__info--rating">
            <p>Nota: <span>{rate}</span>/10</p>
        </div>
      </div>
    </div>
  );
}

export default Author;
