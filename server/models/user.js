const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//define model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true }, 
    password: String
});

//on save hook, encrypt password
// before saving a mode, run this function
userSchema.pre('save', function(next) {
    // get access to the user model 
    const user = this; // user.email or user.password

    // generate a salt then run callback 
    bcrypt.genSalt(10, function (err, salt) {
        if (err) { return next(err); }
        // hash (encrypt) the pw using salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {return next(err); }
            // overwrite plain text plassword with hash
            user.password = hash;
            next();
        });
    });
});
//create model class
const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;