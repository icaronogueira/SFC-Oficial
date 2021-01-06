module.exports = app => {
    const modeloEmail = require("../controllers/modelo-email.controller");
  
  
    // Get modelo email validado
    app.get("/modelo-email-validado", modeloEmail.findValidados);

    // Get modelo email rejeitado
    app.get("/modelo-email-rejeitado", modeloEmail.findRejeitados);
   
  
    // Update o modelo email validado
    app.put("/modelo-email-validado", modeloEmail.updateValidado);

    // Update o modelo email rejeitado
    app.put("/modelo-email-rejeitado", modeloEmail.updateRejeitado);

    
  

};