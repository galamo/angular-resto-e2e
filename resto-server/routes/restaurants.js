const express = require("express")
const RestModel = require("../models/restSchema")
const getAllRestaurants = require("../controller/restaurantsController")
const axios = require("axios")
const router = express.Router()

const countriesBseURL = "https://restcountries.eu/rest/v2/all";

router.get("/", async (req, res, next) => {
    const restaurants = await getAllRestaurants();
    const { data: countriesFromApi } = await axios.get(countriesBseURL)
    const restaurantsWithFlags = restaurants.map(rest => { return _restWithFlag(rest) })
    function _restWithFlag(rest) {
        const currentCountry = countriesFromApi.find(country => country.alpha3Code === rest.country)
        const { name, country } = rest;
        return { name, country, flag: currentCountry && currentCountry.flag }
    }
    res.json(restaurantsWithFlags)
})



module.exports = router;