const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cityRouter = require("./routers/cityRouter");
const townRouter = require("./routers/townRouter");

const mongo_uri = process.env.DB_URI;

mongoose.connect(mongo_uri, (err) => {
  if (err) {
    console.log("cannot connect due to " + err);
  }
  console.log("DB connected");
});

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/citylist", cityRouter);
app.use("/town", townRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
