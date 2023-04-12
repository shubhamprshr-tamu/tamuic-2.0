import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Agent, AgentId } from './Agent';

export interface SpecimenDetLabelsAttributes {
  DetLabelID: number;
  SpecimenID: number;
  Determiner?: number;
  DateDetermined?: string;
  DeterminedAs?: string;
  CreatedDate: Date;
  DetLabel?: string;
}

export type SpecimenDetLabelsPk = "DetLabelID";
export type SpecimenDetLabelsId = SpecimenDetLabels[SpecimenDetLabelsPk];
export type SpecimenDetLabelsOptionalAttributes = "DetLabelID" | "Determiner" | "DateDetermined" | "DeterminedAs" | "CreatedDate" | "DetLabel";
export type SpecimenDetLabelsCreationAttributes = Optional<SpecimenDetLabelsAttributes, SpecimenDetLabelsOptionalAttributes>;

export class SpecimenDetLabels extends Model<SpecimenDetLabelsAttributes, SpecimenDetLabelsCreationAttributes> implements SpecimenDetLabelsAttributes {
  DetLabelID!: number;
  SpecimenID!: number;
  Determiner?: number;
  DateDetermined?: string;
  DeterminedAs?: string;
  CreatedDate!: Date;
  DetLabel?: string;

  // SpecimenDetLabels belongsTo Agent via Determiner
  Determiner_Agent!: Agent;
  getDeterminer_Agent!: Sequelize.BelongsToGetAssociationMixin<Agent>;
  setDeterminer_Agent!: Sequelize.BelongsToSetAssociationMixin<Agent, AgentId>;
  createDeterminer_Agent!: Sequelize.BelongsToCreateAssociationMixin<Agent>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SpecimenDetLabels {
    return SpecimenDetLabels.init({
    DetLabelID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Determiner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Agent',
        key: 'AgentID'
      }
    },
    DateDetermined: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DeterminedAs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    DetLabel: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecimenDetLabels',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TamuicObjectD$PrimaryKey",
        unique: true,
        fields: [
          { name: "DetLabelID" },
        ]
      },
    ]
  });
  }
}
