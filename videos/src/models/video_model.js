module.exports = (sequelize, Sequelize) => {
  const Videos = sequelize.define(
      "Videos",
      {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          title: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          price: {
              type: Sequelize.STRING,
          },
          description: {
              type: Sequelize.STRING,
          },
      },
      {
          tableName: "Videos",
      }
  );
  return Videos;
};
