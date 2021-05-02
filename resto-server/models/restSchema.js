const mongoose = require("mongoose")



const restSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: false
    }
});
const RestModel = mongoose.model("restaurants", restSchema)
module.exports = RestModel;