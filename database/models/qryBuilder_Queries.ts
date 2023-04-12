import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface qryBuilder_QueriesAttributes {
  ID: number;
  Name: string;
  Description?: string;
  Value: string;
}

export type qryBuilder_QueriesPk = "ID";
export type qryBuilder_QueriesId = qryBuilder_Queries[qryBuilder_QueriesPk];
export type qryBuilder_QueriesOptionalAttributes = "ID" | "Description";
export type qryBuilder_QueriesCreationAttributes = Optional<qryBuilder_QueriesAttributes, qryBuilder_QueriesOptionalAttributes>;

export class qryBuilder_Queries extends Model<qryBuilder_QueriesAttributes, qryBuilder_QueriesCreationAttributes> implements qryBuilder_QueriesAttributes {
  ID!: number;
  Name!: string;
  Description?: string;
  Value!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof qryBuilder_Queries {
    return qryBuilder_Queries.init({
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
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'qryBuilder_Queries',
    schema: 'dbo',
    timestamps: false
  });
  }
}
