const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const bcrypt = require('bcrypt');

const user = new Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
}, {
    timestamps: true
})

user.pre('save', function(next) {
    let _this = this;
    bcrypt.hash(_this.password, 10)
        .then(hash => {
            _this.password = hash;
        })
        .then(next);
})


module.exports = mongoose.model('user', user);