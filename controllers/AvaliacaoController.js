import Avaliacao from '../models/Avaliacao.js';

export default {
  async create(req, res) {
    try {
      const { nota, pedidoId } = req.body;

      if (nota < 1 || nota > 5) {
        return res.status(400).json({ error: 'Nota deve ser entre 1 e 5' });
      }

      const avaliacao = await Avaliacao.create({
        nota,
        pedidoId
      });

      return res.status(201).json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll({
        include: [{ model: require('../models/Pedido.js').default, as: 'pedido' }]
      });
      return res.json(avaliacoes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await Avaliacao.findByPk(id, {
        include: [{ model: require('../models/Pedido.js').default, as: 'pedido' }]
      });

      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nota } = req.body;

      if (nota < 1 || nota > 5) {
        return res.status(400).json({ error: 'Nota deve ser entre 1 e 5' });
      }

      const avaliacao = await Avaliacao.findByPk(id);

      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      await avaliacao.update({ nota });
      return res.json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const avaliacao = await Avaliacao.findByPk(id);

      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      await avaliacao.destroy();
      return res.json({ message: 'Avaliação deletada com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};