"use strict";
// const express = require('express');
Object.defineProperty(exports, "__esModule", { value: true });
// const app = express();
// module.exports = app
const Express = require("express");
const app = Express();
app.get("/", (req, res) => {
    res.send({
        name: "Jahidul Islam",
        age: 23,
        experience: "better"
    });
});
app.listen(3000, () => {
    console.log("the server is running on port 3000");
});
//# sourceMappingURL=app.js.map