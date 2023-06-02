const Mongoose=require("mongoose")

const FoodSchema=Mongoose.Schema(
    {
        "restaurant_name": String,
        "food_item_name": String,
        "description": String,
        "price": Number,
        "foodimage": String
    }
)

const FoodModel=Mongoose.model("Food",FoodSchema)

module.exports=(FoodModel)