import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SpecimenMiscCodesAttributes {
  ID: number;
  SpecimenID?: number;
  Code?: string;
  CodeDescription?: string;
  CreatedDate?: Date;
  CodeType?: string;
}

export type SpecimenMiscCodesPk = "ID";
export type SpecimenMiscCodesId = SpecimenMiscCodes[SpecimenMiscCodesPk];
export type SpecimenMiscCodesOptionalAttributes = "ID" | "SpecimenID" | "Code" | "CodeDescription" | "CreatedDate" | "CodeType";
export type SpecimenMiscCodesCreationAttributes = Optional<SpecimenMiscCodesAttributes, SpecimenMiscCodesOptionalAttributes>;

export class SpecimenMiscCodes extends Model<SpecimenMiscCodesAttributes, SpecimenMiscCodesCreationAttributes> implements SpecimenMiscCodesAttributes {
  ID!: number;
  SpecimenID?: number;
  Code?: string;
  CodeDescription?: string;
  CreatedDate?: Date;
  CodeType?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SpecimenMiscCodes {
    return SpecimenMiscCodes.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CodeDescription: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CodeType: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecimenMiscCodes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TamuicObjectMiscCodes$PrimaryKey",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
