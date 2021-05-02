const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        required: true
    },
    fromHour: {
        type: String,
        required: true
    },
    toHour: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    orderOwner: { //Maybe we will change this one!
        type: String,
        required: false
    },
    reservations: {
        type: Number,
        required: true
    },
    isOutside: {
        type: Boolean,
        required: false
    },
    restaurant: { // Maybe we will change this one!
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurants"
    }
});
const OrderModel = mongoose.model("orders", orderSchema)
module.exports = OrderModel;