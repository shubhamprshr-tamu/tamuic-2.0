import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenusGroupTaxon, GenusGroupTaxonId } from './GenusGroupTaxon';
import type { TaxonLevel, TaxonLevelId } from './TaxonLevel';

export interface TaxonNameAttributes {
  TaxonNameID: number;
  ParentTaxonNameID?: number;
  TaxonomyTypeID?: number;
  Accepted?: boolean;
  AcceptedID?: number;
  SortNumber?: number;
  LevelNumber: number;
  Name: string;
  CommonName?: string;
  Author?: string;
  Year?: string;
  Source?: string;
  Remarks?: string;
  TimestampCreated?: Date;
  TimestampModified?: Date;
  TimestampVersion?: Date;
  LastEditedBy?: string;
  SSMA_TimeStamp: Date;
}

export type TaxonNamePk = "TaxonNameID";
export type TaxonNameId = TaxonName[TaxonNamePk];
export type TaxonNameOptionalAttributes = "TaxonNameID" | "ParentTaxonNameID" | "TaxonomyTypeID" | "Accepted" | "AcceptedID" | "SortNumber" | "CommonName" | "Author" | "Year" | "Source" | "Remarks" | "TimestampCreated" | "TimestampModified" | "TimestampVersion" | "LastEditedBy";
export type TaxonNameCreationAttributes = Optional<TaxonNameAttributes, TaxonNameOptionalAttributes>;

export class TaxonName extends Model<TaxonNameAttributes, TaxonNameCreationAttributes> implements TaxonNameAttributes {
  TaxonNameID!: number;
  ParentTaxonNameID?: number;
  TaxonomyTypeID?: number;
  Accepted?: boolean;
  AcceptedID?: number;
  SortNumber?: number;
  LevelNumber!: number;
  Name!: string;
  CommonName?: string;
  Author?: string;
  Year?: string;
  Source?: string;
  Remarks?: string;
  TimestampCreated?: Date;
  TimestampModified?: Date;
  TimestampVersion?: Date;
  LastEditedBy?: string;
  SSMA_TimeStamp!: Date;

  // TaxonName belongsTo TaxonLevel via LevelNumber
  LevelNumber_TaxonLevel!: TaxonLevel;
  getLevelNumber_TaxonLevel!: Sequelize.BelongsToGetAssociationMixin<TaxonLevel>;
  setLevelNumber_TaxonLevel!: Sequelize.BelongsToSetAssociationMixin<TaxonLevel, TaxonLevelId>;
  createLevelNumber_TaxonLevel!: Sequelize.BelongsToCreateAssociationMixin<TaxonLevel>;
  // TaxonName hasMany GenusGroupTaxon via HigherClassID
  GenusGroupTaxons!: GenusGroupTaxon[];
  getGenusGroupTaxons!: Sequelize.HasManyGetAssociationsMixin<GenusGroupTaxon>;
  setGenusGroupTaxons!: Sequelize.HasManySetAssociationsMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  addGenusGroupTaxon!: Sequelize.HasManyAddAssociationMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  addGenusGroupTaxons!: Sequelize.HasManyAddAssociationsMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  createGenusGroupTaxon!: Sequelize.HasManyCreateAssociationMixin<GenusGroupTaxon>;
  removeGenusGroupTaxon!: Sequelize.HasManyRemoveAssociationMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  removeGenusGroupTaxons!: Sequelize.HasManyRemoveAssociationsMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  hasGenusGroupTaxon!: Sequelize.HasManyHasAssociationMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  hasGenusGroupTaxons!: Sequelize.HasManyHasAssociationsMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  countGenusGroupTaxons!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof TaxonName {
    return TaxonName.init({
    TaxonNameID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParentTaxonNameID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaxonomyTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 6
    },
    Accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    AcceptedID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SortNumber: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LevelNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TaxonLevel',
        key: 'Rank'
      }
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CommonName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Source: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TimestampCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimestampModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimestampVersion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastEditedBy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SSMA_TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TaxonName',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TaxonName$PrimaryKey",
        unique: true,
        fields: [
          { name: "TaxonNameID" },
        ]
      },
    ]
  });
  }
}
