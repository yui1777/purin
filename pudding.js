const express = require('express');
const mysql = require('mysql');

const app = express();
const env = process.env;
require('dotenv').config({path: `ignore/.env`});



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
      'insert into db_database(name,username) values(?,?)',
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
pp.get('/purin3', (req, res) => {
  connection.query(
    'SELECT * FROM purin_type2',
    (error, results) => {
      res.render('purin3.ejs', {purin_type2: results});
    }
  );
});
  
});
app.listen(process.env.PORT || 4000);
