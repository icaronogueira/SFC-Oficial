var moment = require('moment');

const UsuarioCGj = require("../models/usuario-cgj.model.js");


// Create and Save a new UsuarioCGJ
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a UsuarioCGJ
    const usuarioCGJ = new UsuarioCGj({
      situacao : req.body.situacao,
      id_usr_cgj_tjam : req.body.id_usr_cgj_tjam,
      nome_usr : req.body.nome_usr,
      qtd_entrada : 0,
      dt_inc : moment().format('YYYY-MM-DD hh:mm:ss'),
      usr_inc : req.body.usr_inc,
      ip_inc : req.body.ip_inc,
      qtd_alt:0
    });
  
    // Save Customer in the database
    UsuarioCGj.create(usuarioCGJ, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the UsuarioCGj."
        });
      else res.send(data);
    });
  };

// Retrieve all UsuarioCGJs from the database.
exports.findAll = (req, res) => {
    UsuarioCGj.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving usuarios-cgj."
        });
      else res.send(data);
    });
  };

// Find a single UsuarioCGJ with a UsuarioCGJId
exports.findOne = (req, res) => {
    UsuarioCGj.findById(req.params.usuario-cgj-id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found UsuarioCGj with id ${req.params.usuario-cgj-id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving UsuarioCGj with id " + req.params.usuario-cgj-id
          });
        }
      } else res.send(data);
    });
  };

// Update a UsuarioCGJ identified by the UsuarioCGJId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    UsuarioCGj.updateById(
      req.params.usuario-cgj-id,
      req.params.field, req.params.value,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found UsuarioCGj with id ${req.params.usuario-cgj-id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating UsuarioCGj with id " + req.params.usuario-cgj-id
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a UsuarioCGJ with the specified UsuarioCGJId in the request
exports.delete = (req, res) => {
    UsuarioCGj.remove(req.params.usuario-cgj-id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found UsuarioCGj with id ${req.params.usuario-cgj-id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete UsuarioCGj with id " + req.params.usuario-cgj-id
          });
        }
      } else res.send({ message: `UsuarioCGj was deleted successfully!` });
    });
  };
  

// Delete all UsuarioCGJs from the database.
exports.deleteAll = (req, res) => {
    UsuarioCGj.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all customers."
        });
      else res.send({ message: `All UsuarioCGj were deleted successfully!` });
    });
  };