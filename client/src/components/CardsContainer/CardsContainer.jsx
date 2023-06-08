import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import { Link } from "react-router-dom";

const CardsContainer = ({ currentPokemons }) => {
  return (
    <div className={styles.container}>
      {currentPokemons.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <Link to={`${pokemon.id}`} key={pokemon.id}>
              <Card
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                key={pokemon.id}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardsContainer;
