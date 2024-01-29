const express = require('express');
const appRoutes = require('./routes/routes');

const app = express();

const ports = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/routes", appRoutes);

app.listen(ports, () => console.log(`Listening on port ${ports}`));
