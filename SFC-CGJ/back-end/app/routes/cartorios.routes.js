module.exports = app => {
    const Cartorio = require("../controllers/cartorios.controller.js");
  
    // Create a new cartorio
    app.post("/cartorio", Cartorio.create);
  
    // Retrieve all cartorios
    app.get("/cartorios", Cartorio.findAll);
  
    // Retrieve a single UsuarioCGj with UsuarioCGjId
    // app.get("/login-usuario-cgj", usuariosCgj.findOneLog);
  
    // Update a UsuarioCGj with UsuarioCGjId
    // app.put("/usuario-cgj", usuariosCgj.update);

    // logout setting
    // app.put("/put-usuario-cgj-logout", usuariosCgj.updateLogout);

  
    // Delete a UsuarioCGj with UsuarioCGjId
    // app.delete("/usuario-cgj", usuariosCgj.delete);
  
    // Create a new UsuarioCGj
    // app.delete("/usuario-cgj", usuariosCgj.deleteAll);
  };