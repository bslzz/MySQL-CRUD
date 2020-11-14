const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'employeeSystem',
});
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});
app.listen(5000, () => console.log('Server running'));
