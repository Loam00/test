const express = require('express');
const appRoutes = require('./routes/routes');

const app = express();

const ports = 3000;

//Andrebbe reso condizionale, in una app rilasciata in produzione
//è considerata una bad practice usare i CORS (no problema tanto non farai un setup di progetto nel breve)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/routes", appRoutes);

app.listen(ports, () => console.log(`Listening on port ${ports}`));

//piccolo appunto, ricordati di aggiungere sempre il gitignore ai progetti (qui nel backend non c'è, si porta dietro i node modules)
