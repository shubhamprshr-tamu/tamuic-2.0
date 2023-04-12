import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locality, LocalityId } from './Locality';

export interface GeoVerifyAttributes {
  ID: number;
  VerifyName: string;
  VerifyClassAbbrev?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type GeoVerifyPk = "ID";
export type GeoVerifyId = GeoVerify[GeoVerifyPk];
export type GeoVerifyOptionalAttributes = "ID" | "VerifyClassAbbrev" | "CreatedDate";
export type GeoVerifyCreationAttributes = Optional<GeoVerifyAttributes, GeoVerifyOptionalAttributes>;

export class GeoVerify extends Model<GeoVerifyAttributes, GeoVerifyCreationAttributes> implements GeoVerifyAttributes {
  ID!: number;
  VerifyName!: string;
  VerifyClassAbbrev?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // GeoVerify hasMany Locality via GeoVerStatus
  Localities!: Locality[];
  getLocalities!: Sequelize.HasManyGetAssociationsMixin<Locality>;
  setLocalities!: Sequelize.HasManySetAssociationsMixin<Locality, LocalityId>;
  addLocality!: Sequelize.HasManyAddAssociationMixin<Locality, LocalityId>;
  addLocalities!: Sequelize.HasManyAddAssociationsMixin<Locality, LocalityId>;
  createLocality!: Sequelize.HasManyCreateAssociationMixin<Locality>;
  removeLocality!: Sequelize.HasManyRemoveAssociationMixin<Locality, LocalityId>;
  removeLocalities!: Sequelize.HasManyRemoveAssociationsMixin<Locality, LocalityId>;
  hasLocality!: Sequelize.HasManyHasAssociationMixin<Locality, LocalityId>;
  hasLocalities!: Sequelize.HasManyHasAssociationsMixin<Locality, LocalityId>;
  countLocalities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof GeoVerify {
    return GeoVerify.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VerifyName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    VerifyClassAbbrev: {
      type: DataTypes.STRING(10),
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
    tableName: 'GeoVerify',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeoVerify$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
