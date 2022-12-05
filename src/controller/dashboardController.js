const userModel=require("../model/userModel");
const dashboardModel=require("../model/dashboardModel");

exports.getDashBorda= async (headers)=>{
    auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if(auth.idUser){
      if(headers.iduser==auth.idUser){
        resp=await dashboardModel.getDashBorda();
      }else{ 
        resp= {"status":"null", auth}
      }
    }else{
      resp= {"status":"null", auth}
    }
    console.log(resp);
    return resp;
}

exports.getDashMassa= async (headers)=>{
    auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if(auth.idUser){
      if(headers.iduser==auth.idUser){
        resp=await dashboardModel.getDashMassa();
      }else{ 
        resp= {"status":"null", auth}
      }
    }else{
      resp= {"status":"null", auth}
    }
    console.log(resp);
    return resp;
}

exports.getDashSabor= async (headers)=>{
    auth=await userModel.verifyJWT(headers['x-access-token'], headers['perfil']);
    if(auth.idUser){
      if(headers.iduser==auth.idUser){
        resp=await dashboardModel.getDashSabor();
      }else{ 
        resp= {"status":"null", auth}
      }
    }else{
      resp= {"status":"null", auth}
    }
    console.log(resp);
    return resp;
}