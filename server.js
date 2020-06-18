// importing modules
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

// configuration
app.use(cors({
    origin: ['http://localhost:3000', "https://thekeepapp.herokuapp.com"],
    credentials: true, // allow settings of cookies
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// files
require('./models/userModel');
require('./routes/userRoutes')(app);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/the_keep', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

// heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));
}

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
