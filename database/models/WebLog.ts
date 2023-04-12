import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface WebLogAttributes {
  LogID: number;
  TableName?: string;
  FieldName?: string;
  InitialValue?: string;
  NewValue?: string;
  DateTimeStamp?: Date;
}

export type WebLogPk = "LogID";
export type WebLogId = WebLog[WebLogPk];
export type WebLogOptionalAttributes = "LogID" | "TableName" | "FieldName" | "InitialValue" | "NewValue" | "DateTimeStamp";
export type WebLogCreationAttributes = Optional<WebLogAttributes, WebLogOptionalAttributes>;

export class WebLog extends Model<WebLogAttributes, WebLogCreationAttributes> implements WebLogAttributes {
  LogID!: number;
  TableName?: string;
  FieldName?: string;
  InitialValue?: string;
  NewValue?: string;
  DateTimeStamp?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof WebLog {
    return WebLog.init({
    LogID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FieldName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    InitialValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NewValue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DateTimeStamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'WebLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_WebLog",
        unique: true,
        fields: [
          { name: "LogID" },
        ]
      },
    ]
  });
  }
}
