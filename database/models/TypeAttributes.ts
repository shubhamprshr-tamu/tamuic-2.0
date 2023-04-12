import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SpecimenAttributes, SpecimenAttributesId } from './SpecimenAttributes';

export interface TypeAttributesAttributes {
  ID: number;
  Name: string;
}

export type TypeAttributesPk = "ID";
export type TypeAttributesId = TypeAttributes[TypeAttributesPk];
export type TypeAttributesCreationAttributes = TypeAttributesAttributes;

export class TypeAttributes extends Model<TypeAttributesAttributes, TypeAttributesCreationAttributes> implements TypeAttributesAttributes {
  ID!: number;
  Name!: string;

  // TypeAttributes hasMany SpecimenAttributes via IsType
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TypeAttributes {
    return TypeAttributes.init({
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TypeAttributes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TypeAttributes",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
