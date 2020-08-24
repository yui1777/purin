const express = require('express');
const mysql = require('mysql');

const app = express();
const env = process.env;
require('dotenv').config({path: `ignore/.env`});

const db_host = process.env.purin_HOST;
const db_user = process.env.purin_user;
const db_password = process.env.purin_pass;
const db_database = process.env.purin_database;


const connection = mysql.createConnection({
  host:'db_host',
  user: 'db_user',
  password: 'db_password',
  database: 'db_database'
});
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


app.get('/', (req, res) => {
      res.render('purin.ejs');
    }
  );

app.post('/purin2', (req, res) => {
    // データベースに追加する処理を書いてください
    connection.query(
      'insert into purin_type2(name,username) values(?,?)',
      [req.body.purinname,req.body.username],
      (error,results)=>{
          res.render('purin2.ejs');
          }
        );
      }
      );

app.get('/purin2', (req, res) => {
      res.render('purin2.ejs');
    }
  );
app.get('/purin3', (req, res) => {
  connection.query(
    'SELECT * FROM purin_type2',
    (error, results) => {
      res.render('purin3.ejs', {purin_type2: results});
    }
  );
});
app.listen(process.env.PORT || 4000);
