import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SpecimenTestAttributes {
  SpecimenID: number;
  GUID: string;
  Identifier: string;
  CollectingEventID: number;
  ParentSpecimenID?: number;
  SpecimenTaxonID?: number;
  SpecimenGroupNameID?: number;
  SpecimenGroupName?: string;
  Remarks?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
  Blocked: boolean;
  BlockReason?: string;
}

export type SpecimenTestOptionalAttributes = "ParentSpecimenID" | "SpecimenTaxonID" | "SpecimenGroupNameID" | "SpecimenGroupName" | "Remarks" | "BlockReason";
export type SpecimenTestCreationAttributes = Optional<SpecimenTestAttributes, SpecimenTestOptionalAttributes>;

export class SpecimenTest extends Model<SpecimenTestAttributes, SpecimenTestCreationAttributes> implements SpecimenTestAttributes {
  SpecimenID!: number;
  GUID!: string;
  Identifier!: string;
  CollectingEventID!: number;
  ParentSpecimenID?: number;
  SpecimenTaxonID?: number;
  SpecimenGroupNameID?: number;
  SpecimenGroupName?: string;
  Remarks?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;
  Blocked!: boolean;
  BlockReason?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SpecimenTest {
    return SpecimenTest.init({
    SpecimenID: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: true
    },
    SpecimenTaxonID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SpecimenGroupNameID: {
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
      allowNull: false
    },
    CreatedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    BlockReason: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SpecimenTest',
    schema: 'dbo',
    timestamps: false
  });
  }
}
