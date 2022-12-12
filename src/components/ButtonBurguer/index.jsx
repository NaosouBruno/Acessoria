import { useState } from "react";
import "./btnBurguer.scss";
export default function ButtonBurguer() {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };
  return (
    <section className="burguerContainer">
      <div
        className={active ? "icon iconActive" : "icon"}
        onClick={changeActive}
      >
        <div className="burguer burguer__Icon"></div>
      </div>
      <nav
        className={
          active
            ? "burguer__menu burguer__menu--Open "
            : "burguer__menu burguer__menu--Close"
        }
      >
        <div className="burguer__list">
          <ul className="burguer__listItem">
            <li>Home</li>
            <li>Serviços</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
      </nav>
    </section>
  );
}
