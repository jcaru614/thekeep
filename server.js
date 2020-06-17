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
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE"],
    credentials: true, // allow settings of cookies
}));

app.options('*', cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// files
require('./models/usermodel');
require('./routes/userRoutes')(app);

mongoose.connect(process.env.MongoDB_URI || 'mongodb://localhost:27017/the_keep', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

    // heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join( "client/build" )));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html")) // path to build to serve files
    })
};

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
