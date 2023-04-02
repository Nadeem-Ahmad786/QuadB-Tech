const express = require('express');
const connectDB = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
app.use(
  cors({
      credentials: true,
      origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));

app.use(
  express.urlencoded({ extended: true })
);

const productRoutes = require("./routes/product");

app.use("/api/product", productRoutes);

connectDB();

const port  = process.env.PORT || 4000;

app.listen(port , function(){
    console.log("Server Started");
});