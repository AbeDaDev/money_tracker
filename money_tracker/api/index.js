const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req:...,res: Response<ResBody, Locals:) => {
    res.json(body: 'test ok')
})

app.post(path: '/api/transaction', handlers:req...,res) => {
    res.json(req.body);
) };

app.listen(port: 4040); 