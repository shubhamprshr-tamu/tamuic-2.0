import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxonCombos, TaxonCombosId } from './TaxonCombos';

export interface SpeciesGroupTaxonAttributes {
  SpeciesGroupNameID: number;
  SpeciesName?: string;
  Form?: number;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  'Created/Modified'?: Date;
  SSMA_TimeStamp: Date;
  Remarks?: string;
  CreatedBy?: string;
}

export type SpeciesGroupTaxonPk = "SpeciesGroupNameID";
export type SpeciesGroupTaxonId = SpeciesGroupTaxon[SpeciesGroupTaxonPk];
export type SpeciesGroupTaxonOptionalAttributes = "SpeciesGroupNameID" | "SpeciesName" | "Form" | "deleteme" | "AnalyzerDSID" | "Created/Modified" | "Remarks" | "CreatedBy";
export type SpeciesGroupTaxonCreationAttributes = Optional<SpeciesGroupTaxonAttributes, SpeciesGroupTaxonOptionalAttributes>;

export class SpeciesGroupTaxon extends Model<SpeciesGroupTaxonAttributes, SpeciesGroupTaxonCreationAttributes> implements SpeciesGroupTaxonAttributes {
  SpeciesGroupNameID!: number;
  SpeciesName?: string;
  Form?: number;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  'Created/Modified'?: Date;
  SSMA_TimeStamp!: Date;
  Remarks?: string;
  CreatedBy?: string;

  // SpeciesGroupTaxon hasMany TaxonCombos via SubSpeciesID
  TaxonCombos!: TaxonCombos[];
  getTaxonCombos!: Sequelize.HasManyGetAssociationsMixin<TaxonCombos>;
  setTaxonCombos!: Sequelize.HasManySetAssociationsMixin<TaxonCombos, TaxonCombosId>;
  addTaxonCombo!: Sequelize.HasManyAddAssociationMixin<TaxonCombos, TaxonCombosId>;
  addTaxonCombos!: Sequelize.HasManyAddAssociationsMixin<TaxonCombos, TaxonCombosId>;
  createTaxonCombo!: Sequelize.HasManyCreateAssociationMixin<TaxonCombos>;
  removeTaxonCombo!: Sequelize.HasManyRemoveAssociationMixin<TaxonCombos, TaxonCombosId>;
  removeTaxonCombos!: Sequelize.HasManyRemoveAssociationsMixin<TaxonCombos, TaxonCombosId>;
  hasTaxonCombo!: Sequelize.HasManyHasAssociationMixin<TaxonCombos, TaxonCombosId>;
  hasTaxonCombos!: Sequelize.HasManyHasAssociationsMixin<TaxonCombos, TaxonCombosId>;
  countTaxonCombos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SpeciesGroupTaxon {
    return SpeciesGroupTaxon.init({
    SpeciesGroupNameID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SpeciesName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Form: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleteme: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AnalyzerDSID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'Created/Modified': {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CONVERT([datetime],CONVERT([varchar],getdate(),(1)),(1))')
    },
    SSMA_TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Remarks: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpeciesGroupTaxon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "SpeciesGroupTaxon$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpeciesGroupNameID" },
        ]
      },
    ]
  });
  }
}
