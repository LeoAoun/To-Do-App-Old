const PORT = 4000;

const importedRouter = require('./controller/Routs');

const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors()) 
app.use(express.json());
app.use(importedRouter)

app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
});

app.listen({port: PORT}, ()=> {
    console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = {express}