const mysql = require(`mysql`);
//创建连接对象
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port: `3306`,
    database: "mysql"
})
con.connect();
const sql = "select * from web_user";
con.query(sql, (err, result) => {
    if(err){
        console.log(err);  
    }
    console.log(result);
});
con.end();