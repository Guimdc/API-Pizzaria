const app =require('../src/api');
app.use(function (req, res, next) {
    next();
});
let port=process.env.port || 3000;
app.listen(port);
console.log("Iniciando o app na porta "+port);