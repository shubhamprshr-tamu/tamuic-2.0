import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface Table_1Attributes {
  ID: number;
  ProtocolName?: string;
  ProtocolExample?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type Table_1Pk = "ID";
export type Table_1Id = Table_1[Table_1Pk];
export type Table_1OptionalAttributes = "ProtocolName" | "ProtocolExample" | "CreatedDate";
export type Table_1CreationAttributes = Optional<Table_1Attributes, Table_1OptionalAttributes>;

export class Table_1 extends Model<Table_1Attributes, Table_1CreationAttributes> implements Table_1Attributes {
  ID!: number;
  ProtocolName?: string;
  ProtocolExample?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof Table_1 {
    return Table_1.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProtocolName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ProtocolExample: {
      type: DataTypes.STRING(255),
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
    tableName: 'Table_1',
    schema: 'dbo',
    timestamps: false
  });
  }
}
