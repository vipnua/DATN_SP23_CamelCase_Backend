const express = require('express');
const route = express.Router();
route.get('/', (require, response) => {
    response.send(`
<h1>home page</h1>
`);
})
module.exports = route;