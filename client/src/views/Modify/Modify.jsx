import { useState } from "react";
import styles from "../../views/Modify/Modify.module.css";
import axios from "axios";
import { getType } from "../../redux/actions";
import { getModifyPokemons } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { validate } from "../../middleware/validate";
import SearchBar from "../../components/SearchBar/SearchBar";
import { sparks } from "../.././images/images.js";
import { altaria } from "../.././images/images.js";

const Modify = () => {
  const dispatch = useDispatch();

  //----------States----------//

  const [formModify, setFormModify] = useState({
    id: "",
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    image: "",
    types: [],
  });

  //----------Reset States----------//

  const resetFormModify = () => {
    setFormModify({
      id: "",
      name: "",
      life: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
  };

  //----------Change Handlers----------//

  const changeHandlerModify = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "name") {
      const selectedPokemon = pokemons.find(
        (pokemon) => pokemon.name === value
      );
      setFormModify({
        ...formModify,
        [property]: value,
        id: selectedPokemon?.id || "",
      });
    } else {
      setFormModify({ ...formModify, [property]: value });
    }
  };

  const changeHandlerType = (event) => {
    const value = event.target.value;

    if (!formModify.types.includes(value)) {
      setFormModify({ ...formModify, types: [...formModify.types, value] });
    }
  };

  //----------Summit Form Validation ----------//

  const requiredFields = [
    { field: "name", message: "Please enter a name for your Pokemon." },
    {
      field: "life",
      message: "Please enter the life points for your Pokemon.",
    },
    {
      field: "attack",
      message: "Please enter the attack points for your Pokemon.",
    },
    {
      field: "defense",
      message: "Please enter the defense points for your Pokemon.",
    },
    {
      field: "speed",
      message: "Please enter the speed points for your Pokemon.",
    },
    { field: "height", message: "Please enter the height of your Pokemon." },
    { field: "weight", message: "Please enter the weight of your Pokemon." },
    { field: "image", message: "Please enter the image URL for your Pokemon." },
    {
      field: "types",
      message: "Please select at least one type for your Pokemon.",
    },
  ];

  //----------Summit Handlers----------//

  const submitHandlerModify = (event) => {
    event.preventDefault();

    // Check if required fields are missing
    for (const { field, message } of requiredFields) {
      if (!formModify[field]) {
        alert(message);
        return;
      }
    }

    // Check if at least one type is selected

    if (formModify.types.length === 0 || formModify.types.includes("")) {
      alert("Please select at least one type for your Pokemon.");
      return;
    }

    // Send formModify data to server
    axios
      .put("http://localhost:3003/pokemon", formModify)
      .then((res) => {
        alert("Pokemon updated!");
        resetFormModify();
        window.location.reload();
      })
      .catch((err) => alert(err));
  };

  //----------Dispatches Handlers----------//

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getModifyPokemons());
  }, [dispatch]);

  //---------- Selectors ----------//

  const pokemons = useSelector((state) => state.modifyItem);

  const typess = useSelector((state) => state.types);

  //----------Complementary fn ----------//

  const removeType = (event, index) => {
    event.preventDefault(); // prevent form submission
    const newType = [...formModify.types];
    newType.splice(index, 1);
    setFormModify({ ...formModify, types: newType });
  };

  const [id, setId] = useState("");

  const [life, setLife] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");
  const [types, setTypes] = useState("");

  //---------- Render  ----------//

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.h4}>Select Type</h1>
          <div className={styles.container}>
            <div className={styles.box}>
              <label className={styles.label}>Name: </label>
              <select
                className={styles.input}
                placeholder="Choose a pokemon to Modify..."
                pokemons="text"
                value={formModify.name}
                onChange={(event) => {
                  changeHandlerModify(event);
                  const selectedPokemon = pokemons.find(
                    (pokemon) => pokemon.name === event.target.value
                  );
                  setId(selectedPokemon?.id || "");
                  setLife(selectedPokemon?.life || "");
                  setAttack(selectedPokemon?.attack || "");
                  setDefense(selectedPokemon?.defense || "");
                  setSpeed(selectedPokemon?.speed || "");
                  setHeight(selectedPokemon?.height || "");
                  setWeight(selectedPokemon?.weight || "");
                  setImage(selectedPokemon?.image || "");
                  setTypes(selectedPokemon?.types || "");
                  console.log("Types:", types, typeof types);
                }}
                name="name"
              >
                <option value="pokemons"></option>
                {pokemons &&
                  pokemons
                    .sort((a, b) => {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;
                    })
                    .map((pokemons) => {
                      return (
                        <option value={pokemons.name} key={pokemons.id}>
                          {pokemons.name}
                        </option>
                      );
                    })}
              </select>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {image && (
                  <img
                    className={styles.img}
                    src={image}
                    alt={formModify.name}
                  />
                )}
                {image && (
                  <img
                    className={styles.img2}
                    src={sparks}
                    alt="Sparks Image"
                    style={{ position: "absolute", opacity: 0.8 }}
                  />
                )}
              </div>
            </div>
            <div className={styles.box}>
              <div>
                <div className={styles.forml}>
                  <div>
                    <label className={styles.label}>id: </label>
                    <input
                      className={styles.input3}
                      type="text"
                      value={id}
                      name="id"
                      disabled // added disabled attribute
                    />

                    <div>
                      <label className={styles.label}>Life: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={life}
                        name="life"
                        disabled // added disabled attribute
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Attack: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={attack}
                        name="attack"
                        disabled // added disabled attribute
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Defense: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={defense}
                        name="defense"
                        disabled // added disabled attribute
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Speed: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={speed}
                        name="speed"
                        disabled // added disabled attribute
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Height: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={height}
                        name="height"
                        disabled // added disabled attribute
                      />
                    </div>

                    <div>
                      <label className={styles.label}>Weight: </label>
                      <input
                        className={styles.input3}
                        type="text"
                        value={weight}
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
                          value={types}
                          name="types"
                          disabled // added disabled attribute
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h1 className={styles.h4}>Modify Type</h1>
          <form onSubmit={submitHandlerModify}>
            <div>
              <label className={styles.label}>Name: </label>
              <input
                className={styles.input}
                type="text"
                value={formModify.name}
                onChange={changeHandlerModify}
                name="name"
                style={{ width: "260px" }}
              ></input>
            </div>

            <div>
              <label className={styles.label}>life: </label>
              <input
                className={styles.input}
                type="number"
                value={formModify.life}
                onChange={changeHandlerModify}
                name="life"
                placeholder={"0"}
                min="10"
                max="100"
                step="10"
                style={{ width: "260px" }}
              />
            </div>

            <div>
              <label className={styles.label}>Attack: </label>
              <input
                className={styles.input}
                type="number"
                value={formModify.attack}
                onChange={changeHandlerModify}
                name="attack"
                placeholder={"0"}
                min="10"
                max="100"
                step="10"
                style={{ width: "260px" }}
              />
            </div>

            <div>
              <label className={styles.label}>Defense: </label>
              <input
                className={styles.input}
                type="number"
                value={formModify.defense}
                onChange={changeHandlerModify}
                name="defense"
                placeholder={"0"}
                min="10"
                max="100"
                step="10"
                style={{ width: "260px" }}
              />
            </div>

            <div>
              <label className={styles.label}>Speed: </label>
              <input
                className={styles.input}
                type="number"
                value={formModify.speed} // set the default value to 0
                onChange={changeHandlerModify}
                name="speed"
                placeholder={"0"}
                min="0"
                max="100"
                step="10"
                style={{ width: "260px" }}
              />
            </div>

            <div>
              <label className={styles.label}>Height: </label>
              <select
                className={styles.input}
                value={formModify.height}
                onChange={changeHandlerModify}
                name="height"
                style={{ width: "260px" }}
              >
                <option value="" disabled selected>
                  {"0 cms"}
                </option>

                <option value="10">10 cms</option>
                <option value="20">20 cms</option>
                <option value="30">30 cms</option>
                <option value="40">40 cms</option>
                <option value="50">50 cms</option>
                <option value="60">60 cms</option>
                <option value="70">70 cms</option>
                <option value="80">80 cms</option>
                <option value="90">90 cms</option>
                <option value="100">100 cms</option>
              </select>
            </div>

            <div>
              <label className={styles.label}>Weight: </label>
              <select
                className={styles.input}
                value={formModify.weight}
                onChange={changeHandlerModify}
                name="weight"
                style={{ width: "260px" }}
              >
                <option value="" disabled selected>
                  {"0 kls"}
                </option>

                <option>5 kls</option>
                <option>10 kls</option>
                <option>15 kls</option>
                <option>30 kls</option>
                <option>35 kls</option>
                <option>40+ kls</option>
              </select>
            </div>

            <div>
              <label className={styles.label}>Image: </label>
              <select
                className={styles.input}
                value={formModify.image}
                onChange={changeHandlerModify}
                name="image"
                style={{ width: "260px" }}
              >
                <option value="" disabled>
                  Choose image
                </option>

                <option value="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg">
                  img 1
                </option>
                <option value="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg">
                  img 2
                </option>
                <option value={altaria}>img 3</option>
              </select>
              <div>
                {formModify.image && (
                  <img
                    src={formModify.image}
                    alt="Preview"
                    className={styles.img}
                  />
                )}
              </div>
            </div>

            <div>
              <label className={styles.label}>Types: </label>
              <select
                className={styles.input5}
                placeholder="Choose a type"
                type="text"
                onChange={changeHandlerType}
                name="type"
              >
                <option value="" disabled selected>
                  Choose type
                </option>
                <option value=""></option>
                {typess &&
                  typess
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

              <div>
                {formModify.types.map((types, index) => (
                  <div key={index}>
                    <span style={{ color: "#ffff" }}>{types}</span>
                    <button
                      className={styles.btnPrimary3}
                      onClick={(event) => removeType(event, index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.Submmit} type="submit">
              Modify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modify;
