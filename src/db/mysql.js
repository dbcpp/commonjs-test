const mysql = require(`mysql`);
const { MYSQL_ENV } = require(`../config/db`);
console.log(`num`,mysql);

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port: `3306`,
    database: "mysql"
});
con.connect();
function exec(sql) {
    const pro = new Promise(resolve, reject => { 
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        });
    })
    return pro;
}
module.exports = {
    exec
}