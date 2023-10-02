const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

exports.connect = () => {
    // console.log("inside connect",process.env.MONGODB_URL)
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then()
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};