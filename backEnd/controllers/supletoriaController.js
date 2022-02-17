
var  data=[1,2,3,4,5];
 


async function index(req, res){
    const resultado=`supletoria controller`
    res.send(resultado);
    res.status(200); 
    return
}
async function create(req, res){
    try{
        console.log(data)
        data.push(6)
        res.status(200) 
        res.send("ok")

        return
    }catch(e){
       console.error(e);
        res.status(500);
        res.end("Error al ejecutar la consulta");
    }
   
}
async function getAll(req, res){
    try{
       
        res.status(200) 
        res.send(data)

        return
    }catch(e){
       console.error(e);
        res.status(500);
        res.end("Error al ejecutar la consulta");
    }
   
}
 
module.exports.index = index;
module.exports.getAll = getAll;
module.exports.create = create;
