import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface qryBuilder_RelationsAttributes {
  ID: number;
  TableName: string;
  ColumnName: string;
  SecondTableName: string;
  SecondColumnName: string;
}

export type qryBuilder_RelationsPk = "ID";
export type qryBuilder_RelationsId = qryBuilder_Relations[qryBuilder_RelationsPk];
export type qryBuilder_RelationsOptionalAttributes = "ID";
export type qryBuilder_RelationsCreationAttributes = Optional<qryBuilder_RelationsAttributes, qryBuilder_RelationsOptionalAttributes>;

export class qryBuilder_Relations extends Model<qryBuilder_RelationsAttributes, qryBuilder_RelationsCreationAttributes> implements qryBuilder_RelationsAttributes {
  ID!: number;
  TableName!: string;
  ColumnName!: string;
  SecondTableName!: string;
  SecondColumnName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof qryBuilder_Relations {
    return qryBuilder_Relations.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TableName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ColumnName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SecondTableName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    SecondColumnName: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'qryBuilder_Relations',
    schema: 'dbo',
    timestamps: false
  });
  }
}
