const Mongoose=require("mongoose")

const RestaurantSchema=Mongoose.Schema(
    {
        "restaurant_name": String,
        "cuisine_type": String,
        "location": String,
        "opening_hours": String,
        "phone_number": String,
        "email": String,
        "sampleimage": String
    }
)

const RestaurantModel=Mongoose.model("Restaurant",RestaurantSchema)

module.exports=(RestaurantModel)