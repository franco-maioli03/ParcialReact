import "./Navbar.css";

const Navbar = () => {
  const titulos = ["Franco Maioli", "Parcial", "FrontEnd III"];

  return (
    <div className="navbar">
      {titulos.map((titulo, indice) => (
        <h4 key={indice}>{titulo}</h4>
      ))}
    </div>
  );
};

export default Navbar;
