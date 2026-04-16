import express from 'express';
import './models/index.js'; // Inicializa os models
import categoriaRoutes from './routes/categoriaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/categoria', categoriaRoutes);
app.use('/produto', produtoRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/entrega', entregaRoutes);
app.use('/avaliacao', avaliacaoRoutes);

console.log('Rotas registradas:');
console.log('- /categoria');
console.log('- /produto');
console.log('- /pedido');
console.log('- /entrega');
console.log('- /avaliacao');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
