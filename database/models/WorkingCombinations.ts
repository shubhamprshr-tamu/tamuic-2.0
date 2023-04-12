import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface WorkingCombinationsAttributes {
  CombinationID: number;
  name?: string;
  combo_no_subgenus?: string;
  class?: string;
  classID?: string;
  subclass?: string;
  subclassID?: string;
  order?: string;
  orderID?: string;
  suborder?: string;
  suborderID?: string;
  superfamily?: string;
  superfamilyID?: string;
  family?: string;
  familyID?: string;
  subfamily?: string;
  subfamilyID?: string;
  tribe?: string;
  tribeID?: string;
  subtribe?: string;
  subtribeID?: string;
  genus?: string;
  GenusID?: number;
  subgenus?: string;
  species?: string;
  subspecies?: string;
  author?: string;
  Restriction?: string;
  GenusCert?: string;
  SubgenusCert?: string;
  SpeciesCert?: string;
  SubspeciesCert?: string;
}

export type WorkingCombinationsPk = "CombinationID";
export type WorkingCombinationsId = WorkingCombinations[WorkingCombinationsPk];
export type WorkingCombinationsOptionalAttributes = "CombinationID" | "name" | "combo_no_subgenus" | "class" | "classID" | "subclass" | "subclassID" | "order" | "orderID" | "suborder" | "suborderID" | "superfamily" | "superfamilyID" | "family" | "familyID" | "subfamily" | "subfamilyID" | "tribe" | "tribeID" | "subtribe" | "subtribeID" | "genus" | "GenusID" | "subgenus" | "species" | "subspecies" | "author" | "Restriction" | "GenusCert" | "SubgenusCert" | "SpeciesCert" | "SubspeciesCert";
export type WorkingCombinationsCreationAttributes = Optional<WorkingCombinationsAttributes, WorkingCombinationsOptionalAttributes>;

export class WorkingCombinations extends Model<WorkingCombinationsAttributes, WorkingCombinationsCreationAttributes> implements WorkingCombinationsAttributes {
  CombinationID!: number;
  name?: string;
  combo_no_subgenus?: string;
  class?: string;
  classID?: string;
  subclass?: string;
  subclassID?: string;
  order?: string;
  orderID?: string;
  suborder?: string;
  suborderID?: string;
  superfamily?: string;
  superfamilyID?: string;
  family?: string;
  familyID?: string;
  subfamily?: string;
  subfamilyID?: string;
  tribe?: string;
  tribeID?: string;
  subtribe?: string;
  subtribeID?: string;
  genus?: string;
  GenusID?: number;
  subgenus?: string;
  species?: string;
  subspecies?: string;
  author?: string;
  Restriction?: string;
  GenusCert?: string;
  SubgenusCert?: string;
  SpeciesCert?: string;
  SubspeciesCert?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof WorkingCombinations {
    return WorkingCombinations.init({
    CombinationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    combo_no_subgenus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    class: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subclass: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subclassID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orderID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suborder: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suborderID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    superfamily: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    superfamilyID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    family: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    familyID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subfamily: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subfamilyID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tribe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tribeID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subtribe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subtribeID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    genus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GenusID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subgenus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    subspecies: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Restriction: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GenusCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubgenusCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SpeciesCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SubspeciesCert: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WorkingCombinations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_WorkingCombinations",
        unique: true,
        fields: [
          { name: "CombinationID" },
        ]
      },
    ]
  });
  }
}
