const app = require("express")();
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(morgan('dev'))

let port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Listening on port ${port}`) })