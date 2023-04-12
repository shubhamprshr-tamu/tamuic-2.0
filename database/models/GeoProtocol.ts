import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Georeference, GeoreferenceId } from './Georeference';

export interface GeoProtocolAttributes {
  ID: number;
  ProtocolName?: string;
  ProtocolExample?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type GeoProtocolPk = "ID";
export type GeoProtocolId = GeoProtocol[GeoProtocolPk];
export type GeoProtocolOptionalAttributes = "ID" | "ProtocolName" | "ProtocolExample" | "CreatedDate";
export type GeoProtocolCreationAttributes = Optional<GeoProtocolAttributes, GeoProtocolOptionalAttributes>;

export class GeoProtocol extends Model<GeoProtocolAttributes, GeoProtocolCreationAttributes> implements GeoProtocolAttributes {
  ID!: number;
  ProtocolName?: string;
  ProtocolExample?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // GeoProtocol hasMany Georeference via ProtocolID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof GeoProtocol {
    return GeoProtocol.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProtocolName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ProtocolExample: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GeoProtocol',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeoProtocol$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
