const express = require("express")
const cors = require("cors")
const axios = require("axios")

const countriesBseURL = "https://restcountries.eu/rest/v2/all";

const app = express()
app.use(cors())

app.get("/orders", (req, res, next) => {
    const orders = [{
        orderNumber: 11111,
        fromHour: "20:00",
        toHour: "21:00",
        orderOwner: "Hilal",
        reservations: 10,
        day: new Date().toLocaleDateString()
    }, {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    },
    {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    },
    {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    }]
    return res.json(orders)
})

app.get("/restaurants", async (req, res, next) => {
    const restaurants = [{ name: "beach", country: "USA" },
    { name: "Roof", country: "ISR" },
    { name: "Port", country: "ISR" }]

    const { data: countriesFromApi } = await axios.get(countriesBseURL)
    const restaurantsWithFlags = restaurants.map(rest => { return _restWithFlag(rest) })
    function _restWithFlag(rest) {
        const currentCountry = countriesFromApi.find(country => country.alpha3Code === rest.country)
        return { ...rest, flag: currentCountry && currentCountry.flag }
    }
    console.log(restaurantsWithFlags)
    res.json([])
})

app.listen(5000)


