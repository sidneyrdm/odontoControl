const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/projetoYoutube1'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/projetoYoutube1/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' +PORT);
});