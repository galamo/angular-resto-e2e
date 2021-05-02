const restModel = require("../models/restSchema")

async function getAllRestaurants() {
    const result = await restModel.find({}, { __v: false });
    console.log(result)
    return result;
}

module.exports = getAllRestaurants;