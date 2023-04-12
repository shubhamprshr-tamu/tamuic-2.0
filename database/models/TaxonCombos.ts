import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenusGroupTaxon, GenusGroupTaxonId } from './GenusGroupTaxon';
import type { MuseumInfo, MuseumInfoId } from './MuseumInfo';
import type { SpeciesGroupTaxon, SpeciesGroupTaxonId } from './SpeciesGroupTaxon';
import type { TypeInfo, TypeInfoId } from './TypeInfo';

export interface TaxonCombosAttributes {
  CombinationID: number;
  GenusID: number;
  SubGenusID?: number;
  SpeciesID?: number;
  SubSpeciesID?: number;
  Author?: string;
  GenusCert?: string;
  SubgenusCert?: string;
  SpeciesCert?: string;
  SubspeciesCert?: string;
  NomenclatureNotes?: string;
  Qualifier?: string;
  Valid?: number;
  Restriction?: string;
  TimestampModified?: Date;
  OldCombinationID?: number;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  ExistsTexas?: boolean;
  TimestampCreated?: Date;
  SSMA_TimeStamp: Date;
  SP?: string;
  Remarks?: string;
  Name?: string;
  CreatedBy?: number;
  ModifiedBy?: number;
  HeaderCard?: number;
  combo_no_subgenus?: string;
}

export type TaxonCombosPk = "CombinationID";
export type TaxonCombosId = TaxonCombos[TaxonCombosPk];
export type TaxonCombosOptionalAttributes = "CombinationID" | "SubGenusID" | "SpeciesID" | "SubSpeciesID" | "Author" | "GenusCert" | "SubgenusCert" | "SpeciesCert" | "SubspeciesCert" | "NomenclatureNotes" | "Qualifier" | "Valid" | "Restriction" | "TimestampModified" | "OldCombinationID" | "deleteme" | "AnalyzerDSID" | "ExistsTexas" | "TimestampCreated" | "SP" | "Remarks" | "Name" | "CreatedBy" | "ModifiedBy" | "HeaderCard" | "combo_no_subgenus";
export type TaxonCombosCreationAttributes = Optional<TaxonCombosAttributes, TaxonCombosOptionalAttributes>;

export class TaxonCombos extends Model<TaxonCombosAttributes, TaxonCombosCreationAttributes> implements TaxonCombosAttributes {
  CombinationID!: number;
  GenusID!: number;
  SubGenusID?: number;
  SpeciesID?: number;
  SubSpeciesID?: number;
  Author?: string;
  GenusCert?: string;
  SubgenusCert?: string;
  SpeciesCert?: string;
  SubspeciesCert?: string;
  NomenclatureNotes?: string;
  Qualifier?: string;
  Valid?: number;
  Restriction?: string;
  TimestampModified?: Date;
  OldCombinationID?: number;
  deleteme?: boolean;
  AnalyzerDSID?: number;
  ExistsTexas?: boolean;
  TimestampCreated?: Date;
  SSMA_TimeStamp!: Date;
  SP?: string;
  Remarks?: string;
  Name?: string;
  CreatedBy?: number;
  ModifiedBy?: number;
  HeaderCard?: number;
  combo_no_subgenus?: string;

  // TaxonCombos belongsTo GenusGroupTaxon via GenusID
  Genus!: GenusGroupTaxon;
  getGenus!: Sequelize.BelongsToGetAssociationMixin<GenusGroupTaxon>;
  setGenus!: Sequelize.BelongsToSetAssociationMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  createGenus!: Sequelize.BelongsToCreateAssociationMixin<GenusGroupTaxon>;
  // TaxonCombos belongsTo SpeciesGroupTaxon via SubSpeciesID
  SubSpecy!: SpeciesGroupTaxon;
  getSubSpecy!: Sequelize.BelongsToGetAssociationMixin<SpeciesGroupTaxon>;
  setSubSpecy!: Sequelize.BelongsToSetAssociationMixin<SpeciesGroupTaxon, SpeciesGroupTaxonId>;
  createSubSpecy!: Sequelize.BelongsToCreateAssociationMixin<SpeciesGroupTaxon>;
  // TaxonCombos hasMany MuseumInfo via CombinationID
  MuseumInfos!: MuseumInfo[];
  getMuseumInfos!: Sequelize.HasManyGetAssociationsMixin<MuseumInfo>;
  setMuseumInfos!: Sequelize.HasManySetAssociationsMixin<MuseumInfo, MuseumInfoId>;
  addMuseumInfo!: Sequelize.HasManyAddAssociationMixin<MuseumInfo, MuseumInfoId>;
  addMuseumInfos!: Sequelize.HasManyAddAssociationsMixin<MuseumInfo, MuseumInfoId>;
  createMuseumInfo!: Sequelize.HasManyCreateAssociationMixin<MuseumInfo>;
  removeMuseumInfo!: Sequelize.HasManyRemoveAssociationMixin<MuseumInfo, MuseumInfoId>;
  removeMuseumInfos!: Sequelize.HasManyRemoveAssociationsMixin<MuseumInfo, MuseumInfoId>;
  hasMuseumInfo!: Sequelize.HasManyHasAssociationMixin<MuseumInfo, MuseumInfoId>;
  hasMuseumInfos!: Sequelize.HasManyHasAssociationsMixin<MuseumInfo, MuseumInfoId>;
  countMuseumInfos!: Sequelize.HasManyCountAssociationsMixin;
  // TaxonCombos hasMany TypeInfo via CombinationID
  TypeInfos!: TypeInfo[];
  getTypeInfos!: Sequelize.HasManyGetAssociationsMixin<TypeInfo>;
  setTypeInfos!: Sequelize.HasManySetAssociationsMixin<TypeInfo, TypeInfoId>;
  addTypeInfo!: Sequelize.HasManyAddAssociationMixin<TypeInfo, TypeInfoId>;
  addTypeInfos!: Sequelize.HasManyAddAssociationsMixin<TypeInfo, TypeInfoId>;
  createTypeInfo!: Sequelize.HasManyCreateAssociationMixin<TypeInfo>;
  removeTypeInfo!: Sequelize.HasManyRemoveAssociationMixin<TypeInfo, TypeInfoId>;
  removeTypeInfos!: Sequelize.HasManyRemoveAssociationsMixin<TypeInfo, TypeInfoId>;
  hasTypeInfo!: Sequelize.HasManyHasAssociationMixin<TypeInfo, TypeInfoId>;
  hasTypeInfos!: Sequelize.HasManyHasAssociationsMixin<TypeInfo, TypeInfoId>;
  countTypeInfos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxonCombos {
    return TaxonCombos.init({
    CombinationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GenusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GenusGroupTaxon',
        key: 'GenusGroupNameID'
      }
    },
    SubGenusID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpeciesID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SubSpeciesID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SpeciesGroupTaxon',
        key: 'SpeciesGroupNameID'
      }
    },
    Author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GenusCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubgenusCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpeciesCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubspeciesCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NomenclatureNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Qualifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Valid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Restriction: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TimestampModified: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    OldCombinationID: {
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
    ExistsTexas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TimestampCreated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    SSMA_TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SP: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ModifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HeaderCard: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    combo_no_subgenus: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TaxonCombos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TaxonCombos$PrimaryKey",
        unique: true,
        fields: [
          { name: "CombinationID" },
        ]
      },
    ]
  });
  }
}
