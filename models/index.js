import  Categoria  from './Categoria.js';
import Produto from './Produto.js';
import Pedido from './Pedido.js';
import Entrega from './Entrega.js';
import Avaliacao from './Avaliacao.js';

// Lista de models para associações
const models = {
  Categoria,
  Produto,
  Pedido,
  Entrega,
  Avaliacao
};

// Configurar associações
Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;