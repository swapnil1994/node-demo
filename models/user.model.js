const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'Username can\'t be empty',
        unique: true
    },
    designation: {
        type: String,
        
    },
    location: {
        type: String,
        required: 'location can\'t be empty'
    },
    birthDate: {
        type: String,
        required: 'birthdate can\'t be empty'
    },
    password: {
        type: String,
        required: 'password can\'t be empty',
        minlength: [4, 'Password must be at least 4 character long']
    },
    saltSecret: String
});

//Custom validation for email
userSchema.path('userName').validate((val)=>{
    emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid user name');
// Events
userSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})

mongoose.model('User', userSchema);