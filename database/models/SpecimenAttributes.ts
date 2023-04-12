import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { PreparationAttributes, PreparationAttributesId } from './PreparationAttributes';
import type { TypeAttributes, TypeAttributesId } from './TypeAttributes';
import type { Users, UsersId } from './Users';

export interface SpecimenAttributesAttributes {
  SpecimenID: number;
  Preparation?: number;
  IsType?: number;
  WithMicrovial?: boolean;
  SpecimenDamaged?: boolean;
  SpecimenLost?: boolean;
  Deaccessioned?: boolean;
  DeaccessionType?: number;
  DeaccessionInfo?: string;
  Remarks?: string;
  CreatedDate?: Date;
  CreatedByID?: number;
  ModifiedDate?: Date;
  ModifiedByID?: number;
}

export type SpecimenAttributesPk = "SpecimenID";
export type SpecimenAttributesId = SpecimenAttributes[SpecimenAttributesPk];
export type SpecimenAttributesOptionalAttributes = "Preparation" | "IsType" | "WithMicrovial" | "SpecimenDamaged" | "SpecimenLost" | "Deaccessioned" | "DeaccessionType" | "DeaccessionInfo" | "Remarks" | "CreatedDate" | "CreatedByID" | "ModifiedDate" | "ModifiedByID";
export type SpecimenAttributesCreationAttributes = Optional<SpecimenAttributesAttributes, SpecimenAttributesOptionalAttributes>;

export class SpecimenAttributes extends Model<SpecimenAttributesAttributes, SpecimenAttributesCreationAttributes> implements SpecimenAttributesAttributes {
  SpecimenID!: number;
  Preparation?: number;
  IsType?: number;
  WithMicrovial?: boolean;
  SpecimenDamaged?: boolean;
  SpecimenLost?: boolean;
  Deaccessioned?: boolean;
  DeaccessionType?: number;
  DeaccessionInfo?: string;
  Remarks?: string;
  CreatedDate?: Date;
  CreatedByID?: number;
  ModifiedDate?: Date;
  ModifiedByID?: number;

  // SpecimenAttributes belongsTo PreparationAttributes via Preparation
  Preparation_PreparationAttribute!: PreparationAttributes;
  getPreparation_PreparationAttribute!: Sequelize.BelongsToGetAssociationMixin<PreparationAttributes>;
  setPreparation_PreparationAttribute!: Sequelize.BelongsToSetAssociationMixin<PreparationAttributes, PreparationAttributesId>;
  createPreparation_PreparationAttribute!: Sequelize.BelongsToCreateAssociationMixin<PreparationAttributes>;
  // SpecimenAttributes belongsTo TypeAttributes via IsType
  IsType_TypeAttribute!: TypeAttributes;
  getIsType_TypeAttribute!: Sequelize.BelongsToGetAssociationMixin<TypeAttributes>;
  setIsType_TypeAttribute!: Sequelize.BelongsToSetAssociationMixin<TypeAttributes, TypeAttributesId>;
  createIsType_TypeAttribute!: Sequelize.BelongsToCreateAssociationMixin<TypeAttributes>;
  // SpecimenAttributes belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // SpecimenAttributes belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SpecimenAttributes {
    return SpecimenAttributes.init({
    SpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Preparation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'PreparationAttributes',
        key: 'ID'
      }
    },
    IsType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TypeAttributes',
        key: 'ID'
      }
    },
    WithMicrovial: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SpecimenDamaged: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    SpecimenLost: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    Deaccessioned: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DeaccessionType: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeaccessionInfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    }
  }, {
    sequelize,
    tableName: 'SpecimenAttributes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TamuicObject_ObjA$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecimenID" },
        ]
      },
    ]
  });
  }
}
