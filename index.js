var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

connection.connect();

// connection.query('SHOW TABLES', function (error, results, fields) {
//   if (error) throw error;
//   // console.log('The solution is: ', results);
//   for (var i = 0; i < results.length; i++)
//   {
//     console.log("Tabla numero: " + (i + 1) + " : " + results[i].Tables_in_classicmodels);
//   }
// });

connection.query('SELECT * from customers', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
   for (var i = 0; i < results.length; i++)
   {
       // console.log("Registro ",(i + 1) + ": " + results[i]);
       console.log("Nombre ",(i + 1) + ": " + results[i].customerName);
    }
});
connection.end();
