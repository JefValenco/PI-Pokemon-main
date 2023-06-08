import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Paged from "../../components/Paged/Paged";
import styles from "./Home.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { roy } from "../.././images/images.js";
import { pokelogo } from "../.././images/images.js";

import {
  getPokemons,
  getType,
  getItemByName,
  FilterByType,
  FilterByCreated,
  orderByAZ,
  orderByAttack,
} from "../../redux/actions";

const Home = () => {
  //---------- Selectors ----------//

  const allPokemons = useSelector((state) => state.pokemons);
  const getTypes = useSelector((state) => state.types);

  //---------- states ----------//
  const [isLoading2, setIsLoading2] = useState(false);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //---------- Pagination  ----------//

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //---------- filters and sorting  ----------//

  function handleSortTypes(e) {
    setIsLoading2(true);

    setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }

      dispatch(FilterByType(e.target.value));
      setCurrentPage(1);
      setIsLoading2(false);
    }, 500);
  }
  function handleSortCreated(e) {
    setIsLoading2(true);

    setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }

      getPokemons(1);

      dispatch(FilterByCreated(e.target.value));

      setIsLoading2(false);
    }, 500);
  }

  function handleSort(e) {
    e.preventDefault();
    const sortOrder = e.target.value;

    setIsLoading2(true);

    setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }

      console.log(sortOrder);
      dispatch(orderByAZ(sortOrder));
      setCurrentPage(1);
      setOrder(sortOrder);
      setIsLoading2(false);
    }, 500);
  }

  function handleSortAttack(e) {
    e.preventDefault();
    const sortOrder = e.target.value;

    setIsLoading2(true);

    setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      }

      console.log(sortOrder);
      dispatch(orderByAttack(sortOrder));
      setCurrentPage(1);
      setOrder(sortOrder);
      setIsLoading2(false);
    }, 500);
  }

  //----------Dispatches ----------//

  useEffect(() => {
    dispatch(getType());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getPokemons()).then(() => {
        setIsLoading(false);
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [dispatch]);

  //---------- Rendering ----------//

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
    <>
      <div className={styles.container}>
        <div className={styles.box1}>
          <div className={styles.options}>
            <div className={styles.imageWrapper}>
              <img src={pokelogo} alt="pokelogo" className={styles.pokelogo} />
            </div>
            <select
              className={styles["style-dropdown"]}
              onChange={(e) => handleSortCreated(e)}
            >
              <option value="" disabled selected hidden>
                Select Origin
              </option>

              <option value="All"> Select Origin</option>

              <option value="true">Data base</option>
              <option value="false">Api</option>
            </select>

            <select
              className={styles["style-dropdown"]}
              onChange={(e) => handleSortTypes(e)}
            >
              <option value="" disabled selected hidden>
                Select Type
              </option>

              <option value="All">Select Type</option>

              <option value=""></option>
              {getTypes &&
                getTypes
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.name} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>

            <select
              className={styles["style-dropdown"]}
              onChange={(e) => handleSort(e)}
            >
              <option value="" disabled selected hidden>
                Select an Order
              </option>
              <option value="des">A - Z</option>
              <option value="asc">Z - A</option>
              <option value="clear">Clear</option>
            </select>

            <select
              className={styles["style-dropdown"]}
              onChange={(e) => handleSortAttack(e)}
            >
              <option value="" disabled selected hidden>
                Select an Attack
              </option>
              <option value="asc">Higher Attack</option>
              <option value="des">Lower Attack</option>
              <option value="clear">Clear</option>
            </select>
          </div>

          <div className={styles.search}>
            <SearchBar />
          </div>
          <div className={styles.imageWrapper}>
            <img src={roy} alt="roy" className={styles.imageRoy2} />
          </div>
        </div>

        <div className={styles.box2}>
          {" "}
          {currentPokemons.length > 0 ? (
            <CardsContainer
              currentPokemons={currentPokemons}
              className={styles.cards}
            />
          ) : (
            navigate("/not-found")
          )}
        </div>
      </div>
      <div>
        {currentPokemons.length > 0 ? (
          <Paged
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
      {isLoading2 && (
        <div>
          <span
            className={styles.loader}
            style={{
              backgroundColor: "rgba(224, 98, 98, 0.85)",
              width: "100%",
              height: "100%",
            }}
          ></span>
        </div>
      )}
    </>
  );
};

export default Home;
