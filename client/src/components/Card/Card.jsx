import styles from "./Card.module.css";

import { pokeball } from "../.././images/images.js";
import { pokeclose } from "../.././images/images.js";

const Card = (props) => {
  let types = props.types;

  if (Array.isArray(types)) {
    types = types.join(" "); // join array elements with a space separator
  }

  return (
    <div className={styles.card}>
      <div
        style={{
          position: "relative",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          img2
          className={styles.img2}
          src={pokeclose}
          width="400"
          height="308"
          alt="img"
          style={{ position: "absolute", zIndex: "1" }}
        />
        <img
          className={styles.img}
          src={pokeball}
          width="400"
          height="308"
          alt="img"
          style={{}}
        />
        <img
          className={styles.img3}
          src={props.image}
          width="150"
          height="150"
          alt="img"
          style={{ position: "absolute", zIndex: "2" }}
        />
      </div>
      <div>
        {" "}
        <h2 className={styles.h2}>{props.name.toUpperCase()}</h2>
        <p className={styles.p}>{types}</p>
      </div>
    </div>
  );
};

export default Card;
