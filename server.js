const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir frontend
app.use(express.static(path.join(__dirname, 'public')));

// Rota de teste
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Salvar leads
app.post('/leads', (req, res) => {
    const lead = { ...req.body, data: new Date() };

    let leads = [];
    if (fs.existsSync('leads.json')) {
        leads = JSON.parse(fs.readFileSync('leads.json'));
    }

    leads.push(lead);
    fs.writeFileSync('leads.json', JSON.stringify(leads, null, 2));

    res.send('Lead salvo com sucesso!');
});

app.listen(PORT, () => console.log('? Servidor rodando na porta', PORT));
