import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Users, UsersId } from './Users';

export interface GeographyAttributes {
  GeographyID: number;
  GeogName: string;
  GeogType: string;
  ParentGeogID?: number;
  IsCurrent?: boolean;
  CurrentID?: number;
  Remarks?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type GeographyPk = "GeographyID";
export type GeographyId = Geography[GeographyPk];
export type GeographyOptionalAttributes = "GeographyID" | "ParentGeogID" | "IsCurrent" | "CurrentID" | "Remarks" | "CreatedDate" | "ModifiedDate";
export type GeographyCreationAttributes = Optional<GeographyAttributes, GeographyOptionalAttributes>;

export class Geography extends Model<GeographyAttributes, GeographyCreationAttributes> implements GeographyAttributes {
  GeographyID!: number;
  GeogName!: string;
  GeogType!: string;
  ParentGeogID?: number;
  IsCurrent?: boolean;
  CurrentID?: number;
  Remarks?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // Geography belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // Geography belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Geography {
    return Geography.init({
    GeographyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GeogName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    GeogType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ParentGeogID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsCurrent: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CurrentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Remarks: {
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
    }
  }, {
    sequelize,
    tableName: 'Geography',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Geography$PrimaryKey",
        unique: true,
        fields: [
          { name: "GeographyID" },
        ]
      },
    ]
  });
  }
}
