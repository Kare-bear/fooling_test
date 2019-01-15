require('dotenv').config();

const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance=>{
    app.set('db', dbInstance);
})
.catch(console.log)


app.use(json());
app.use(cors());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUnintialized: false;
        cookie: {
            maxAge: 525600 * 60 * 1000
        }
    })
);

app.listen(process.env.PORT, () =>{
    console.log(`${process.env.PORT} a PORT ODDESSEY`)
})