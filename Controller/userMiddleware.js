const connection = require("../Model/config");
const bcrypt = require("bcrypt");
function isValidUser(req, res, next) {
  const { email, password } = req.body;
  const data = { email, password };
  const sqlQuery = `select * from user where email=?`;
  connection.query(sqlQuery, email, async (err, result) => {
    if (err) {
      res.send({
        status: 400,
        Response: err.sqlMessage,
      });
    } else {
      try {
        // console.log("try block result", result);
        if (result.length == 1) {
          const newpassword = result[0].password;

          const checkPass = await bcrypt.compare(password, newpassword);
          console.log(checkPass);
          if (checkPass) {
            // req.params.role = result[0].role
            // console.log(req.params.role)

           
      //     } else {
      //       res.send("invalid password please enter correct password");
      //     }
      //   } else {
      //     if (result[0] === undefined) {
      //       throw new Error("Invalid username or password");
          }
        }
      } catch (err) {
        
        res.send({ err: err.message });
      }
    }
  });
}

module.exports = {isValidUser};
