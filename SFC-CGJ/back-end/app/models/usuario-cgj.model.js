const sql = require("./db.js");

// constructor
const UsuarioCgj = function(usuarioCgj) {
  this.id_usr_cgj_tjam = usuarioCgj.id_usr_cgj_tjam;
  this.nome_usr = usuarioCgj.nome_usr;
  this.situacao = usuarioCgj.situacao;
};

UsuarioCgj.create = (newUsuarioCgj, result) => {
  sql.query("INSERT INTO usuarios_cgj SET ?", newUsuarioCgj, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created UsuarioCgj: ", { id: res.insertId, ...newUsuarioCgj });
    result(null, { id: res.insertId, ...newUsuarioCgj });
  });
};

UsuarioCgj.findById = (UsuarioCgjId, result) => {
  sql.query(`SELECT * FROM usuarios-cgj WHERE id_usr_cgj_tjam = ${UsuarioCgjId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found UsuarioCgj: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found UsuarioCgj with the id
    result({ kind: "not_found" }, null);
  });
};

UsuarioCgj.getAll = result => {
  sql.query("SELECT * FROM usuarios_cgj", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("UsuarioCgjs: ", res);
    result(null, res);
  });
};

UsuarioCgj.updateById = (id, field, value, result) => {
  sql.query(
    "UPDATE usuarios_cgj SET ? = ? WHERE id_usr_cgj_tjam = ?",
    [field, value, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found UsuarioCgj with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated UsuarioCgj: ", { id: id, ...UsuarioCgj });
      result(null, { id: id, ...UsuarioCgj });
    }
  );
};

UsuarioCgj.remove = (id, result) => {
  sql.query("DELETE FROM usuarios_cgj WHERE id_usr_cgj_tjam = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found UsuarioCgj with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted UsuarioCgj with id: ", id);
    result(null, res);
  });
};

UsuarioCgj.removeAll = result => {
  sql.query("DELETE FROM usuarios_cgj", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} UsuarioCgjs`);
    result(null, res);
  });
};

module.exports = UsuarioCgj;