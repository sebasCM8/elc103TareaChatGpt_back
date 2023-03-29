const express = require("express");
const http = require("http");
const bodyparser = require("body-parser");
const cors = require("cors");


const app = express();
const server = http.createServer(app);

var corsOpt = {
    origin: '*'
};
app.use(cors(corsOpt));

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());


const router = require("./router");
app.use(router);

const port = 3008;
server.listen(port, () => {
    console.log("CHATGPT API Running on port: " + port);
});

