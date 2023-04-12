import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CollectingEvent, CollectingEventId } from './CollectingEvent';
import type { GeoVerify, GeoVerifyId } from './GeoVerify';
import type { Georeference, GeoreferenceId } from './Georeference';
import type { Users, UsersId } from './Users';

export interface LocalityAttributes {
  LocalityID: number;
  GUID: string;
  GeographyID: number;
  NamedPlace: string;
  LocalityName?: string;
  RTNPtxt?: string;
  RTNPnumb?: number;
  RTNPdir?: string;
  RTNPmeas?: string;
  RTNPar?: string;
  RTNPtype?: number;
  VerbatimLocality?: string;
  OldStandardLat?: string;
  OldStandardLon?: string;
  VerbatimLat?: string;
  VerbatimLon?: string;
  StandardLat?: number;
  StandardLon?: number;
  MinElevation?: number;
  MaxElevation?: number;
  VerbatimElevation?: string;
  ElevationUnits?: string;
  Remarks?: string;
  PossibleErrorFlag: boolean;
  PEFTaggedBy?: number;
  PossibleErrorReason?: string;
  GeoVerStatus: number;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
  Blocked: boolean;
  BlockReason?: string;
}

export type LocalityPk = "LocalityID";
export type LocalityId = Locality[LocalityPk];
export type LocalityOptionalAttributes = "LocalityID" | "GUID" | "NamedPlace" | "LocalityName" | "RTNPtxt" | "RTNPnumb" | "RTNPdir" | "RTNPmeas" | "RTNPar" | "RTNPtype" | "VerbatimLocality" | "OldStandardLat" | "OldStandardLon" | "VerbatimLat" | "VerbatimLon" | "StandardLat" | "StandardLon" | "MinElevation" | "MaxElevation" | "VerbatimElevation" | "ElevationUnits" | "Remarks" | "PossibleErrorFlag" | "PEFTaggedBy" | "PossibleErrorReason" | "GeoVerStatus" | "CreatedDate" | "ModifiedDate" | "Blocked" | "BlockReason";
export type LocalityCreationAttributes = Optional<LocalityAttributes, LocalityOptionalAttributes>;

export class Locality extends Model<LocalityAttributes, LocalityCreationAttributes> implements LocalityAttributes {
  LocalityID!: number;
  GUID!: string;
  GeographyID!: number;
  NamedPlace!: string;
  LocalityName?: string;
  RTNPtxt?: string;
  RTNPnumb?: number;
  RTNPdir?: string;
  RTNPmeas?: string;
  RTNPar?: string;
  RTNPtype?: number;
  VerbatimLocality?: string;
  OldStandardLat?: string;
  OldStandardLon?: string;
  VerbatimLat?: string;
  VerbatimLon?: string;
  StandardLat?: number;
  StandardLon?: number;
  MinElevation?: number;
  MaxElevation?: number;
  VerbatimElevation?: string;
  ElevationUnits?: string;
  Remarks?: string;
  PossibleErrorFlag!: boolean;
  PEFTaggedBy?: number;
  PossibleErrorReason?: string;
  GeoVerStatus!: number;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;
  Blocked!: boolean;
  BlockReason?: string;

  // Locality belongsTo GeoVerify via GeoVerStatus
  GeoVerStatus_GeoVerify!: GeoVerify;
  getGeoVerStatus_GeoVerify!: Sequelize.BelongsToGetAssociationMixin<GeoVerify>;
  setGeoVerStatus_GeoVerify!: Sequelize.BelongsToSetAssociationMixin<GeoVerify, GeoVerifyId>;
  createGeoVerStatus_GeoVerify!: Sequelize.BelongsToCreateAssociationMixin<GeoVerify>;
  // Locality hasMany CollectingEvent via LocalityID
  CollectingEvents!: CollectingEvent[];
  getCollectingEvents!: Sequelize.HasManyGetAssociationsMixin<CollectingEvent>;
  setCollectingEvents!: Sequelize.HasManySetAssociationsMixin<CollectingEvent, CollectingEventId>;
  addCollectingEvent!: Sequelize.HasManyAddAssociationMixin<CollectingEvent, CollectingEventId>;
  addCollectingEvents!: Sequelize.HasManyAddAssociationsMixin<CollectingEvent, CollectingEventId>;
  createCollectingEvent!: Sequelize.HasManyCreateAssociationMixin<CollectingEvent>;
  removeCollectingEvent!: Sequelize.HasManyRemoveAssociationMixin<CollectingEvent, CollectingEventId>;
  removeCollectingEvents!: Sequelize.HasManyRemoveAssociationsMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEvent!: Sequelize.HasManyHasAssociationMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEvents!: Sequelize.HasManyHasAssociationsMixin<CollectingEvent, CollectingEventId>;
  countCollectingEvents!: Sequelize.HasManyCountAssociationsMixin;
  // Locality hasMany Georeference via LocalityID
  Georeferences!: Georeference[];
  getGeoreferences!: Sequelize.HasManyGetAssociationsMixin<Georeference>;
  setGeoreferences!: Sequelize.HasManySetAssociationsMixin<Georeference, GeoreferenceId>;
  addGeoreference!: Sequelize.HasManyAddAssociationMixin<Georeference, GeoreferenceId>;
  addGeoreferences!: Sequelize.HasManyAddAssociationsMixin<Georeference, GeoreferenceId>;
  createGeoreference!: Sequelize.HasManyCreateAssociationMixin<Georeference>;
  removeGeoreference!: Sequelize.HasManyRemoveAssociationMixin<Georeference, GeoreferenceId>;
  removeGeoreferences!: Sequelize.HasManyRemoveAssociationsMixin<Georeference, GeoreferenceId>;
  hasGeoreference!: Sequelize.HasManyHasAssociationMixin<Georeference, GeoreferenceId>;
  hasGeoreferences!: Sequelize.HasManyHasAssociationsMixin<Georeference, GeoreferenceId>;
  countGeoreferences!: Sequelize.HasManyCountAssociationsMixin;
  // Locality belongsTo Users via PEFTaggedBy
  PEFTaggedBy_User!: Users;
  getPEFTaggedBy_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setPEFTaggedBy_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createPEFTaggedBy_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // Locality belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // Locality belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Locality {
    return Locality.init({
    LocalityID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GUID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    GeographyID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NamedPlace: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "No further locality"
    },
    LocalityName: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    RTNPtxt: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    RTNPnumb: {
      type: DataTypes.REAL,
      allowNull: true
    },
    RTNPdir: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTNPmeas: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTNPar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTNPtype: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VerbatimLocality: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OldStandardLat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldStandardLon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VerbatimLat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VerbatimLon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    StandardLat: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    StandardLon: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    MinElevation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MaxElevation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VerbatimElevation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ElevationUnits: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PossibleErrorFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    PEFTaggedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    PossibleErrorReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GeoVerStatus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 7,
      references: {
        model: 'GeoVerify',
        key: 'ID'
      }
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    Blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BlockReason: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Locality',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Locality$PrimaryKey",
        unique: true,
        fields: [
          { name: "LocalityID" },
        ]
      },
    ]
  });
  }
}
