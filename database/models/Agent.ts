import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CollectingEvent, CollectingEventId } from './CollectingEvent';
import type { Collectors, CollectorsId } from './Collectors';
import type { SpecimenDetLabels, SpecimenDetLabelsId } from './SpecimenDetLabels';

export interface AgentAttributes {
  AgentID: number;
  GUID: string;
  FirstName?: string;
  LastName: string;
  MiddleInitial?: string;
  Title?: string;
  Remarks?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type AgentPk = "AgentID";
export type AgentId = Agent[AgentPk];
export type AgentOptionalAttributes = "AgentID" | "GUID" | "FirstName" | "MiddleInitial" | "Title" | "Remarks" | "CreatedDate" | "ModifiedDate";
export type AgentCreationAttributes = Optional<AgentAttributes, AgentOptionalAttributes>;

export class Agent extends Model<AgentAttributes, AgentCreationAttributes> implements AgentAttributes {
  AgentID!: number;
  GUID!: string;
  FirstName?: string;
  LastName!: string;
  MiddleInitial?: string;
  Title?: string;
  Remarks?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // Agent belongsToMany CollectingEvent via AgentID and CollectingEventID
  CollectingEventID_CollectingEvents!: CollectingEvent[];
  getCollectingEventID_CollectingEvents!: Sequelize.BelongsToManyGetAssociationsMixin<CollectingEvent>;
  setCollectingEventID_CollectingEvents!: Sequelize.BelongsToManySetAssociationsMixin<CollectingEvent, CollectingEventId>;
  addCollectingEventID_CollectingEvent!: Sequelize.BelongsToManyAddAssociationMixin<CollectingEvent, CollectingEventId>;
  addCollectingEventID_CollectingEvents!: Sequelize.BelongsToManyAddAssociationsMixin<CollectingEvent, CollectingEventId>;
  createCollectingEventID_CollectingEvent!: Sequelize.BelongsToManyCreateAssociationMixin<CollectingEvent>;
  removeCollectingEventID_CollectingEvent!: Sequelize.BelongsToManyRemoveAssociationMixin<CollectingEvent, CollectingEventId>;
  removeCollectingEventID_CollectingEvents!: Sequelize.BelongsToManyRemoveAssociationsMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEventID_CollectingEvent!: Sequelize.BelongsToManyHasAssociationMixin<CollectingEvent, CollectingEventId>;
  hasCollectingEventID_CollectingEvents!: Sequelize.BelongsToManyHasAssociationsMixin<CollectingEvent, CollectingEventId>;
  countCollectingEventID_CollectingEvents!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Agent hasMany Collectors via AgentID
  Collectors!: Collectors[];
  getCollectors!: Sequelize.HasManyGetAssociationsMixin<Collectors>;
  setCollectors!: Sequelize.HasManySetAssociationsMixin<Collectors, CollectorsId>;
  addCollector!: Sequelize.HasManyAddAssociationMixin<Collectors, CollectorsId>;
  addCollectors!: Sequelize.HasManyAddAssociationsMixin<Collectors, CollectorsId>;
  createCollector!: Sequelize.HasManyCreateAssociationMixin<Collectors>;
  removeCollector!: Sequelize.HasManyRemoveAssociationMixin<Collectors, CollectorsId>;
  removeCollectors!: Sequelize.HasManyRemoveAssociationsMixin<Collectors, CollectorsId>;
  hasCollector!: Sequelize.HasManyHasAssociationMixin<Collectors, CollectorsId>;
  hasCollectors!: Sequelize.HasManyHasAssociationsMixin<Collectors, CollectorsId>;
  countCollectors!: Sequelize.HasManyCountAssociationsMixin;
  // Agent hasMany SpecimenDetLabels via Determiner
  SpecimenDetLabels!: SpecimenDetLabels[];
  getSpecimenDetLabels!: Sequelize.HasManyGetAssociationsMixin<SpecimenDetLabels>;
  setSpecimenDetLabels!: Sequelize.HasManySetAssociationsMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  addSpecimenDetLabel!: Sequelize.HasManyAddAssociationMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  addSpecimenDetLabels!: Sequelize.HasManyAddAssociationsMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  createSpecimenDetLabel!: Sequelize.HasManyCreateAssociationMixin<SpecimenDetLabels>;
  removeSpecimenDetLabel!: Sequelize.HasManyRemoveAssociationMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  removeSpecimenDetLabels!: Sequelize.HasManyRemoveAssociationsMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  hasSpecimenDetLabel!: Sequelize.HasManyHasAssociationMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  hasSpecimenDetLabels!: Sequelize.HasManyHasAssociationsMixin<SpecimenDetLabels, SpecimenDetLabelsId>;
  countSpecimenDetLabels!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Agent {
    return Agent.init({
    AgentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GUID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MiddleInitial: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(50),
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
      allowNull: false
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    ModifiedByID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Agent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Agent$PrimaryKey",
        unique: true,
        fields: [
          { name: "AgentID" },
        ]
      },
    ]
  });
  }
}
