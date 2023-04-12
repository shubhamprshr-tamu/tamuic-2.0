import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TaxonNameTempAttributes {
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

export type TaxonNameTempOptionalAttributes = "TaxonNameID" | "ParentTaxonNameID" | "TaxonomyTypeID" | "Accepted" | "AcceptedID" | "SortNumber" | "CommonName" | "Author" | "Year" | "Source" | "Remarks" | "TimestampCreated" | "TimestampModified" | "TimestampVersion" | "LastEditedBy";
export type TaxonNameTempCreationAttributes = Optional<TaxonNameTempAttributes, TaxonNameTempOptionalAttributes>;

export class TaxonNameTemp extends Model<TaxonNameTempAttributes, TaxonNameTempCreationAttributes> implements TaxonNameTempAttributes {
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


  static initModel(sequelize: Sequelize.Sequelize): typeof TaxonNameTemp {
    return TaxonNameTemp.init({
    TaxonNameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ParentTaxonNameID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaxonomyTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
      allowNull: false
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
    tableName: 'TaxonNameTemp',
    schema: 'dbo',
    timestamps: false
  });
  }
}
