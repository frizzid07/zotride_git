// Initialize
var mongoose = require("mongoose"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    flash = require("connect-flash");

// Importing Models
var User = require('./models/user'),
    Driver = require('./models/driver');

// Connecting to Cluster    
mongoose.connect("mongodb+srv://zotride-master:capstone@zotride.zr7khvq.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

// Default Settings
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Passport Config
app.use(require("express-session")({
    secret: "abc",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Routing
// app.use(indexRoutes);
// app.use("/commodities", commodityRoutes);
// app.use("/commodities/:id/bids", bidRoutes);

// Setting up Port
app.listen(3000, process.env.IP, function() {
    console.log("ZotRide is on its way!");
});