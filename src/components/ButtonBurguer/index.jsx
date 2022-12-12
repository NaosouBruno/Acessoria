import { useState } from "react";
import "./btnBurguer.scss";
export default function ButtonBurguer() {
  const [active, setActive] = useState(false);

  /*  const changeActive = () => {
    setActive(!active);
  }; */
  return (
    <header>
      <nav className="navContainer">
        <ul className={`navContainer__items ${active && "open"}`}>
          <li onClick={() => setActive(!active)}>Inicio</li>
          <li onClick={() => setActive(!active)}>Sobre</li>
          <li onClick={() => setActive(!active)}>Serviços</li>
          <li onClick={() => setActive(!active)}>Contato</li>
        </ul>
        <div
          className={`nav-toggle ${active && "open"}`}
          onClick={() => setActive(!active)}
        >
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
}
