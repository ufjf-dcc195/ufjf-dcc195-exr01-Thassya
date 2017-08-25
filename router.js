function route(pathname, handlers, req, res){
    console.log("Roteando: ", pathname);

    //se existe.. manda executar
    if(handlers[pathname]){
        handlers[pathname](req,res);
    }
    else{
        console.log("Requisição inválida em ", pathname);
        //handlers["/naoEncontrado"](req,res);
    }
}

exports.route = route;