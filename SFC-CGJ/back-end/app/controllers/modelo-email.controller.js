var moment = require('moment');

const ModeloEmail = require("../models/modelo-email.model.js");

exports.updateValidado = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    ModeloEmail.updateEmailValidado(
      JSON.stringify(req.body.data),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found modelo email validado.`
            });
          } else {
            res.status(500).send({
              message: "Error updating modelo email validado"
            });
          }
        } else res.send(data);
      }
    );
  };



exports.updateRejeitado = (req, res) => {
 
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  ModeloEmail.updateEmailRejeitado(
    JSON.stringify(req.body.data),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found modelo email rejeitado.`
          });
        } else {
          res.status(500).send({
            message: "Error updating modelo email rejeitado"
          });
        }
      } else res.send(data);
    }
  );

};




exports.findValidados = (req, res) => {

  ModeloEmail.getValidado((err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving email-validado."
        })
      } else res.send(data);
    }
  );

};
  

exports.findRejeitados = (req, res) => {
  ModeloEmail.getRejeitado((err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving email-validado."
        })
      } else res.send(data);
    }
  );

};
