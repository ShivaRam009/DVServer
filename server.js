const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const db = mongoose.connection;
const dbURI = 'mongodb+srv://gsnagc5022:datavisualization@cluster0.rzfv6uw.mongodb.net/';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
db.once('open', () => console.log('Connected to Database'));
app.use(express.json());
// using cors to allow cross origin resource sharing
const cors = require('cors');
app.use(cors());
// using body-parser to parse JSON bodies into JS objects
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getData', (req, res) => {
    db.collection('data').find().toArray()
        .then(results => {
            res.json(results);
        })
        .catch(error => console.error(error));
}
);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);
