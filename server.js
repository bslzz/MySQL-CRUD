const express = require('express');
const cors = require('cors');
require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/dataRoute'));

app.listen(5000, () => console.log('Server running'));
