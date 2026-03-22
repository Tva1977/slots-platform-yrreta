const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

const file = 'leads.json';

// Criar arquivo se não existir
if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]');
}

// Receber leads
app.post('/lead', (req, res) => {
    const data = JSON.parse(fs.readFileSync(file));
    data.push({
        contato: req.body.contato,
        data: new Date().toLocaleString()
    });
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    res.send({status: 'ok'});
});

// Listar leads
app.get('/leads', (req, res) => {
    const data = JSON.parse(fs.readFileSync(file));
    res.send(data);
});

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));
