import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { pokelogo } from "../.././images/images.js";

function Landing() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div>
        <span
          className={styles.loader}
          style={{ backgroundColor: "#C0485A", width: "100%", height: "100%" }}
        ></span>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.content}>
          <div>
            <p className={styles.p}>Welcome to</p>

            <h1 className={styles.h1}>Pokemon!</h1>
          </div>
          <div className={styles.contentButton}>
            <Link to="/pokemons">
              <button className={styles.btnPrimary}>Get in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
