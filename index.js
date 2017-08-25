var server = require("./server");

var router = require("./router");

var requestHandlers = require("./requestHandler");
var handlers ={};

handlers["/impares.html"] = requestHandlers.impares;
handlers["/oculto.html"] = requestHandlers.oculto;
handlers["/intervalo.html"] = requestHandlers.intervalo;

server.start(router,handlers);