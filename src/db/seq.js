
const { Sequelize } = require('sequelize');
const {MYSQL_HOST, MYSQL_PORT,MYSQL_USER, MYSQL_PWD, MYSQL_DB} =  require('../config/config.default')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
});

// seq.authenticate().then(()=>{
//     console.log('数据库连接成功');
// }).catch((error)=>{
//     console.error('数据库连接失败', error);
// })

module.exports = seq

