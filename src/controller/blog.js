const { exec } = require(`../db/mysql`);
const getList = (auther, key) => {
    const sql="select * from web_user";
    return exec(sql);
}
module.exports={
    getList
}