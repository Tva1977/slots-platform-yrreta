const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// 🔥 SERVE TUDO DA PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

// 🔥 ROTA PRINCIPAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔥 ROTA OFERTAS (FORÇADA)
app.get('/ofertas.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ofertas.html'));
});

// 🔥 CADASTRO
app.post('/leads', (req, res) => {
    console.log('Lead:', req.body);
    res.send('OK');
});

// 🔥 PORTA RENDER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando'));
