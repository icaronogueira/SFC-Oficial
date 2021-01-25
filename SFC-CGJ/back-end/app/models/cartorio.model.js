const sql = require("./db.js");

// constructor
const Cartorio = function(cartorio) {
    this.id_cartorio = cartorio.id_cartorio;
    this.nome_cartorio = cartorio.nome_cartorio;
    this.cnpj_cartorio = cartorio.cnpj_cartorio;
    this.situacao = cartorio.situacao;
    this.provimento = cartorio.provimento;
    this.data_provimento = cartorio.data_provimento;
    this.cpf_oficial = cartorio.cpf_oficial;
    this.cap_int = cartorio.cap_int;
    this.endereco = cartorio.endereco;
    this.num = cartorio.num;
    this.bairro = cartorio.bairro;
    this.cep = cartorio.cep;
    this.cidade = cartorio.cidade;
    this.e_mail_principal = cartorio.e_mail_principal;
    this.e_mail_secundario = cartorio.e_mail_secundario;
    this.telefone1 = cartorio.telefone1;
    this.telefone2 = cartorio.telefone2;
    this.site = cartorio.site;
    
    this.dt_inc = cartorio.dt_inc;
    this.usr_inc = cartorio.usr_inc;
    this.ip_inc = cartorio.ip_inc;
    this.dt_alt = cartorio.dt_alt;
    this.usr_alt = cartorio.usr_alt;
    this.ip_alt = cartorio.ip_alt;
    this.qtde_alt = cartorio.qtde_alt;
    this.dt_ina = cartorio.dt_ina;
    this.usr_ina = cartorio.usr_ina;
    this.ip_ina = cartorio.ip_ina;
};


//Pega todos os cartorios
Cartorio.getAll = result => {
  sql.query("SELECT cartorios.*, oficiais.nome_oficial FROM cartorios LEFT JOIN oficiais on cartorios.cpf_oficial=oficiais.cpf_oficial", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Cartorios: ", res);
    result(null, res);
  });
};
//-------------------------------

// Cria novo Cartorio --------------------------------
Cartorio.create = (newCartorio, result) => {
  console.log(newCartorio);
  sql.query("INSERT INTO cartorios SET ?", newCartorio, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created newCartorio: ", { id: res.insertId, ...newCartorio });
    result(null, { id: res.insertId, ...newCartorio });
  });
};
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

module.exports = Cartorio;