const app = require("./src/app");
const db = require("./src/config");

setTimeout(
  () =>
    db.sequelize
      .authenticate()
      .then(() => {
        db.sequelize.sync({ force: false });
        console.log(`Authenticated`);
      })
      .catch((err) => console.log(`Error occurred `, err)),
  10000
);

app.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});
