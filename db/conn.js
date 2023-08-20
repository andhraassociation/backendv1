const mongoose = require("mongoose");
require("dotenv").config();
//const DB =
  //"mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/maps?retryWrites=true&w=majority";

  const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1.jwm6ryk.mongodb.net/andhra1?retryWrites=true&w=majority`;
 mongoose
  .connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected!!!"))
  .catch((error) => {
    console.log(error);
  });
