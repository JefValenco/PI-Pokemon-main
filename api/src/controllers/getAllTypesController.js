const axios = require("axios");
const { Type } = require("../db");

const getAllTypes = async () => {
  const apiTypes = (
    await axios.get(`https://pokeapi.co/api/v2/type
    `)
  ).data.results.map((element) => {
    return { name: element.name };
  });
  console.log(apiTypes);
  const promises = apiTypes.map(async (element) => {
    const [type, created] = await Type.findOrCreate({
      where: {
        name: element.name,
      },
    });
    return type;
  });

  const types = await Promise.all(promises);
  return types;
};
module.exports = {
  getAllTypes,
};
