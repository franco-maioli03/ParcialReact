import "./Card.css";

function Card({ nombre, pizza }) {
  return (
    <div className="card">
      <h2>Estos son los datos que ingresaste</h2>
      <p>Nombre: {nombre}</p>
      <p>Pizza favorita: {pizza}</p>
    </div>
  );
}

export default Card;
