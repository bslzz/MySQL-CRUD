const db = require('../db');

module.exports = {
  //post request
  postData: async (req, res) => {
    try {
      const { name, age, country, position, wage } = req.body;
      await db.query(
        'INSERT into employee(name, age, country, position, wage) VALUES(?,?,?,?,?)',
        [name, age, country, position, wage],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({
              success: true,
              data: result,
            });
          }
        }
      );
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },

  getData: async (req, res) => {
    try {
      await db.query('SELECT * from employee', (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            success: true,
            data: result,
          });
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },
};
