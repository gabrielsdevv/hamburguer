const { Avaliacao } = require('../models');

module.exports = {
  async criar(req, res) {
    const { nota, pedidoId } = req.body;

    const avaliacao = await Avaliacao.create({
      nota,
      pedidoId
    });

    return res.json(avaliacao);
  }
};