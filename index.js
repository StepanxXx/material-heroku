const express = require('express');
var compression = require('compression');
const app = express();
app.use(compression());
const PORT = process.env.PORT || 5000
app.use(express.static(__dirname + '/dist'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
