var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = require('./userSchema');

var driverSchema = new mongoose.Schema({
    licenseNumber: {type: String, required: [true, "Cannot be blank"]},
    vehicleNumber: {type: String, required: [true, "Cannot be blank"]},
    expiry: Date,
    class: String,
    firstName: userSchema.firstName,
    lastName: userSchema.lastName,
    dob: userSchema.dob,
    address: userSchema.address,
    bloodType: String
}, {timestamps: true});
driverSchema.plugin(passportLocalMongoose);

module.exports =  mongoose.model('Driver', driverSchema);