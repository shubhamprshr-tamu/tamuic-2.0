import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxonCombos, TaxonCombosId } from './TaxonCombos';

export interface TypeInfoAttributes {
  TypeInfoID: number;
  CombinationID: number;
  OriginalName?: string;
  OriginalNameID?: number;
  TypesInTamu?: string;
  DateTypeAdded?: Date;
  DateLastChecked?: Date;
  HolotypeVerbatimLabel?: string;
  HolotypeInOtherCollection?: boolean;
  HolotypeRepository?: string;
  NumberAllotypes?: number;
  NumberHolotypes?: number;
  NumberParatypes?: number;
  NumberSyntypes?: number;
  TypeNotes?: string;
  TypeSource?: string;
  TypeStorageMethod?: string;
  storPIN?: boolean;
  storVIA?: boolean;
  storSLI?: boolean;
  storENV?: boolean;
  Citation?: string;
  TypeInTamuic?: boolean;
  TimestampModified?: Date;
  TimestampCreated?: Date;
  LastEditedBy?: Date;
  SSMA_TimeStamp: Date;
}

export type TypeInfoPk = "TypeInfoID";
export type TypeInfoId = TypeInfo[TypeInfoPk];
export type TypeInfoOptionalAttributes = "TypeInfoID" | "OriginalName" | "OriginalNameID" | "TypesInTamu" | "DateTypeAdded" | "DateLastChecked" | "HolotypeVerbatimLabel" | "HolotypeInOtherCollection" | "HolotypeRepository" | "NumberAllotypes" | "NumberHolotypes" | "NumberParatypes" | "NumberSyntypes" | "TypeNotes" | "TypeSource" | "TypeStorageMethod" | "storPIN" | "storVIA" | "storSLI" | "storENV" | "Citation" | "TypeInTamuic" | "TimestampModified" | "TimestampCreated" | "LastEditedBy";
export type TypeInfoCreationAttributes = Optional<TypeInfoAttributes, TypeInfoOptionalAttributes>;

export class TypeInfo extends Model<TypeInfoAttributes, TypeInfoCreationAttributes> implements TypeInfoAttributes {
  TypeInfoID!: number;
  CombinationID!: number;
  OriginalName?: string;
  OriginalNameID?: number;
  TypesInTamu?: string;
  DateTypeAdded?: Date;
  DateLastChecked?: Date;
  HolotypeVerbatimLabel?: string;
  HolotypeInOtherCollection?: boolean;
  HolotypeRepository?: string;
  NumberAllotypes?: number;
  NumberHolotypes?: number;
  NumberParatypes?: number;
  NumberSyntypes?: number;
  TypeNotes?: string;
  TypeSource?: string;
  TypeStorageMethod?: string;
  storPIN?: boolean;
  storVIA?: boolean;
  storSLI?: boolean;
  storENV?: boolean;
  Citation?: string;
  TypeInTamuic?: boolean;
  TimestampModified?: Date;
  TimestampCreated?: Date;
  LastEditedBy?: Date;
  SSMA_TimeStamp!: Date;

  // TypeInfo belongsTo TaxonCombos via CombinationID
  Combination!: TaxonCombos;
  getCombination!: Sequelize.BelongsToGetAssociationMixin<TaxonCombos>;
  setCombination!: Sequelize.BelongsToSetAssociationMixin<TaxonCombos, TaxonCombosId>;
  createCombination!: Sequelize.BelongsToCreateAssociationMixin<TaxonCombos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TypeInfo {
    return TypeInfo.init({
    TypeInfoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CombinationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TaxonCombos',
        key: 'CombinationID'
      }
    },
    OriginalName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OriginalNameID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TypesInTamu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DateTypeAdded: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DateLastChecked: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HolotypeVerbatimLabel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    HolotypeInOtherCollection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HolotypeRepository: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberAllotypes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumberHolotypes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumberParatypes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumberSyntypes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TypeNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TypeSource: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TypeStorageMethod: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    storPIN: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    storVIA: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    storSLI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    storENV: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Citation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TypeInTamuic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    TimestampModified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TimestampCreated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastEditedBy: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SSMA_TimeStamp: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TypeInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TypeInfo$PrimaryKey",
        unique: true,
        fields: [
          { name: "TypeInfoID" },
        ]
      },
    ]
  });
  }
}
