const mysql=require("./mysqlConnect");
const jwt=require("jsonwebtoken");
 get=async()=>{
  //users=await mysql.query("SELECT *, (SELECT nome FROM pessoa WHERE id=u.pessoa_id_pessoa) as nome FROM usuario u");
  //SELECT p.idpessoa, p.nome, p.email, u.perfil FROM pessoa AS p JOIN usuario AS u ON p.idpessoa = u.pessoa_idpessoa
  users=await mysql.query("SELECT p.nome, p.email, u.senha FROM usuario u JOIN pessoa p ON p.id_pessoa=u.pessoa_id_pessoa")
  return users;
}

login= async (data)=>{
   sql="SELECT p.idpessoa AS id, p.nome, p.email, u.perfil FROM pessoa AS p "+
   "JOIN usuario AS u ON p.idpessoa = u.pessoa_idpessoa "+
   "WHERE p.email='"+data.email+"' AND u.senha='"+data.senha+"'";
   console.log(sql)
   const usuario = await mysql.query(sql);
   result=null;
   if(usuario){
      if(usuario.length>0){
         if(usuario[0].id){
            const id=usuario[0].id;
            var token = jwt.sign({id} , 'PIZZA', {expiresIn:7200}); 
            console.log("Fez login e gerou token!");
            result={ auth: true, token: token , user:usuario[0]}
         }else{
            result={ auth: true, token: token , user:null};
         }
      }else{
         result={ auth: true, token: token , user:null};
      }
   }else{
      result={ auth: true, token: token , user:null};
   }
  console.log(result)
  return result;
}


verifyJWT= async (token, perfil)=>{ 
   console.log(token)
   if (!token){
      resp= { auth: false, message: 'Token não informado.' }; 
   }
   
   jwt.verify(token, 'PIZZA', function(err, decoded) { 
         if (err){
            resp= { auth: false, message: 'Token inválido!' };
         }
         if(decoded){
            resp= {auth: true, idUser:decoded.id};
         }
   });
   if(resp.auth){
      sql="SELECT perfil FROM usuario WHERE pessoa_idpessoa="+resp.idUser;
      usuario= await  mysql.query(sql);
      if(usuario[0].perfil.indexOf(perfil)<0){
         resp= { auth: false, message: 'Perfil Inválido!' };
      }
   }
   return resp;
} 

module.exports={get, login, verifyJWT}      