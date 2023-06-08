import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { pokelogo } from "../.././images/images.js";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.links}>
        <Link to="/pokemons" className={style.btnPrimary}>
          Pokemons
        </Link>
        <Link to="/createpokemons" className={style.btnPrimary}>
          Create Pokemon
        </Link>
        <Link to="/modify" className={style.btnPrimary}>
          Modify Pokemon
        </Link>
        <Link to="/" className={style.btnPrimary}>
          Landing
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
