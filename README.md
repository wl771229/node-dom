npm init -y  初始化项目 
npm install koa  安装 kon
npm install nodemon 热更新

1、 npm run dev 启动服务
  "scripts": {
    "dev":"nodemon ./src/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, 


2、读取配置文件
dotenv 读取根目录.env 文件 ，将配置写在process.env 中
npm install dotenv

3、npm install koa-router 安装路由