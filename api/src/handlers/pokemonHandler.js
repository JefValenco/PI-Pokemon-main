const {
  getAllPokemons,
  getAllPokemonsByName,
  getAllPokemonsById,
  updatePokemon,
} = require("../controllers/pokemonControllers");
const { createPokemon } = require("../controllers/createPokemonController");
const { Pokemon } = require("../db");
const axios = require("axios");

const getPokemonHandler = async (req, res) => {
  const { name } = req.query;
  try {
    console.log("Name:", name);
    const results = name
      ? await getAllPokemonsByName(name)
      : await getAllPokemons();

    if (results.length === 0) {
      throw new Error("No pokemon found");
    }

    console.log(results);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ error: "Error getPokemonHandler", message: error.message });
  }
};

const getPokemonHandlerId = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const pokemon = await getAllPokemonsById(id, source);
    console.log(pokemon);
    res.status(201).json(pokemon);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error pokemonHandlerId", message: error.message });
  }
};

const postPokemonHandler = async (req, res) => {
  try {
    const newPokemon = await createPokemon(req.body);
    res.status(201).json(newPokemon);
  } catch (error) {
    console.log(req.body);
    res
      .status(400)
      .json({ error: "Error postPokemonHandler", message: error.message });
  }
};

const EndPokemonHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const pokemonToDelete = await Pokemon.findOne({
      where: {
        name: name,
      },
    });

    if (!pokemonToDelete) {
      throw new Error("Pokemon not found");
    }

    await pokemonToDelete.destroy();

    res.status(200).json({ message: "Pokemon deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error deleting pokemon", message: error.message });
  }
};

const UpdatePokemonHandler = async (req, res) => {
  try {
    const {
      id,
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      types,
    } = req.body;

    if (!id) throw Error("Id must be provided");

    const pokemon = updatePokemon(
      id,
      name,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      image,
      types
    );

    if (pokemon.error) throw Error(pokemon.error);

    return res.status(200).json({ message: "Pokemon updated successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating pokemon", message: error.message });
  }
};

module.exports = {
  getPokemonHandler,
  getPokemonHandlerId,
  postPokemonHandler,
  EndPokemonHandler,
  UpdatePokemonHandler,
};
