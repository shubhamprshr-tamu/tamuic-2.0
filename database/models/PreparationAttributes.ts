import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SpecimenAttributes, SpecimenAttributesId } from './SpecimenAttributes';

export interface PreparationAttributesAttributes {
  Name?: string;
  ID: number;
}

export type PreparationAttributesPk = "ID";
export type PreparationAttributesId = PreparationAttributes[PreparationAttributesPk];
export type PreparationAttributesOptionalAttributes = "Name";
export type PreparationAttributesCreationAttributes = Optional<PreparationAttributesAttributes, PreparationAttributesOptionalAttributes>;

export class PreparationAttributes extends Model<PreparationAttributesAttributes, PreparationAttributesCreationAttributes> implements PreparationAttributesAttributes {
  Name?: string;
  ID!: number;

  // PreparationAttributes hasMany SpecimenAttributes via Preparation
  SpecimenAttributes!: SpecimenAttributes[];
  getSpecimenAttributes!: Sequelize.HasManyGetAssociationsMixin<SpecimenAttributes>;
  setSpecimenAttributes!: Sequelize.HasManySetAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  addSpecimenAttribute!: Sequelize.HasManyAddAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  addSpecimenAttributes!: Sequelize.HasManyAddAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  createSpecimenAttribute!: Sequelize.HasManyCreateAssociationMixin<SpecimenAttributes>;
  removeSpecimenAttribute!: Sequelize.HasManyRemoveAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  removeSpecimenAttributes!: Sequelize.HasManyRemoveAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  hasSpecimenAttribute!: Sequelize.HasManyHasAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  hasSpecimenAttributes!: Sequelize.HasManyHasAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  countSpecimenAttributes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof PreparationAttributes {
    return PreparationAttributes.init({
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'PreparationAttributes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PreparationAttributes",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
