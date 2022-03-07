const conectDB = require ('./config/db');
const express = require ('express');
const cors = require('cors');

const app = express();

conectDB();

app.use(cors());

require ('./config/db')

app.use(express.json());

app.use('/api', require('./src/routes/citasRoutes'));

const port = process.env.PORT | 4300

app.listen(4300, () =>{
    console.log('esto esta funcionando en el puerto', port)
})