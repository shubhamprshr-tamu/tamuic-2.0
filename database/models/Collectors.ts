import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Agent, AgentId } from './Agent';
import type { CollectingEvent, CollectingEventId } from './CollectingEvent';

export interface CollectorsAttributes {
  CollectingEventID: number;
  AgentID: number;
  Order: number;
}

export type CollectorsPk = "CollectingEventID" | "AgentID";
export type CollectorsId = Collectors[CollectorsPk];
export type CollectorsCreationAttributes = CollectorsAttributes;

export class Collectors extends Model<CollectorsAttributes, CollectorsCreationAttributes> implements CollectorsAttributes {
  CollectingEventID!: number;
  AgentID!: number;
  Order!: number;

  // Collectors belongsTo Agent via AgentID
  Agent!: Agent;
  getAgent!: Sequelize.BelongsToGetAssociationMixin<Agent>;
  setAgent!: Sequelize.BelongsToSetAssociationMixin<Agent, AgentId>;
  createAgent!: Sequelize.BelongsToCreateAssociationMixin<Agent>;
  // Collectors belongsTo CollectingEvent via CollectingEventID
  CollectingEvent!: CollectingEvent;
  getCollectingEvent!: Sequelize.BelongsToGetAssociationMixin<CollectingEvent>;
  setCollectingEvent!: Sequelize.BelongsToSetAssociationMixin<CollectingEvent, CollectingEventId>;
  createCollectingEvent!: Sequelize.BelongsToCreateAssociationMixin<CollectingEvent>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Collectors {
    return Collectors.init({
    CollectingEventID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'CollectingEvent',
        key: 'CollectingEventID'
      }
    },
    AgentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Agent',
        key: 'AgentID'
      }
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Collectors',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Collectors$PrimaryKey",
        unique: true,
        fields: [
          { name: "CollectingEventID" },
          { name: "AgentID" },
        ]
      },
    ]
  });
  }
}
