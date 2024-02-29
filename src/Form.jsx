import { useState } from "react";
import Card from "./Card.jsx";

const btnStyle = { backgroundColor: "#FDCA40" };

function Form() {
  const [nombre, setnombre] = useState("");
  const [pizza, setpizza] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [cardData, setCardData] = useState(null);
  // const [pizzasCount, setpizzasCount] = useState(0);
  const [pizzasList, setpizzasList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim().length <= 3 ||
      // nombre.trim().startsWith(" ") ||
      pizza.trim().length <= 6
    ) {
      setErrorMessage("Ingresa los datos correctamente");
      setShowCard(false);
    } else {
      setShowCard(true);
      setCardData({ nombre, pizza });
      setpizzasList([...pizzasList, { nombre, pizza }]);
      // setpizzasCount(pizzasCount + 1);
      setErrorMessage("");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.id === "nombre") {
      setnombre(e.target.value);
    } else if (e.target.id === "pizza") {
      setpizza(e.target.value);
    }
  };

  return (
    <div>
      {/* <h2>Formulario de Libros Leidos</h2>
      <p>📚Número de libros Leidos: {pizzasCount}📚</p> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <br />
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pizza">Pizza Preferida:</label>
          <br />
          <input
            type="text"
            id="pizza"
            value={pizza}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
        <br />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && <Card nombre={cardData.nombre} pizza={cardData.pizza} />}
      <br />
      <br />
    </div>
  );
}

export default Form;
