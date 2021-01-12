module.exports = app => {
    const Oficial = require("../controllers/oficiais.controller.js");
  
    // Create a new cartorio
    // app.post("/cartorio", Cartorio.create);
  
    // Retrieve all oficiais
    app.get("/oficiais", Oficial.findAll);

    // Retrieve all oficiais
    app.get("/oficiais-cpf-nome", Oficial.findAllCpfNome);
  
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