const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// 🔥 LIBERA A PASTA PUBLIC (ESSENCIAL)
app.use(express.static(path.join(__dirname, 'public')));

// 🔥 ROTA PRINCIPAL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔥 ROTA CADASTRO
app.post('/leads', (req, res) => {
    console.log('Lead recebido:', req.body);
    res.send('Lead salvo com sucesso!');
});

// 🔥 PORTA (Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT));
