import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Georeference, GeoreferenceId } from './Georeference';

export interface GeoDatumAttributes {
  ID: number;
  Datum?: string;
  Definition?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type GeoDatumPk = "ID";
export type GeoDatumId = GeoDatum[GeoDatumPk];
export type GeoDatumOptionalAttributes = "ID" | "Datum" | "Definition" | "CreatedDate";
export type GeoDatumCreationAttributes = Optional<GeoDatumAttributes, GeoDatumOptionalAttributes>;

export class GeoDatum extends Model<GeoDatumAttributes, GeoDatumCreationAttributes> implements GeoDatumAttributes {
  ID!: number;
  Datum?: string;
  Definition?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // GeoDatum hasMany Georeference via DatumID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof GeoDatum {
    return GeoDatum.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Datum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0"
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
    tableName: 'GeoDatum',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeoDatum$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
