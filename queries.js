const mongoose = require('mongoose');
const db = mongoose.connection;

const dbURI = 'mongodb+srv://shivarammittakola:data-visualization@cluster0.o10tael.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
db.once('open', () => console.log('Connected to Database'));
//app.use(express.json());
const schemas=require('./schemas.js');
const loadJSON=require("./loadJson.js");

const Data=mongoose.model("Data", schemas.Data);

const insertData = async () => {

    const data = loadJSON('data.json');

    try {
        await Data.insertMany(data);
        console.log('Data inserted successfully');
    } catch (err) {
        console.error('Error inserting data:', err);
    }

    mongoose.connection.close();
};

insertData();