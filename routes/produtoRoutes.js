import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController.js';

const router = Router();

console.log('Registrando rotas de produto...');

router.get('/', (req, res) => {
  console.log('Rota /produto chamada');
  ProdutoController.findAll(req, res);
});

router.post('/', ProdutoController.create);
router.get('/:id', ProdutoController.findById);
router.put('/:id', ProdutoController.update);
router.delete('/:id', ProdutoController.delete);

export default router;
