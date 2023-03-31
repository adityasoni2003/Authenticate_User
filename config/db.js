const {Sequelize} = require("sequelize");
const createDb =new Sequelize("Authenticate","Aditya","test1234",{
    dialect:'sqlite',
    host:'./config/db.sqlite'
})
module.exports = createDb;
