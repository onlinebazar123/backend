const connection = require("../Model/config");

const uuid = require('uuid')

const review = (req, res) => {
  const sqlQuery = `select * from 
  review`;
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json(result);
    }
  });
};

const addReview = (req, res) => {
    
        
        const data = [
            
            req.body.review_point,
            req.body.message,
            req.body.date_time,
            req.body.user_name,
            req.params.cart_id
        ]
        console.log(data)
    
    const sqlQuery = `INSERT INTO review SET 
    
review_point=?,
message=?,
date_time=?,
user_name=? where cart_id=?,`;
    connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, response: err.sqlMessage });
      } else {
        res.send(result);
      }
    });
  };
module.exports = {review,addReview}