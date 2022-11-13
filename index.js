const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var mysql = require('mysql')
let host = process.env.DB_ENDPOINT || "localhost";
let user = process.env.DB_USER || "gywuzdgj_deepak";
let password = process.env.DB_PASSWORD || "@32zndr84s";
let database = process.env.DB_NAME || "gywuzdgj_deepak";
var connection = mysql.createConnection({
  host,
  user, //
  password, //
  database,
});

module.exports = connection;

app.set('view engine', 'html');

app.get('/', (req, res) => {
  connection.connect((err) => {
    if (err) {
      console.log(err)
      res.send(err.message)
      return
    }else {
      res.send('Hello World Database connected!!')
    }
    
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
