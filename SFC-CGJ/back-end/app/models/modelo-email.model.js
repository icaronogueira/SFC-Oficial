const sql = require("./db.js");

// constructor
const ModeloEmail = function(modeloEmail) {

};


ModeloEmail.updateEmailValidado = (value, result) => {
  sql.query(
    "UPDATE sys_params SET modelo_email_validado = ?",
    [value],
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

      console.log("updated modleo email validado: ", { ...ModeloEmail });
      result(null, { ...ModeloEmail });
    }
  );
};

ModeloEmail.updateEmailRejeitado = (value, result) => {
  sql.query(
    "UPDATE sys_params SET modelo_email_rejeitado = ?",
    value,
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

      console.log("updated modleo email rejeitado: ", {...ModeloEmail });
      result(null, {...ModeloEmail });
    }
  );
};

ModeloEmail.getValidado = result => {
  sql.query("SELECT modelo_email_validado FROM sys_params LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("modelo email validado: ", res);
    result(null, res);
  });
};

ModeloEmail.getRejeitado = result => {
  sql.query("SELECT modelo_email_rejeitado FROM sys_params LIMIT 1", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("modelo email rejeitado: ", res);
    result(null, res);
  });
};


module.exports = ModeloEmail;