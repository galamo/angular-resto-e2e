const mongoose = require("mongoose")



const CarsSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Horsepower: {
        type: Number,
        required: true
    }

});
const CarsModel = mongoose.model("cars", CarsSchema)

module.exports = CarsModel;