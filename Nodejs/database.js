var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'quan_ly_du_an'
});
db.connect(err =>{
    if(err) throw err;
    console.log('Da ket noi voi database!')
});
module.exports = db;