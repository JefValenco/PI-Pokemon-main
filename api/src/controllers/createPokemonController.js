const axios = require("axios");
const { Pokemon, Type } = require("../db");

const createPokemon = async (body) => {
  const { name, life, attack, defense, speed, height, weight, image, types } =
    body;
  const newPokemon = await Pokemon.create({
    name: name,
    life: life,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
    image: image,
  });

  const typeNames = Array.isArray(types)
    ? types
    : types.split(",").map((type) => type.trim());
  const allTypes = await Type.findAll({ where: { name: typeNames } });
  await newPokemon.addType(allTypes);

  return newPokemon;
};

module.exports = {
  createPokemon,
};
