const mongoose = require("mongoose")



const CarsSchema = new mongoose.Schema({});
const CarsModel = mongoose.model("cars", CarsSchema)

module.exports = CarsModel;