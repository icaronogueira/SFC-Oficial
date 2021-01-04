module.exports = app => {
    const usuariosCgj = require("../controllers/usuarios-cgj.controller.js");
  
    // Create a new UsuarioCGj
    app.post("/usuario-cgj", usuariosCgj.create);
  
    // Retrieve all UsuarioCGjs
    app.get("/usuario-cgj", usuariosCgj.findAll);
  
    // Retrieve a single UsuarioCGj with UsuarioCGjId
    app.get("/usuario-cgj/:usuario-cgj-id", usuariosCgj.findOne);
  
    // Update a UsuarioCGj with UsuarioCGjId
    app.put("/usuario-cgj/:usuario-cgj-id", usuariosCgj.update);
  
    // Delete a UsuarioCGj with UsuarioCGjId
    app.delete("/usuario-cgj/:usuario-cgj-id", usuariosCgj.delete);
  
    // Create a new UsuarioCGj
    app.delete("/usuario-cgj", usuariosCgj.deleteAll);
  };