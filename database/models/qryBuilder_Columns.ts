import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface qryBuilder_ColumnsAttributes {
  ID: number;
  Name: string;
  Value: string;
  DataType: string;
  TableName: string;
}

export type qryBuilder_ColumnsPk = "ID";
export type qryBuilder_ColumnsId = qryBuilder_Columns[qryBuilder_ColumnsPk];
export type qryBuilder_ColumnsOptionalAttributes = "ID";
export type qryBuilder_ColumnsCreationAttributes = Optional<qryBuilder_ColumnsAttributes, qryBuilder_ColumnsOptionalAttributes>;

export class qryBuilder_Columns extends Model<qryBuilder_ColumnsAttributes, qryBuilder_ColumnsCreationAttributes> implements qryBuilder_ColumnsAttributes {
  ID!: number;
  Name!: string;
  Value!: string;
  DataType!: string;
  TableName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof qryBuilder_Columns {
    return qryBuilder_Columns.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    DataType: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    TableName: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'qryBuilder_Columns',
    schema: 'dbo',
    timestamps: false
  });
  }
}
