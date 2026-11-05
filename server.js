const express = require('express');
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

// Permitir receber JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API funcionando!'
    });
});

// Outra rota de exemplo
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Igor' },
        { id: 2, nome: 'João' }
    ]);
});

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});