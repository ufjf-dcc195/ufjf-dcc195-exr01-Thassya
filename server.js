var http = require("http");

var url = require("url");


function start(router,handlers){
    //criei o servidor e colocoquei a função responde anonima aqui dentro
   http.createServer(function (req,res){
    
    var urlParsed = url.parse(req.url,true); //true pra ja pegar os dados da requisição
   
    //router tamo exportando e route é um metodo dentro do router.
    router.route(urlParsed.pathname, handlers, req, res);

    
}).listen(8888);
console.log("Servidor rodando em http://localhost:8888");


}

module.exports.start = start;