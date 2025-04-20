const app = require("./app");
const { connectDB } = require("./src/DB");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 2305, () => {
      console.log(`Server is running on port: ${process.env.PORT || 2305}`);
    });
  })
  .catch((error) => {
    console.log("DB connection error: ", error);
  });
