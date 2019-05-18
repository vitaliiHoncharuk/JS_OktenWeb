let mongoose = require("mongoose");
let schema = mongoose.Schema;

let User = new schema({
    login : String,
    mail : String,
    password : String
});

let SocialModel = mongoose.model('user',User);

module.exports = SocialModel;

