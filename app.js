const express = require('express');
const app = express();
const path = require('path');
const port = '3030';

const mainRouter = require('./routers/mainRouter');
const aboutRouter = require('./routers/aboutRouter');

app.use('/', mainRouter);
app.use('/', aboutRouter)

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`)
});