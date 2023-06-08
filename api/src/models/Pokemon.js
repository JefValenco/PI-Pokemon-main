const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      life: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      attack: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      defense: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "../images/download.png",
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
