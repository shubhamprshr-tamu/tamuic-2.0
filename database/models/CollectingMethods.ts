import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CollectingEvent, CollectingEventId } from './CollectingEvent';

export interface CollectingMethodsAttributes {
  MethodID: number;
  MethodName: string;
  Remarks?: string;
}

export type CollectingMethodsPk = "MethodID";
export type CollectingMethodsId = CollectingMethods[CollectingMethodsPk];
export type CollectingMethodsOptionalAttributes = "MethodID" | "Remarks";
export type CollectingMethodsCreationAttributes = Optional<CollectingMethodsAttributes, CollectingMethodsOptionalAttributes>;

export class CollectingMethods extends Model<CollectingMethodsAttributes, CollectingMethodsCreationAttributes> implements CollectingMethodsAttributes {
  MethodID!: number;
  MethodName!: string;
  Remarks?: string;

  // CollectingMethods hasMany CollectingEvent via MethodID
  CollectingEvents!: CollectingEvent[];
  getCollectingEvents!: Sequelize.HasManyGetAssociationsMixin<CollectingEvent>;
  setCollectingEvents!: Sequelize.HasManySetAssociationsMixin<CollectingEvent, CollectingEventId>;
  addCollectingEvent!: Sequelize.HasManyAddAssociationMixin<CollectingEvent, CollectingEventId>;
  addCollectingEvents!: Sequelize.HasManyAddAssociationsMixin<CollectingEvent, CollectingEventId>;
  createCollectingEvent!: Sequelize.HasManyCreateAssociationMixin<CollectingEvent>;
  removeCollectingEvent!: Sequelize.HasManyRemoveAssociationMixin<CollectingEvent, CollectingEventId>;
  removeCollectingEvents!: Sequelize.HasManyRemoveAssociationsMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEvent!: Sequelize.HasManyHasAssociationMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEvents!: Sequelize.HasManyHasAssociationsMixin<CollectingEvent, CollectingEventId>;
  countCollectingEvents!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof CollectingMethods {
    return CollectingMethods.init({
    MethodID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MethodName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Remarks: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CollectingMethods',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CollectingMethods$PrimaryKey",
        unique: true,
        fields: [
          { name: "MethodID" },
        ]
      },
    ]
  });
  }
}
