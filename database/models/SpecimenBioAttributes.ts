import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Specimen, SpecimenId } from './Specimen';
import type { Users, UsersId } from './Users';

export interface SpecimenBioAttributesAttributes {
  SpecimenID: number;
  Sex?: string;
  Stage?: string;
  EmergeDay?: number;
  EmergeMonth?: number;
  EmergeYear?: number;
  Host?: string;
  Remarks?: string;
  CreatedDate?: Date;
  CreatedByID?: number;
  ModifiedDate?: Date;
  ModifiedByID?: number;
  Age?: string;
  Number?: string;
  Number2?: string;
  Number3?: string;
  Stage2?: string;
  Stage3?: string;
}

export type SpecimenBioAttributesPk = "SpecimenID";
export type SpecimenBioAttributesId = SpecimenBioAttributes[SpecimenBioAttributesPk];
export type SpecimenBioAttributesOptionalAttributes = "Sex" | "Stage" | "EmergeDay" | "EmergeMonth" | "EmergeYear" | "Host" | "Remarks" | "CreatedDate" | "CreatedByID" | "ModifiedDate" | "ModifiedByID" | "Age" | "Number" | "Number2" | "Number3" | "Stage2" | "Stage3";
export type SpecimenBioAttributesCreationAttributes = Optional<SpecimenBioAttributesAttributes, SpecimenBioAttributesOptionalAttributes>;

export class SpecimenBioAttributes extends Model<SpecimenBioAttributesAttributes, SpecimenBioAttributesCreationAttributes> implements SpecimenBioAttributesAttributes {
  SpecimenID!: number;
  Sex?: string;
  Stage?: string;
  EmergeDay?: number;
  EmergeMonth?: number;
  EmergeYear?: number;
  Host?: string;
  Remarks?: string;
  CreatedDate?: Date;
  CreatedByID?: number;
  ModifiedDate?: Date;
  ModifiedByID?: number;
  Age?: string;
  Number?: string;
  Number2?: string;
  Number3?: string;
  Stage2?: string;
  Stage3?: string;

  // SpecimenBioAttributes belongsTo Specimen via SpecimenID
  Specimen!: Specimen;
  getSpecimen!: Sequelize.BelongsToGetAssociationMixin<Specimen>;
  setSpecimen!: Sequelize.BelongsToSetAssociationMixin<Specimen, SpecimenId>;
  createSpecimen!: Sequelize.BelongsToCreateAssociationMixin<Specimen>;
  // SpecimenBioAttributes belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // SpecimenBioAttributes belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof SpecimenBioAttributes {
    return SpecimenBioAttributes.init({
    SpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Specimen',
        key: 'SpecimenID'
      }
    },
    Sex: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Stage: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmergeDay: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    EmergeMonth: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    EmergeYear: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    Host: {
      type: DataTypes.STRING(255),
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
    },
    Age: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Number2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Number3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Stage2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Stage3: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecimenBioAttributes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TamuicObject_BioObjA$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecimenID" },
        ]
      },
    ]
  });
  }
}
