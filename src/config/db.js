const env = process.env.NODE_ENV;
console.log(`环境`);

let MYSQL_ENV;
if (env === `dev`) {
    MYSQL_ENV = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: `3306`,
        database: "mysql"
    }
}
if (env === "online") {
    MYSQL_ENV = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: `3306`,
        database: "mysql"
    }
}