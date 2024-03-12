import express from 'express';
import router from './controller/Routs';

const cors = require('cors')
const app = express();

app.use(cors()) 
app.use(express.json());
app.use(router)

app.listen(3333, ()=> {
    console.log('Server started on port http://localhost:3333');
})