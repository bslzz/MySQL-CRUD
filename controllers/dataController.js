const db = require('../db');

module.exports = {
  postData: async (req, res) => {
    try {
      const { name, age, country, position, wage } = req.body;
      db.query(
        'INSERT into employee(name, age, country, position, wage) VALUES(?,?,?,?,?)',
        [name, age, country, position, wage],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        }
      );
    } catch (error) {}
  },
};
