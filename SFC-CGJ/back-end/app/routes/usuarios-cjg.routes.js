module.exports = app => {
    const usuariosCgj = require("../controllers/usuarios-cgj.controller.js");
  
    // Create a new UsuarioCGj
    app.post("/usuario-cgj", usuariosCgj.create);
  
    // Retrieve all UsuarioCGjs
    app.get("/usuario-cgj", usuariosCgj.findAll);
  
    // Retrieve a single UsuarioCGj with UsuarioCGjId
    app.get("/login-usuario-cgj", usuariosCgj.findOneLog);
  
    // Update a UsuarioCGj with UsuarioCGjId
    app.put("/usuario-cgj", usuariosCgj.update);

    // logout setting
    app.put("/put-usuario-cgj-logout", usuariosCgj.updateLogout);

  
    // Delete a UsuarioCGj with UsuarioCGjId
    app.delete("/usuario-cgj", usuariosCgj.delete);
  
    // Create a new UsuarioCGj
    // app.delete("/usuario-cgj", usuariosCgj.deleteAll);
  };