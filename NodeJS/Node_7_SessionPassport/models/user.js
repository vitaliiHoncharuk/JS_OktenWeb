let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    login: String,
    password: String,
    city: String
});

module.exports = mongoose.model('user', UserSchema);



