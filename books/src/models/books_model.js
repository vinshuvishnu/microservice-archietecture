module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define(
      "Books",
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
          tableName: "Books",
      }
  );
  return Books;
};
