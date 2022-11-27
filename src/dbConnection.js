const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://admin:Hwufcpam@cluster0.2un7enz.mongodb.net/module-triaje'

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once('open', function() {
    console.log('Connected to Database')
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));