import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GeoDatum, GeoDatumId } from './GeoDatum';
import type { GeoProtocol, GeoProtocolId } from './GeoProtocol';
import type { GeoSource, GeoSourceId } from './GeoSource';
import type { Locality, LocalityId } from './Locality';

export interface GeoreferenceAttributes {
  GeoreferenceID: number;
  LocalityID: number;
  DatumID?: number;
  Uncertainty?: number;
  ProtocolID?: number;
  SourceID?: number;
  Remarks?: string;
  Elevation?: number;
  Latitude?: number;
  Longitude?: number;
  CreatedByID: number;
  CreatedDate: Date;
}

export type GeoreferencePk = "GeoreferenceID";
export type GeoreferenceId = Georeference[GeoreferencePk];
export type GeoreferenceOptionalAttributes = "GeoreferenceID" | "DatumID" | "Uncertainty" | "ProtocolID" | "SourceID" | "Remarks" | "Elevation" | "Latitude" | "Longitude";
export type GeoreferenceCreationAttributes = Optional<GeoreferenceAttributes, GeoreferenceOptionalAttributes>;

export class Georeference extends Model<GeoreferenceAttributes, GeoreferenceCreationAttributes> implements GeoreferenceAttributes {
  GeoreferenceID!: number;
  LocalityID!: number;
  DatumID?: number;
  Uncertainty?: number;
  ProtocolID?: number;
  SourceID?: number;
  Remarks?: string;
  Elevation?: number;
  Latitude?: number;
  Longitude?: number;
  CreatedByID!: number;
  CreatedDate!: Date;

  // Georeference belongsTo GeoDatum via DatumID
  Datum!: GeoDatum;
  getDatum!: Sequelize.BelongsToGetAssociationMixin<GeoDatum>;
  setDatum!: Sequelize.BelongsToSetAssociationMixin<GeoDatum, GeoDatumId>;
  createDatum!: Sequelize.BelongsToCreateAssociationMixin<GeoDatum>;
  // Georeference belongsTo GeoProtocol via ProtocolID
  Protocol!: GeoProtocol;
  getProtocol!: Sequelize.BelongsToGetAssociationMixin<GeoProtocol>;
  setProtocol!: Sequelize.BelongsToSetAssociationMixin<GeoProtocol, GeoProtocolId>;
  createProtocol!: Sequelize.BelongsToCreateAssociationMixin<GeoProtocol>;
  // Georeference belongsTo GeoSource via SourceID
  Source!: GeoSource;
  getSource!: Sequelize.BelongsToGetAssociationMixin<GeoSource>;
  setSource!: Sequelize.BelongsToSetAssociationMixin<GeoSource, GeoSourceId>;
  createSource!: Sequelize.BelongsToCreateAssociationMixin<GeoSource>;
  // Georeference belongsTo Locality via LocalityID
  Locality!: Locality;
  getLocality!: Sequelize.BelongsToGetAssociationMixin<Locality>;
  setLocality!: Sequelize.BelongsToSetAssociationMixin<Locality, LocalityId>;
  createLocality!: Sequelize.BelongsToCreateAssociationMixin<Locality>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Georeference {
    return Georeference.init({
    GeoreferenceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocalityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Locality',
        key: 'LocalityID'
      }
    },
    DatumID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeoDatum',
        key: 'ID'
      }
    },
    Uncertainty: {
      type: DataTypes.DECIMAL(12,5),
      allowNull: true
    },
    ProtocolID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeoProtocol',
        key: 'ID'
      }
    },
    SourceID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeoSource',
        key: 'ID'
      }
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Elevation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Latitude: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.DECIMAL(8,5),
      allowNull: true
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Georeference',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Georeference",
        unique: true,
        fields: [
          { name: "GeoreferenceID" },
        ]
      },
    ]
  });
  }
}
