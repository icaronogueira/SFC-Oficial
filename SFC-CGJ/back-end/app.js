const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());
app.get("/", (req, res) => {
    res.json({ message: "Retornou get request." });
});

require("./app/routes/usuarios-cjg.routes.js")(app);
require("./app/routes/modelo-email.routes.js")(app);
require("./app/routes/cartorios.routes.js")(app);
require("./app/routes/oficiais.routes.js")(app);



app.listen(3000, () => {
    console.log('listening on port 3000');
})