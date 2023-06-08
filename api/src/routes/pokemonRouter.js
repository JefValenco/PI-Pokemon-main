const { Router } = require("express");
const {
  getPokemonHandler,
  getPokemonHandlerId,
  postPokemonHandler,
  EndPokemonHandler,
  UpdatePokemonHandler,
} = require("../handlers/pokemonHandler");
const { postValidate } = require("../middlewares/postValidate");

const pokemonRouter = Router();

pokemonRouter
  .route("/")
  .get(getPokemonHandler)
  .post(postValidate, postPokemonHandler)
  .delete(EndPokemonHandler)
  .put(UpdatePokemonHandler);

pokemonRouter.get("/:id", getPokemonHandlerId);

module.exports = pokemonRouter;
