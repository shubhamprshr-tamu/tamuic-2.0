import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CabinetsAttributes {
  CabinetID: number;
  LookupNumber?: number;
  OriginalLookupNumber?: number;
  CabFloorPosition?: number;
  CabContents?: string;
  CabRange?: string;
  CabInvNumber?: string;
  CabSource?: string;
  CabRoomLocation?: string;
  Comments?: string;
  Column1?: string;
  Column2?: string;
  CabType?: string;
  CabTypeCode?: number;
  DateLastChecked?: Date;
  status?: string;
  OldCabinetID?: number;
  DateTimeStamp: Date;
}

export type CabinetsPk = "CabinetID";
export type CabinetsId = Cabinets[CabinetsPk];
export type CabinetsOptionalAttributes = "CabinetID" | "LookupNumber" | "OriginalLookupNumber" | "CabFloorPosition" | "CabContents" | "CabRange" | "CabInvNumber" | "CabSource" | "CabRoomLocation" | "Comments" | "Column1" | "Column2" | "CabType" | "CabTypeCode" | "DateLastChecked" | "status" | "OldCabinetID" | "DateTimeStamp";
export type CabinetsCreationAttributes = Optional<CabinetsAttributes, CabinetsOptionalAttributes>;

export class Cabinets extends Model<CabinetsAttributes, CabinetsCreationAttributes> implements CabinetsAttributes {
  CabinetID!: number;
  LookupNumber?: number;
  OriginalLookupNumber?: number;
  CabFloorPosition?: number;
  CabContents?: string;
  CabRange?: string;
  CabInvNumber?: string;
  CabSource?: string;
  CabRoomLocation?: string;
  Comments?: string;
  Column1?: string;
  Column2?: string;
  CabType?: string;
  CabTypeCode?: number;
  DateLastChecked?: Date;
  status?: string;
  OldCabinetID?: number;
  DateTimeStamp!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Cabinets {
    return Cabinets.init({
    CabinetID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CONVERT([int],CONVERT([varbinary](4000),newid(),(0)),(0))'),
      primaryKey: true
    },
    LookupNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OriginalLookupNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CabFloorPosition: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CabContents: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabRange: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabInvNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabSource: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabRoomLocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Column1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Column2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CabTypeCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateLastChecked: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OldCabinetID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    DateTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'Cabinets',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Cabinets$PrimaryKey",
        unique: true,
        fields: [
          { name: "CabinetID" },
        ]
      },
    ]
  });
  }
}
