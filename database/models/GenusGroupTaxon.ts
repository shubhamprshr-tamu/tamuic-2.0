import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenusLocations, GenusLocationsId } from './GenusLocations';
import type { TaxonCombos, TaxonCombosId } from './TaxonCombos';
import type { TaxonName, TaxonNameId } from './TaxonName';

export interface GenusGroupTaxonAttributes {
  GenusGroupNameID: number;
  GenusGroupName: string;
  SortNumber?: number;
  HigherClassID?: number;
  Notes?: string;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  Field1?: string;
  'Created/Modified'?: Date;
  SSMA_TimeStamp: Date;
}

export type GenusGroupTaxonPk = "GenusGroupNameID";
export type GenusGroupTaxonId = GenusGroupTaxon[GenusGroupTaxonPk];
export type GenusGroupTaxonOptionalAttributes = "GenusGroupNameID" | "SortNumber" | "HigherClassID" | "Notes" | "deleteme" | "AnalyzerDSID" | "Field1" | "Created/Modified";
export type GenusGroupTaxonCreationAttributes = Optional<GenusGroupTaxonAttributes, GenusGroupTaxonOptionalAttributes>;

export class GenusGroupTaxon extends Model<GenusGroupTaxonAttributes, GenusGroupTaxonCreationAttributes> implements GenusGroupTaxonAttributes {
  GenusGroupNameID!: number;
  GenusGroupName!: string;
  SortNumber?: number;
  HigherClassID?: number;
  Notes?: string;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  Field1?: string;
  'Created/Modified'?: Date;
  SSMA_TimeStamp!: Date;

  // GenusGroupTaxon hasMany GenusLocations via GenusGroupNameID
  GenusLocations!: GenusLocations[];
  getGenusLocations!: Sequelize.HasManyGetAssociationsMixin<GenusLocations>;
  setGenusLocations!: Sequelize.HasManySetAssociationsMixin<GenusLocations, GenusLocationsId>;
  addGenusLocation!: Sequelize.HasManyAddAssociationMixin<GenusLocations, GenusLocationsId>;
  addGenusLocations!: Sequelize.HasManyAddAssociationsMixin<GenusLocations, GenusLocationsId>;
  createGenusLocation!: Sequelize.HasManyCreateAssociationMixin<GenusLocations>;
  removeGenusLocation!: Sequelize.HasManyRemoveAssociationMixin<GenusLocations, GenusLocationsId>;
  removeGenusLocations!: Sequelize.HasManyRemoveAssociationsMixin<GenusLocations, GenusLocationsId>;
  hasGenusLocation!: Sequelize.HasManyHasAssociationMixin<GenusLocations, GenusLocationsId>;
  hasGenusLocations!: Sequelize.HasManyHasAssociationsMixin<GenusLocations, GenusLocationsId>;
  countGenusLocations!: Sequelize.HasManyCountAssociationsMixin;
  // GenusGroupTaxon hasMany TaxonCombos via GenusID
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
  // GenusGroupTaxon belongsTo TaxonName via HigherClassID
  HigherClass!: TaxonName;
  getHigherClass!: Sequelize.BelongsToGetAssociationMixin<TaxonName>;
  setHigherClass!: Sequelize.BelongsToSetAssociationMixin<TaxonName, TaxonNameId>;
  createHigherClass!: Sequelize.BelongsToCreateAssociationMixin<TaxonName>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenusGroupTaxon {
    return GenusGroupTaxon.init({
    GenusGroupNameID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GenusGroupName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SortNumber: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HigherClassID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TaxonName',
        key: 'TaxonNameID'
      }
    },
    Notes: {
      type: DataTypes.STRING(50),
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
    Field1: {
      type: DataTypes.STRING(50),
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
    }
  }, {
    sequelize,
    tableName: 'GenusGroupTaxon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenusGroupTaxon$PrimaryKey",
        unique: true,
        fields: [
          { name: "GenusGroupNameID" },
        ]
      },
    ]
  });
  }
}
