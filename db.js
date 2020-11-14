const mysql = require('mysql');

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

module.exports = db;
