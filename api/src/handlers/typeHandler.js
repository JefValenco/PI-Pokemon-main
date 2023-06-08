const { getAllTypes } = require("../controllers/getAllTypesController");

const getTypeHandler = async (req, res) => {
  try {
    const typesTotal = await getAllTypes();
    res.status(200).json(typesTotal);
  } catch {
    res.status(400).send({
      error: "Error getActivgetTypeHandlerityHandler",
      message: error.message,
    });
  }
};

module.exports = {
  getTypeHandler,
};
