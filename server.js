const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

app.use(cookieParser());


dotenv.config({ path: './.env' });

require('./db/conn');
//  const User = require('./model/userSchema');

app.use(express.json());

//Link the router file to make route easy
app.use(require('./router/auth'));


const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
