//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================
app.post('/device/',function(req,res){
    console.log("llego = "+req.body.id);
    if(req.body.texto==undefined || req.body.texto==null || req.body.texto.length<4){
        res.status(409);
        res.send("el texto no es valido");
    }else{
        
        res.status(200)
        res.send("Todo ok");
    }
    
});
app.get('/pepe/', function(req,res) {
    utils.query("select * from Devices",function(err,rsp,fields){
        if(err!=null)
        res.send(JSON.stringify(rsp));
    });
  
});
app.get('/devices/', function(req, res, next) {
    devices = [
        { 
            'id': 1, 
            'name': 'Lampara 1', 
            'description': 'Luz living', 
            'state': 1, 
            'type': 1, 
        },
        { 
            'id': 2, 
            'name': 'Ventilador 1', 
            'description': 'Ventilador Habitacion', 
            'state': 0, 
            'type': 2, 
            
        },
        { 
            'id': 3, 
            'name': 'Velador', 
            'description': 'Velador living', 
            'state': 1, 
            'type': 1, 
            
        },
        { 
            'id': 4, 
            'name': 'Persiana 1', 
            'description': 'Persiana living', 
            'state': 1, 
            'type': 2, 
            
        },
        { 
            'id': 5, 
            'name': 'Persiana 2', 
            'description': 'Persiana de la cocina', 
            'state': 1, 
            'type': 2, 
            
        },
        { 
            'id': 6, 
            'name': 'Persiana 3', 
            'description': 'Persiana balcon', 
            'state': 0, 
            'type': 2, 
            
        },
    ]
    res.send(JSON.stringify(devices)).status(200);
});

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================
