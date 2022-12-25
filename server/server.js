const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

require('./config/mongoose');
require('./routes/pets.routes')(app);
app.use(express.urlencoded({extended: true}));

app.listen(8000,() => console.log("Listening to port 8000"));