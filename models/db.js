const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if(!err) { console.log(`MongoDB connection succeeded`);}
    else{ console.log('Error in Mongodb connection'+ JSON.stringify(err, undefined, 2)); }
});

require('./user.model');