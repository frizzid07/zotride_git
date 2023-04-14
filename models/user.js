var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = require("./userSchema");
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);