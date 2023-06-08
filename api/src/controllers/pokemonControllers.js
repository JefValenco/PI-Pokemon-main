const axios = require("axios");
const { Pokemon, Type } = require("../db");
const urlPokemons = require("../pokeData");

const cleanArray = (arr) =>
  arr.map(({ data: element }) => {
    return {
      id: element.id.toString(),
      name: element.forms[0].name.toLowerCase(),
      life: element.stats[0].base_stat,
      attack: element.stats[1].base_stat,
      defense: element.stats[2].base_stat,
      speed: element.stats[5].base_stat,
      height: element.height,
      weight: element.weight,
      image: element.sprites.other["dream_world"].front_default,
      image2: element.sprites.other["official-artwork"].front_default,
      image3: element.sprites.other["home"].front_default,
      image4: element.sprites.other["home"].front_shiny,

      types: element.types.map((ty) => {
        return { name: ty.type.name };
      })[0].name,
      create: false,
    };
  });

const getAllPokemons = async () => {
  const dataDB = await Pokemon.findAll({ include: Type });

  const dataBasePokemons = dataDB?.map((element) => {
    const types = element.dataValues.types.map((type) => type.name).join(", ");

    return {
      id: element.dataValues.id,
      name: element.dataValues.name,
      life: element.dataValues.life,
      attack: element.dataValues.attack,
      defense: element.dataValues.defense,
      speed: element.dataValues.speed,
      height: element.dataValues.height,
      weight: element.dataValues.weight,
      image: element.dataValues.image,
      types,
      create: true,
    };
  });

  /*  const apiPokemon = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=150"
  );

  const apiPokemonUrl = apiPokemon.data.results.map((element) =>
    axios.get(element.url)
  );

  const pokemonData = await Promise.all(apiPokemonUrl);

  const apiPokemons = cleanArray(pokemonData); */

  const apiPokemons = urlPokemons;

  return [...dataBasePokemons, ...apiPokemons];
};

const getAllPokemonsByName = async (name) => {
  const dataBasePokemons = await Pokemon.findAll({ where: { name } });

  const apiPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");

  const apiPokemonUrl = apiPokemon.data.results.map((element) =>
    axios.get(element.url)
  );

  const pokemonData = await Promise.all(apiPokemonUrl);

  const apiPokemons = cleanArray(pokemonData);

  const filterPokemon = await apiPokemons.filter((element) =>
    element.name.toLowerCase().includes(name.toLowerCase())
  );

  return [...dataBasePokemons, ...filterPokemon];
};

const getAllPokemonsById = async (id, source) => {
  let pokemon;

  if (source === "api") {
    const apiPokemons = await getAllPokemons();
    pokemon = await apiPokemons.find((elemen) => elemen.id == Number(id));
  } else {
    pokemon = await Pokemon.findByPk(id, { include: Type });
  }

  return pokemon;
};
const updatePokemon = async (
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
) => {
  const pokemon = await getAllPokemonsById(id);

  if (!pokemon) return pokemon;

  pokemon.name = name || pokemon.name;
  pokemon.life = life || pokemon.life;
  pokemon.attack = attack || pokemon.attack;
  pokemon.defense = defense || pokemon.defense;
  pokemon.speed = speed || pokemon.speed;
  pokemon.height = height || pokemon.height;
  pokemon.weight = weight || pokemon.weight;
  pokemon.image = image || pokemon.image;

  if (types) {
    const typeNames = Array.isArray(types)
      ? types
      : types.split(",").map((type) => type.trim());
    const allTypes = await Type.findAll({ where: { name: typeNames } });
    await pokemon.setTypes(allTypes);
  }

  await pokemon.save();

  return pokemon;
};

module.exports = {
  getAllPokemons,
  getAllPokemonsByName,
  getAllPokemonsById,
  updatePokemon,
};
