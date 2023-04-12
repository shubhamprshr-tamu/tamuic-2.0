import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CabinetTypesAttributes {
  CabinetType: number;
  Description?: string;
  ColumnISD?: number;
  ColumnIED?: number;
  ColumnIISD?: number;
  ColumnIIED?: number;
  ColumnOtherSD?: number;
  ColumnOtherED?: number;
}

export type CabinetTypesPk = "CabinetType";
export type CabinetTypesId = CabinetTypes[CabinetTypesPk];
export type CabinetTypesOptionalAttributes = "Description" | "ColumnISD" | "ColumnIED" | "ColumnIISD" | "ColumnIIED" | "ColumnOtherSD" | "ColumnOtherED";
export type CabinetTypesCreationAttributes = Optional<CabinetTypesAttributes, CabinetTypesOptionalAttributes>;

export class CabinetTypes extends Model<CabinetTypesAttributes, CabinetTypesCreationAttributes> implements CabinetTypesAttributes {
  CabinetType!: number;
  Description?: string;
  ColumnISD?: number;
  ColumnIED?: number;
  ColumnIISD?: number;
  ColumnIIED?: number;
  ColumnOtherSD?: number;
  ColumnOtherED?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof CabinetTypes {
    return CabinetTypes.init({
    CabinetType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ColumnISD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnIED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnIISD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnIIED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnOtherSD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ColumnOtherED: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CabinetTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CabinetTypes$PrimaryKey",
        unique: true,
        fields: [
          { name: "CabinetType" },
        ]
      },
    ]
  });
  }
}
