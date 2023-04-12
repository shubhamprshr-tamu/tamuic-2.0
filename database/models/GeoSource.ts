import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Georeference, GeoreferenceId } from './Georeference';

export interface GeoSourceAttributes {
  ID: number;
  Source?: string;
  Definition?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type GeoSourcePk = "ID";
export type GeoSourceId = GeoSource[GeoSourcePk];
export type GeoSourceOptionalAttributes = "ID" | "Source" | "Definition" | "CreatedDate";
export type GeoSourceCreationAttributes = Optional<GeoSourceAttributes, GeoSourceOptionalAttributes>;

export class GeoSource extends Model<GeoSourceAttributes, GeoSourceCreationAttributes> implements GeoSourceAttributes {
  ID!: number;
  Source?: string;
  Definition?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // GeoSource hasMany Georeference via SourceID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof GeoSource {
    return GeoSource.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Source: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Definition: {
      type: DataTypes.TEXT,
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
    tableName: 'GeoSource',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeoSource$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
