import { useState } from "react";
import "./btnBurguer.scss";
import ButtonNavItem from "../ButtonNavItem";
export default function NavBurguer() {
  const [active, setActive] = useState(false);
  return (
    <header>
      <nav className="navContainer">
        <ul className={`navContainer__items ${active && "open"}`}>
          <li onClick={() => setActive(!active)}>
            <ButtonNavItem name="Inicio" />
          </li>
          <li onClick={() => setActive(!active)}>
            <ButtonNavItem name="Serviços" />
          </li>

          <li onClick={() => setActive(!active)}>
            {" "}
            <ButtonNavItem name="Contato" />
          </li>
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
