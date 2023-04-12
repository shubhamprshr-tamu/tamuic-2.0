import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { GenusGroupTaxon, GenusGroupTaxonId } from './GenusGroupTaxon';

export interface GenusLocationsAttributes {
  GenusLocationID?: number;
  GenusGroupNameID: number;
  LookupNumber: number;
  DrawerStart: number;
  DrawerEnd?: number;
  TimestampCreated?: Date;
  TimestampModified?: Date;
  LastEditedBy?: string;
  OldCabinetID?: number;
  ID: number;
}

export type GenusLocationsPk = "ID";
export type GenusLocationsId = GenusLocations[GenusLocationsPk];
export type GenusLocationsOptionalAttributes = "GenusLocationID" | "DrawerEnd" | "TimestampCreated" | "TimestampModified" | "LastEditedBy" | "OldCabinetID" | "ID";
export type GenusLocationsCreationAttributes = Optional<GenusLocationsAttributes, GenusLocationsOptionalAttributes>;

export class GenusLocations extends Model<GenusLocationsAttributes, GenusLocationsCreationAttributes> implements GenusLocationsAttributes {
  GenusLocationID?: number;
  GenusGroupNameID!: number;
  LookupNumber!: number;
  DrawerStart!: number;
  DrawerEnd?: number;
  TimestampCreated?: Date;
  TimestampModified?: Date;
  LastEditedBy?: string;
  OldCabinetID?: number;
  ID!: number;

  // GenusLocations belongsTo GenusGroupTaxon via GenusGroupNameID
  GenusGroupName!: GenusGroupTaxon;
  getGenusGroupName!: Sequelize.BelongsToGetAssociationMixin<GenusGroupTaxon>;
  setGenusGroupName!: Sequelize.BelongsToSetAssociationMixin<GenusGroupTaxon, GenusGroupTaxonId>;
  createGenusGroupName!: Sequelize.BelongsToCreateAssociationMixin<GenusGroupTaxon>;

  static initModel(sequelize: Sequelize.Sequelize): typeof GenusLocations {
    return GenusLocations.init({
    GenusLocationID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    GenusGroupNameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GenusGroupTaxon',
        key: 'GenusGroupNameID'
      }
    },
    LookupNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DrawerStart: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DrawerEnd: {
      type: DataTypes.INTEGER,
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
    LastEditedBy: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldCabinetID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GenusLocations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenusLocations$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
