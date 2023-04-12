import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MuseumCuratorSettingsAttributes {
  ModeNumber: number;
  DFMode?: boolean;
  CURMode?: boolean;
  DFSpeciesCombos?: boolean;
  CURSpeciesCombos?: boolean;
  DFHighClassOn?: boolean;
  CURHighClassOn?: boolean;
  DFMuseumInfo?: boolean;
  CURMuseumInfo?: boolean;
  DFTypeInfo?: boolean;
  CURTypeInfo?: boolean;
  DFSpecialCollection?: boolean;
  CURSpecialCollection?: boolean;
  DefaultUser?: number;
  CurrentUser?: number;
  DateTimeStamp: Date;
}

export type MuseumCuratorSettingsPk = "ModeNumber";
export type MuseumCuratorSettingsId = MuseumCuratorSettings[MuseumCuratorSettingsPk];
export type MuseumCuratorSettingsOptionalAttributes = "DFMode" | "CURMode" | "DFSpeciesCombos" | "CURSpeciesCombos" | "DFHighClassOn" | "CURHighClassOn" | "DFMuseumInfo" | "CURMuseumInfo" | "DFTypeInfo" | "CURTypeInfo" | "DFSpecialCollection" | "CURSpecialCollection" | "DefaultUser" | "CurrentUser" | "DateTimeStamp";
export type MuseumCuratorSettingsCreationAttributes = Optional<MuseumCuratorSettingsAttributes, MuseumCuratorSettingsOptionalAttributes>;

export class MuseumCuratorSettings extends Model<MuseumCuratorSettingsAttributes, MuseumCuratorSettingsCreationAttributes> implements MuseumCuratorSettingsAttributes {
  ModeNumber!: number;
  DFMode?: boolean;
  CURMode?: boolean;
  DFSpeciesCombos?: boolean;
  CURSpeciesCombos?: boolean;
  DFHighClassOn?: boolean;
  CURHighClassOn?: boolean;
  DFMuseumInfo?: boolean;
  CURMuseumInfo?: boolean;
  DFTypeInfo?: boolean;
  CURTypeInfo?: boolean;
  DFSpecialCollection?: boolean;
  CURSpecialCollection?: boolean;
  DefaultUser?: number;
  CurrentUser?: number;
  DateTimeStamp!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof MuseumCuratorSettings {
    return MuseumCuratorSettings.init({
    ModeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DFMode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURMode: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DFSpeciesCombos: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURSpeciesCombos: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DFHighClassOn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURHighClassOn: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DFMuseumInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURMuseumInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DFTypeInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURTypeInfo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DFSpecialCollection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    CURSpecialCollection: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    DefaultUser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrentUser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'MuseumCuratorSettings',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "MuseumCuratorSettings$PrimaryKey",
        unique: true,
        fields: [
          { name: "ModeNumber" },
        ]
      },
    ]
  });
  }
}
