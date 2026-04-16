import Produto from '../models/Produto.js';

const ProdutoController = {
  create: async (req, res) => {
    try {
      const produto = await Produto.create(req.body);
      res.status(201).json(produto);
    } catch (error) {
      console.error('Erro no create:', error);
      res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const produtos = await Produto.findAll();
      res.status(200).json(produtos);
    } catch (error) {
      console.error('Erro no findAll:', error);
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro no findById:', error);
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.update(req.body);
      res.status(200).json(produto);
    } catch (error) {
      console.error('Erro no update:', error);
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const produto = await Produto.findByPk(req.params.id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await produto.destroy();
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      console.error('Erro no delete:', error);
      res.status(500).json({ error: error.message });
    }
  }
};

export default ProdutoController;