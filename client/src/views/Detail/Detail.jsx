import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getItemById } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";
import { pokeball } from "../.././images/images.js";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const item = useSelector((state) => state.itemById);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getItemById(id)).then(() => {
        setIsLoading(false);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  console.log(
    "state:",
    useSelector((state) => state)
  );

  if (isLoading) {
    return (
      <div>
        <span
          className={styles.loader}
          style={{
            backgroundColor: "#c0485a",
            width: "100%",
            height: "100%",
          }}
        ></span>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box1}>
          {" "}
          <div
            style={{
              position: "relative",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
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
              src={item.image}
              width="150"
              height="150"
              alt="img"
              style={{ position: "absolute", zIndex: "2" }}
            />
          </div>
        </div>
        <div className={styles.box2}>
          {/*   <div>
            <h1 className={styles.label}>{item.name}</h1>
            <h3 className={styles.label}>Height: {item.height}</h3>
            <h3 className={styles.label}>Life: {item.life}</h3>
            <h3 className={styles.label}>Attack: {item.attack}</h3>
            <h3 className={styles.label}>Defense: {item.defense}</h3>
            <h3 className={styles.label}>Speed: {item.speed}</h3>
            <h3 className={styles.label}>Types:</h3>
            {Array.isArray(item.types) ? (
              item.types.map((type) => <h3 key={type.id}>{type.name}</h3>)
            ) : (
              <h3 className={styles.label}>{item.types}</h3>
            )}
          </div> */}

          <div className={styles.forml}>
            <div>
              <label className={styles.label}>id: </label>
              <input
                className={styles.input3}
                type="text"
                value={item.id}
                name="id"
                disabled // added disabled attribute
              />

              <div>
                <label className={styles.label}>Life: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.life}
                  name="life"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <label className={styles.label}>Attack: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.attack}
                  name="attack"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <label className={styles.label}>Defense: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.defense}
                  name="defense"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <label className={styles.label}>Speed: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.speed}
                  name="speed"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <label className={styles.label}>Height: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.height}
                  name="height"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <label className={styles.label}>Weight: </label>
                <input
                  className={styles.input3}
                  type="text"
                  value={item.weight}
                  name="weight"
                  disabled // added disabled attribute
                />
              </div>

              <div>
                <div>
                  <label className={styles.label}>Types: </label>
                  <input
                    className={styles.input3}
                    type="text"
                    value={item.types}
                    name="types"
                    disabled // added disabled attribute
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link to="/pokemons">
          <button
            className={styles.Submmit}
            style={{
              marginBottom: "7em",
            }}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
