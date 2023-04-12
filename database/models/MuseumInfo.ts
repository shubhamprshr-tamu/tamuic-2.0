import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { TaxonCombos, TaxonCombosId } from './TaxonCombos';

export interface MuseumInfoAttributes {
  MuseumInfoID: number;
  CombinationID: number;
  Author?: string;
  GeoAUS?: boolean;
  GeoETH?: boolean;
  GeoNEA?: boolean;
  GeoNEO?: boolean;
  GeoORI?: boolean;
  GeoPAL?: boolean;
  HeaderCardStatus?: string;
  HodgesNumber?: string;
  MAndBNumber?: string;
  NumberPinnedSC?: string;
  NumberSlidesSC?: string;
  NumberVialsSC?: string;
  NumberEnvelopes?: number;
  NumberSlides?: number;
  NumberPinned?: string;
  NumberVials?: number;
  stgADU?: boolean;
  stgLAR?: boolean;
  stgPUP?: boolean;
  stgEGG?: boolean;
  stgNYM?: boolean;
  stgWOR?: boolean;
  stgSOL?: boolean;
  stgALA?: boolean;
  FromTexas?: boolean;
  storALC?: boolean;
  storPIN?: boolean;
  storSLI?: boolean;
  storENV?: boolean;
  storDRY?: boolean;
  NameInSpecial?: string;
  NameInSpecialID?: number;
  TypesInTamu?: string;
  SpecialCollectionIDOriginal?: string;
  SpecialCollectionID?: number;
  TimestampModified?: Date;
  TimestampCreated?: Date;
  LastEditedBy?: Date;
  SSMA_TimeStamp: Date;
  stgIMM?: boolean;
}

export type MuseumInfoPk = "MuseumInfoID";
export type MuseumInfoId = MuseumInfo[MuseumInfoPk];
export type MuseumInfoOptionalAttributes = "MuseumInfoID" | "Author" | "GeoAUS" | "GeoETH" | "GeoNEA" | "GeoNEO" | "GeoORI" | "GeoPAL" | "HeaderCardStatus" | "HodgesNumber" | "MAndBNumber" | "NumberPinnedSC" | "NumberSlidesSC" | "NumberVialsSC" | "NumberEnvelopes" | "NumberSlides" | "NumberPinned" | "NumberVials" | "stgADU" | "stgLAR" | "stgPUP" | "stgEGG" | "stgNYM" | "stgWOR" | "stgSOL" | "stgALA" | "FromTexas" | "storALC" | "storPIN" | "storSLI" | "storENV" | "storDRY" | "NameInSpecial" | "NameInSpecialID" | "TypesInTamu" | "SpecialCollectionIDOriginal" | "SpecialCollectionID" | "TimestampModified" | "TimestampCreated" | "LastEditedBy" | "stgIMM";
export type MuseumInfoCreationAttributes = Optional<MuseumInfoAttributes, MuseumInfoOptionalAttributes>;

export class MuseumInfo extends Model<MuseumInfoAttributes, MuseumInfoCreationAttributes> implements MuseumInfoAttributes {
  MuseumInfoID!: number;
  CombinationID!: number;
  Author?: string;
  GeoAUS?: boolean;
  GeoETH?: boolean;
  GeoNEA?: boolean;
  GeoNEO?: boolean;
  GeoORI?: boolean;
  GeoPAL?: boolean;
  HeaderCardStatus?: string;
  HodgesNumber?: string;
  MAndBNumber?: string;
  NumberPinnedSC?: string;
  NumberSlidesSC?: string;
  NumberVialsSC?: string;
  NumberEnvelopes?: number;
  NumberSlides?: number;
  NumberPinned?: string;
  NumberVials?: number;
  stgADU?: boolean;
  stgLAR?: boolean;
  stgPUP?: boolean;
  stgEGG?: boolean;
  stgNYM?: boolean;
  stgWOR?: boolean;
  stgSOL?: boolean;
  stgALA?: boolean;
  FromTexas?: boolean;
  storALC?: boolean;
  storPIN?: boolean;
  storSLI?: boolean;
  storENV?: boolean;
  storDRY?: boolean;
  NameInSpecial?: string;
  NameInSpecialID?: number;
  TypesInTamu?: string;
  SpecialCollectionIDOriginal?: string;
  SpecialCollectionID?: number;
  TimestampModified?: Date;
  TimestampCreated?: Date;
  LastEditedBy?: Date;
  SSMA_TimeStamp!: Date;
  stgIMM?: boolean;

  // MuseumInfo belongsTo TaxonCombos via CombinationID
  Combination!: TaxonCombos;
  getCombination!: Sequelize.BelongsToGetAssociationMixin<TaxonCombos>;
  setCombination!: Sequelize.BelongsToSetAssociationMixin<TaxonCombos, TaxonCombosId>;
  createCombination!: Sequelize.BelongsToCreateAssociationMixin<TaxonCombos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MuseumInfo {
    return MuseumInfo.init({
    MuseumInfoID: {
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
    Author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GeoAUS: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeoETH: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeoNEA: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeoNEO: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeoORI: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    GeoPAL: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    HeaderCardStatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HodgesNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MAndBNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberPinnedSC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberSlidesSC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberVialsSC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberEnvelopes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumberSlides: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NumberPinned: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NumberVials: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stgADU: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgLAR: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgPUP: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgEGG: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgNYM: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgWOR: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgSOL: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    stgALA: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FromTexas: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    storALC: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    storPIN: {
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
    storDRY: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    NameInSpecial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NameInSpecialID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TypesInTamu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpecialCollectionIDOriginal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpecialCollectionID: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    stgIMM: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MuseumInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MuseumInfo$PrimaryKey",
        unique: true,
        fields: [
          { name: "MuseumInfoID" },
        ]
      },
    ]
  });
  }
}
