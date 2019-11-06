// var mysql = require('mysql');
// var pool = mysql.createPool({
//     host    : "database-1.cjpg8vnddvnl.us-west-1.rds.amazonaws.com",
//     user    : "admin",
//     password: "yesha123",
//     port    : "3306",
//     database : "grubhub"
// });
// pool.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             console.error('Database connection was closed.')
//         }
//         if (err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('Database has too many connections.')
//         }
//         if (err.code === 'ECONNREFUSED') {
//             console.error('Database connection was refused.')
//         }
//     }
//     if (connection) connection.release()
//     return
// })
// module.exports = pool;