const userModel=require("../model/userModel");
const pedidoModel=require("../model/pedidoModel");

exports.get= async (headers)=>{
    auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if(auth.idUser){
      if(headers.iduser==auth.idUser){
        resp=await pedidoModel.get();
      }else{ 
        resp= {"status":"null", auth}
      }
    }else{
      resp= {"status":"null", auth}
    }
    console.log(resp);
    return resp;
}

exports.getById = async (headers, obraId)=>{
    auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if(auth.idUser){
      if(headers.iduser==auth.idUser){
        resp=await pedidoModel.getById(obraId);
      }else{ 
        resp= {"status":"null", auth}
      }
    }else{
      resp= {"status":"null", auth}
    }
    console.log(resp);
    return resp;
  }

exports.post= async (headers, data)=>{
  auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
  if(auth.idUser){
    if(headers.iduser==auth.idUser){
      resp=pedidoModel.post(data);
    }else{ 
      resp= {"status":"null", auth}
    }
  }else{
    resp= {"status":"null", auth}
  }
  return resp;
}