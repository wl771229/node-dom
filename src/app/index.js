const Koa = require('koa')
const { koaBody } = require('koa-body');


const userRouter = require('../router/user.route')
const app = new Koa()

app.use(koaBody()).use(userRouter.routes())


module.exports = app