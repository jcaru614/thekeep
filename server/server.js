// importing modules
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

// configuration
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// files
require('./models/user.model');
require('./routes/user.routes')(app);

mongoose.connect(process.env.MongoDB_URI || 'mongodb://localhost:27017/the_keep', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));



app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
