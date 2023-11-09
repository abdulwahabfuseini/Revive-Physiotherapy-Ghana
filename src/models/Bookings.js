import { Schema, models, model } from "mongoose"

const BookingSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
}, {timestamps: true})

const Bookings = models.Bookings || model("Bookings", BookingSchema)

export default Bookings