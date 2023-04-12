import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { SpecimenBioAttributes, SpecimenBioAttributesCreationAttributes, SpecimenBioAttributesId } from './SpecimenBioAttributes';
import type { Users, UsersId } from './Users';

export interface SpecimenTypeAttributes {
  SpecimenID: number;
  GUID: string;
  Identifier: string;
  CollectingEventID: number;
  ParentSpecimenID?: number;
  SpecimenTaxonID?: number;
  SpecimenGroupName?: string;
  Remarks?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
  Blocked: boolean;
  BlockReason?: string;
}

export type SpecimenPk = "SpecimenID";
export type SpecimenId = Specimen[SpecimenPk];
export type SpecimenOptionalAttributes = "SpecimenID" | "GUID" | "ParentSpecimenID" | "SpecimenTaxonID" | "SpecimenGroupName" | "Remarks" | "CreatedDate" | "ModifiedDate" | "Blocked" | "BlockReason";
export type SpecimenCreationAttributes = Optional<SpecimenTypeAttributes, SpecimenOptionalAttributes>;

export class Specimen extends Model<SpecimenTypeAttributes, SpecimenCreationAttributes> implements SpecimenTypeAttributes {
  SpecimenID!: number;
  GUID!: string;
  Identifier!: string;
  CollectingEventID!: number;
  ParentSpecimenID?: number;
  SpecimenTaxonID?: number;
  SpecimenGroupName?: string;
  Remarks?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;
  Blocked!: boolean;
  BlockReason?: string;

  // Specimen belongsTo Specimen via ParentSpecimenID
  ParentSpecimen!: Specimen;
  getParentSpecimen!: Sequelize.BelongsToGetAssociationMixin<Specimen>;
  setParentSpecimen!: Sequelize.BelongsToSetAssociationMixin<Specimen, SpecimenId>;
  createParentSpecimen!: Sequelize.BelongsToCreateAssociationMixin<Specimen>;
  // Specimen hasOne SpecimenBioAttributes via SpecimenID
  SpecimenBioAttribute!: SpecimenBioAttributes;
  getSpecimenBioAttribute!: Sequelize.HasOneGetAssociationMixin<SpecimenBioAttributes>;
  setSpecimenBioAttribute!: Sequelize.HasOneSetAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  createSpecimenBioAttribute!: Sequelize.HasOneCreateAssociationMixin<SpecimenBioAttributes>;
  // Specimen belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // Specimen belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Specimen {
    return Specimen.init({
    SpecimenID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GUID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    Identifier: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    CollectingEventID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParentSpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Specimen',
        key: 'SpecimenID'
      }
    },
    SpecimenTaxonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpecimenGroupName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    Blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BlockReason: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Specimen',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "TamuicObject$PrimaryKey",
        unique: true,
        fields: [
          { name: "SpecimenID" },
        ]
      },
    ]
  });
  }
}
