const express = require('express');
const connectDB = require('./DataBase/db');
const Routes = require('./Routes/routes');
const cors = require('cors');

const HTTP_SERVER =  express();
const PORT = 5000;

connectDB();

HTTP_SERVER.use(express.json());
HTTP_SERVER.use(cors());

HTTP_SERVER.use('/', Routes);

HTTP_SERVER.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})