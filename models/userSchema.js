var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
     username: {type: String, required: [true, "Cannot be blank"]},
     password: {type: String, required: [true, "Cannot be blank"]},
     firstName: String,
     lastName: String,
     email: {type: String, required: [true, "Cannot be blank"]},
     mobile: Number,
     dob: Date,
     address: String,
     currentRide: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "Ride"
        },
        default: null
     },
     pastRides: [{
        type: mongoose.Schema.ObjectId,
        ref: "Ride"
     }],
     rating: {type: Number, default: 0},
     wallet: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: "Wallet"
        }
     },
     location: {type: String, default: null}
}, {timestamps: true});