const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const FoodModel = require("./Models/Food");
const RestaurantModel = require("./Models/Restaurant");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://JJ:jj123@cluster0.mcfem6h.mongodb.net/Food_Delivery_App?retryWrites=true&w=majority", { useNewUrlParser: true });

app.post("/viewFood", async (req, res) => {
  let result = await FoodModel.find();
  res.send(result);
});

app.post("/addFood", async (req, res) => {
  var data = new FoodModel(req.body);
  await data.save();
  res.send(data);
});

app.post("/searchFood", async (req, res) => {
  let searchQuery = {};

  if (req.body.food_item_name) {
    searchQuery.food_item_name = new RegExp(req.body.food_item_name, 'i');
  }

  if (req.body.minPrice && req.body.maxPrice) {
    searchQuery.price = { $gte: req.body.minPrice, $lte: req.body.maxPrice };
  } else if (req.body.minPrice) {
    searchQuery.price = { $gte: req.body.minPrice };
  } else if (req.body.maxPrice) {
    searchQuery.price = { $lte: req.body.maxPrice };
  }

  let result = await FoodModel.find(searchQuery);
  res.send(result);
});

app.post("/viewRes", async (req, res) => {
  let result = await RestaurantModel.find();
  res.send(result);
});

app.post("/addRes", async (req, res) => {
  var data = new RestaurantModel(req.body);
  await data.save();
  res.send(data);
});

app.post('/searchRes', async (req, res) => {
  let searchQuery = {};

  for (const key in req.body) {
    if (req.body[key] !== '') {
      searchQuery[key] = new RegExp(req.body[key], 'i');
    }
  }

  let result = await RestaurantModel.find(searchQuery);
  res.send(result);
});


app.listen(4000, () => {
  console.log("Copy that!");
});
