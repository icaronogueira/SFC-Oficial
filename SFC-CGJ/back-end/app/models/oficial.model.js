const sql = require("./db.js");

// constructor
const Oficial = function(oficial) {
  this.id_oficial=oficial.id_oficial;
  this.nome_oficial=oficial.nome_oficial;
  this.cpf_oficial=oficial.cpf_oficial;
  this.qtd_trocas=oficial.qtd_trocas;
  this.qtde_alt=oficial.qtde_alt;
  this.qtde_entrada=oficial.qtde_entrada;
  this.qtde_saida=oficial.qtde_saida;
  this.situacao=oficial.situacao;
  this.status_oficial=oficial.status_oficial;
  this.tipo_oficial=oficial.tipo_oficial;
  this.doc_ini_r=oficial.doc_ini_r;
  this.usr_r=oficial.usr_r;
  this.ip_r=oficial.ip_r;
  this.doc_ini_h=oficial.doc_ini_h;
  this.usr_h=oficial.usr_h;
  this.ip_h=oficial.ip_h;
  this.cap_int=oficial.cap_int;
  this.endereco=oficial.endereco;
  this.num=oficial.num;
  this.bairro=oficial.bairro;
  this.cep=oficial.cep;
  this.cidade=oficial.cidade;
  this.e_mail_secundario=oficial.e_mail_secundario;
  this.telefone1=oficial.telefone1;
  this.telefone2=oficial.telefone2;
  this.site=oficial.site;
  this.e_mail_principal=oficial.e_mail_principal;
  this.senha_oficial=oficial.senha_oficial;
  this.ip_ult_alt=oficial.ip_ult_alt;
  this.sexo=oficial.sexo;
  this.usr_inc=oficial.usr_inc;
  this.ip_inc=oficial.ip_inc;
  this.usr_alt=oficial.usr_alt;
  this.ip_alt=oficial.ip_alt;
  this.usr_ina=oficial.usr_ina;
  this.ip_ina=oficial.ip_ina;
  this.ip_ult_entrada=oficial.ip_ult_entrada;
  this.ip_ult_saida=oficial.ip_ult_saida;
  this.dt_inc=oficial.dt_inc;
  this.data_nascimento=oficial.data_nascimento;
  this.dt_ini_r=oficial.dt_ini_r;
  this.dt_ini_r_publi=oficial.dt_ini_r_publi;
  this.dt_r=oficial.dt_r;
  this.dt_ini_h=oficial.dt_ini_h;
  this.dt_ini_h_public=oficial.dt_ini_h_public;
  this.dt_h=oficial.dt_h;
  this.dt_ult_troca=oficial.dt_ult_troca;
  this.fotografia=oficial.fotografia;
  this.dt_alt=oficial.dt_alt;
  this.dt_ina=oficial.dt_ina;
  this.dt_ult_entrada=oficial.dt_ult_entrada;
  this.dt_ult_saida=oficial.dt_ult_saida;
};


//Pega todos os oficiais
Oficial.getAll = result => {
  sql.query("SELECT * FROM oficiais", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Oficiais: ", res);
    result(null, res);
  });
};
//-------------------------------

//Pega cpf e nome de todos os oficiais
Oficial.getAllCpfNome = result => {
  sql.query("SELECT cpf_oficial, nome_oficial FROM oficiais", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Oficiais: ", res);
    result(null, res);
  });
};
//-------------------------------

// Cria novo Cartorio --------------------------------
// Cartorio.create = (newCartorio, result) => {
//   sql.query("INSERT INTO cartorios SET ?", newCartorio, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created newCartorio: ", { id: res.insertId, ...newCartorio });
//     result(null, { id: res.insertId, ...newCartorio });
//   });
// };
//-------------------------------------------------

// UsuarioCgj.findById = (UsuarioCgjId, result) => {
//   UsuarioCgjId=String(UsuarioCgjId)
//   UsuarioCgjId = UsuarioCgjId.includes("@") ? UsuarioCgjId : UsuarioCgjId+"@tjam.jus.br";
//   sql.query("SELECT * FROM usuarios_cgj WHERE id_usr_cgj_tjam=?",[UsuarioCgjId], (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found UsuarioCgj: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found UsuarioCgj with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// UsuarioCgj.findByIdLogin = (UsuarioCgjId, ip, moment,result) => {
//   UsuarioCgjId=String(UsuarioCgjId)
//   UsuarioCgjId = UsuarioCgjId.includes("@") ? UsuarioCgjId : UsuarioCgjId+"@tjam.jus.br";

//   //ip

//   sql.query(
//     "UPDATE usuarios_cgj SET qtde_entrada=qtde_entrada+1,dt_ult_entrada=?,ip_ult_entrada=? WHERE id_usr_cgj_tjam = ?", //incrementar qtde_alt
//     [moment,ip,UsuarioCgjId],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         // result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found UsuarioCgj with the id
//         // result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated UsuarioCgj: ", { ...UsuarioCgj });
//       // result(null, {...UsuarioCgj });
//     }
//   );


//   sql.query("SELECT * FROM usuarios_cgj WHERE id_usr_cgj_tjam=?",[UsuarioCgjId], (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found UsuarioCgj: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found UsuarioCgj with the id
//     result({ kind: "not_found" }, null);
//   });
// };






// UsuarioCgj.updateById = (id, values, result) => {
//   console.log(values);
//   if (values["situacao"]=='I') {
//     values["dt_ina"]=values["dt_alt"];
//     values["usr_ina"]=values["usr_alt"];
//     values["ip_ina"]=values["ip_alt"];
//   }
//   sql.query(
//     "UPDATE usuarios_cgj SET ?, qtde_alt=qtde_alt+1 WHERE id_usr_cgj = ?", //incrementar qtde_alt
//     [values, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found UsuarioCgj with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated UsuarioCgj: ", { id: id, ...UsuarioCgj });
//       result(null, { id: id, ...UsuarioCgj });
//     }
//   );
// };

// UsuarioCgj.updateByIdLogout = (id, values, result) => {
//   sql.query(
//     "UPDATE usuarios_cgj SET ?, qtde_saida=qtde_saida+1 WHERE id_usr_cgj = ?", //incrementar qtde_saida
//     [values, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found UsuarioCgj with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated UsuarioCgj: ", { id: id, ...UsuarioCgj });
//       result(null, { id: id, ...UsuarioCgj });
//     }
//   );
// };

// UsuarioCgj.remove = (id, result) => {
//   console.log("id="+id);
//   sql.query("DELETE FROM usuarios_cgj WHERE id_usr_cgj = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found UsuarioCgj with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted UsuarioCgj with id: ", id);
//     result(null, res);
//   });
// };

// UsuarioCgj.removeAll = result => {
//   sql.query("DELETE FROM usuarios_cgj", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} UsuarioCgjs`);
//     result(null, res);
//   });
// };

module.exports = Oficial;