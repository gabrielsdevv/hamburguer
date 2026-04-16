import { Model, DataTypes } from 'sequelize';
import sequelize from "./Database.js";

export default class Avaliacao extends Model {
  static associate(models) {
    Avaliacao.belongsTo(models.Pedido, {
      foreignKey: 'pedidoId',
      as: 'pedido'
    });
  }
}

Avaliacao.init({
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  pedidoId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Avaliacao',
  tableName: 'avaliacaos',
  paranoid: true,
  timestamps: true
});