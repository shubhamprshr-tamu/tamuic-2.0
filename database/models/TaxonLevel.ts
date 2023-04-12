import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxonName, TaxonNameId } from './TaxonName';

export interface TaxonLevelAttributes {
  Name?: string;
  Rank: number;
  UsedByHigher?: boolean;
  SSMA_TimeStamp: Date;
}

export type TaxonLevelPk = "Rank";
export type TaxonLevelId = TaxonLevel[TaxonLevelPk];
export type TaxonLevelOptionalAttributes = "Name" | "UsedByHigher";
export type TaxonLevelCreationAttributes = Optional<TaxonLevelAttributes, TaxonLevelOptionalAttributes>;

export class TaxonLevel extends Model<TaxonLevelAttributes, TaxonLevelCreationAttributes> implements TaxonLevelAttributes {
  Name?: string;
  Rank!: number;
  UsedByHigher?: boolean;
  SSMA_TimeStamp!: Date;

  // TaxonLevel hasMany TaxonName via LevelNumber
  TaxonNames!: TaxonName[];
  getTaxonNames!: Sequelize.HasManyGetAssociationsMixin<TaxonName>;
  setTaxonNames!: Sequelize.HasManySetAssociationsMixin<TaxonName, TaxonNameId>;
  addTaxonName!: Sequelize.HasManyAddAssociationMixin<TaxonName, TaxonNameId>;
  addTaxonNames!: Sequelize.HasManyAddAssociationsMixin<TaxonName, TaxonNameId>;
  createTaxonName!: Sequelize.HasManyCreateAssociationMixin<TaxonName>;
  removeTaxonName!: Sequelize.HasManyRemoveAssociationMixin<TaxonName, TaxonNameId>;
  removeTaxonNames!: Sequelize.HasManyRemoveAssociationsMixin<TaxonName, TaxonNameId>;
  hasTaxonName!: Sequelize.HasManyHasAssociationMixin<TaxonName, TaxonNameId>;
  hasTaxonNames!: Sequelize.HasManyHasAssociationsMixin<TaxonName, TaxonNameId>;
  countTaxonNames!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxonLevel {
    return TaxonLevel.init({
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsedByHigher: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SSMA_TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TaxonLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TaxonLevel$PrimaryKey",
        unique: true,
        fields: [
          { name: "Rank" },
        ]
      },
    ]
  });
  }
}
