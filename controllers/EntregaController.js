import Entrega from '../models/Entrega.js';

const EntregaController = {
  create: async (req, res) => {
    try {
      const entrega = await Entrega.create(req.body);
      res.status(201).json(entrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const entregas = await Entrega.findAll({
        include: [{ association: 'pedido' }]
      });
      res.status(200).json(entregas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const entrega = await Entrega.findByPk(req.params.id, {
        include: [{ association: 'pedido' }]
      });
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }
      res.status(200).json(entrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const entrega = await Entrega.findByPk(req.params.id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }
      await entrega.update(req.body);
      res.status(200).json(entrega);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const entrega = await Entrega.findByPk(req.params.id);
      if (!entrega) {
        return res.status(404).json({ error: 'Entrega não encontrada' });
      }
      await entrega.destroy();
      res.json({ message: 'Entrega deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default EntregaController;