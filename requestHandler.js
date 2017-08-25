var qs = require("querystring");

function impares(req,res){
    res.writeHead(200, {"Content-type": "text/html"});
    for(var i=1; i<100; i=i+2){
         res.write(i + " ");
    } 
    res.end();  
}

function senha(req,res){
    if(req.method=="GET"){
       res.writeHead(200, {"Content-Type": "text/html"});
       res.write("<form method=post>");
       res.write("<input type=number name=password /> \n");
       res.write("<input type=submit />");
       res.write("</form>");
       res.end();        
    }
    else {
        body = '';
        req.on('data', function(data){
            body+=data;
        });
        req.on('end', function(){
            var dados = qs.parse(body);
            console.log(dados);

       res.writeHead(200, {"Content-Type": "text/html"});
       res.write(dados.password);
       if(dados.password!='54321'){           
            res.write("Não Autorizado!");
       }
        else {
            res.write("Acertou!");
            res.end();
        }});
    }   
}

function intervalo(req,res){
    if(req.method=="GET"){
       res.writeHead(200, {"Content-Type": "text/html"});
       res.write("<form method=post>");
       res.write("<input type=number name=num1 /> ")
       res.write("<input type=number name=num2 /> \n");
       res.write("<input type=submit />");
       res.write("</form>");
       res.end();        
    }
    else {
        body = '';
        req.on('data', function(data){
            body+=data;
        });

        req.on('end', function(){
            var dados = qs.parse(body);
            console.log(dados);
            res.writeHead(200, {"Content-Type": "text/html"});
            
            var n1 = dados.num1;
            var n2 = dados.num2;
            
            if(n1>n2){

            }

            if(n1>n2){
                console.log("entrou no if");
               
                var aux = n2;
                n2=n1;
                n1=aux;
            }
            while(n1<=n2){
                console.log("while: " + n1);
                res.write(n1 + " ");
                n1++;
            }
            res.end();
        });
    }   

}

exports.impares = impares;
exports.oculto = senha;
exports.intervalo = intervalo;