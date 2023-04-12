import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LifeStagesAttributes {
  StageID: number;
  StageName: string;
}

export type LifeStagesPk = "StageID";
export type LifeStagesId = LifeStages[LifeStagesPk];
export type LifeStagesOptionalAttributes = "StageID";
export type LifeStagesCreationAttributes = Optional<LifeStagesAttributes, LifeStagesOptionalAttributes>;

export class LifeStages extends Model<LifeStagesAttributes, LifeStagesCreationAttributes> implements LifeStagesAttributes {
  StageID!: number;
  StageName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof LifeStages {
    return LifeStages.init({
    StageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StageName: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'LifeStages',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "LifeStages$PrimaryKey",
        unique: true,
        fields: [
          { name: "StageID" },
        ]
      },
    ]
  });
  }
}
