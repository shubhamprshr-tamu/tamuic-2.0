import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface qryBuilder_FiltersAttributes {
  ID: number;
  Name: string;
  Value: string;
  Description?: string;
}

export type qryBuilder_FiltersPk = "ID";
export type qryBuilder_FiltersId = qryBuilder_Filters[qryBuilder_FiltersPk];
export type qryBuilder_FiltersOptionalAttributes = "ID" | "Description";
export type qryBuilder_FiltersCreationAttributes = Optional<qryBuilder_FiltersAttributes, qryBuilder_FiltersOptionalAttributes>;

export class qryBuilder_Filters extends Model<qryBuilder_FiltersAttributes, qryBuilder_FiltersCreationAttributes> implements qryBuilder_FiltersAttributes {
  ID!: number;
  Name!: string;
  Value!: string;
  Description?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof qryBuilder_Filters {
    return qryBuilder_Filters.init({
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
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'qryBuilder_Filters',
    schema: 'dbo',
    timestamps: false
  });
  }
}
