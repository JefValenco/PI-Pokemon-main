import { useState } from "react";
import styles from "../../views/Form/Form.module.css";
import axios from "axios";
import { getType } from "../../redux/actions";
import { getDeletePokemons } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { validate } from "../../middleware/validate";
import SearchBar from "../../components/SearchBar/SearchBar";
import { altaria } from "../.././images/images.js";

const Form = () => {
  const dispatch = useDispatch();

  //---------- Selectors ----------//

  const pokemons = useSelector((state) => state.deleteItem);

  const types = useSelector((state) => state.types);

  //----------Dispatches ----------//

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDeletePokemons());
  }, [dispatch]);

  //----------States----------//
  const [form, setForm] = useState({
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

  const [formDelete, setFormDelete] = useState({
    name: "",
  });

  //----------Reset States----------//

  const resetForm = () => {
    setForm({
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

  const resetFormDelete = () => {
    setFormDelete({
      name: "",
    });
  };

  const [errors, setErrors] = useState({
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

  //----------Change Handlers----------//

  const changeHandler = (event, index) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value }, errors, setErrors);
    setForm({ ...form, [property]: value });
  };

  const changeHandlerDelete = (event, index) => {
    const property = event.target.name;
    const value = event.target.value;

    setFormDelete({ ...formDelete, [property]: value });
  };

  const changeHandlerType = (event) => {
    const value = event.target.value;

    if (!form.types.includes(value)) {
      setForm({ ...form, types: [...form.types, value] });
    }
  };

  //----------Summit Handlers----------//

  const submitHandler = (event) => {
    event.preventDefault();

    for (const { field, message } of requiredFields) {
      if (!form[field]) {
        alert(message);
        return;
      }
    }

    if (form.types.length === 0 || form.types.includes("")) {
      alert("Please select at least one type for your Pokemon.");
      return;
    }

    axios
      .post("/pokemon", form)
      .then((res) => {
        alert("Pokemon created!");
        resetForm();
        window.location.reload();
      })
      .catch((err) => alert(err));
  };

  const submitHandlerDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`/pokemon?name=${formDelete.name}`)
      .then((res) => {
        alert("Pokemon deleted!");
        resetFormDelete();
        window.location.reload();
      })
      .catch((err) => alert(err));
  };

  //----------Complementary fn ----------//

  const removeType = (event, index) => {
    event.preventDefault(); // prevent form submission
    const newType = [...form.types];
    newType.splice(index, 1);
    setForm({ ...form, types: newType });
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

  //---------- Render  ----------//

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.container}>
          <div className={styles.box}>
            {" "}
            <h1 className={styles.h4}>Create Pokemon</h1>
            <form onSubmit={submitHandler}>
              <div>
                <label className={styles.label}>Name: </label>
                <input
                  className={styles.input}
                  type="text"
                  value={form.name}
                  onChange={changeHandler}
                  name="name"
                  style={{ width: "260px" }}
                ></input>
              </div>

              <div>
                <label className={styles.label}>life: </label>
                <input
                  className={styles.input}
                  type="number"
                  value={form.life}
                  onChange={changeHandler}
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
                  value={form.attack}
                  onChange={changeHandler}
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
                  value={form.defense}
                  onChange={changeHandler}
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
                  value={form.speed}
                  onChange={changeHandler}
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
                  value={form.height}
                  onChange={changeHandler}
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
                  value={form.weight}
                  onChange={changeHandler}
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
                  value={form.image}
                  onChange={changeHandler}
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
                  {form.image && (
                    <img
                      src={form.image}
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
                  {types &&
                    types
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
                  {form.types.map((types, index) => (
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
                Create
              </button>
            </form>
          </div>
          <div className={styles.box}>
            <h1 className={styles.h4}>Delete Pokemon</h1>

            <form onSubmit={submitHandlerDelete}>
              <div>
                <label className={styles.label}>Name: </label>
                <select
                  className={styles.input}
                  placeholder="Choose a pokemon to delete..."
                  pokemons="text"
                  value={formDelete.name}
                  onChange={changeHandlerDelete}
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
              </div>

              <button
                className={`${styles.Submmit} ${
                  form.name ? "" : styles.disabled
                }`}
                disabled={!formDelete.name}
                type="submit"
              >
                Confirm Delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
