import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Agent, AgentId } from './Agent';
import type { CollectingMethods, CollectingMethodsId } from './CollectingMethods';
import type { Collectors, CollectorsId } from './Collectors';
import type { Locality, LocalityId } from './Locality';
import type { Users, UsersId } from './Users';

export interface CollectingEventAttributes {
  CollectingEventID: number;
  GUID: string;
  LocalityID: number;
  StartDateMonth?: number;
  StartDateDay?: number;
  StartDateYear?: number;
  EndDateMonth?: number;
  EndDateDay?: number;
  EndDateYear?: number;
  MethodID?: number;
  HabitatInfoVerbatim?: string;
  CheckUpdate?: string;
  EventRemarks?: string;
  CollectorsCode?: string;
  MiscCode?: string;
  PossibleErrorFlag: boolean;
  PossibleErrorReason?: string;
  PEFTaggedBy?: number;
  JohnsonLotCode?: string;
  Label1?: string;
  Label2?: string;
  Blocked: boolean;
  BlockReason?: string;
  CreatedDate: Date;
  CreatedByID: number;
  ModifiedDate: Date;
  ModifiedByID: number;
}

export type CollectingEventPk = "CollectingEventID";
export type CollectingEventId = CollectingEvent[CollectingEventPk];
export type CollectingEventOptionalAttributes = "CollectingEventID" | "GUID" | "StartDateMonth" | "StartDateDay" | "StartDateYear" | "EndDateMonth" | "EndDateDay" | "EndDateYear" | "MethodID" | "HabitatInfoVerbatim" | "CheckUpdate" | "EventRemarks" | "CollectorsCode" | "MiscCode" | "PossibleErrorFlag" | "PossibleErrorReason" | "PEFTaggedBy" | "JohnsonLotCode" | "Label1" | "Label2" | "Blocked" | "BlockReason" | "CreatedDate" | "ModifiedDate";
export type CollectingEventCreationAttributes = Optional<CollectingEventAttributes, CollectingEventOptionalAttributes>;

export class CollectingEvent extends Model<CollectingEventAttributes, CollectingEventCreationAttributes> implements CollectingEventAttributes {
  CollectingEventID!: number;
  GUID!: string;
  LocalityID!: number;
  StartDateMonth?: number;
  StartDateDay?: number;
  StartDateYear?: number;
  EndDateMonth?: number;
  EndDateDay?: number;
  EndDateYear?: number;
  MethodID?: number;
  HabitatInfoVerbatim?: string;
  CheckUpdate?: string;
  EventRemarks?: string;
  CollectorsCode?: string;
  MiscCode?: string;
  PossibleErrorFlag!: boolean;
  PossibleErrorReason?: string;
  PEFTaggedBy?: number;
  JohnsonLotCode?: string;
  Label1?: string;
  Label2?: string;
  Blocked!: boolean;
  BlockReason?: string;
  CreatedDate!: Date;
  CreatedByID!: number;
  ModifiedDate!: Date;
  ModifiedByID!: number;

  // CollectingEvent belongsToMany Agent via CollectingEventID and AgentID
  AgentID_Agents!: Agent[];
  getAgentID_Agents!: Sequelize.BelongsToManyGetAssociationsMixin<Agent>;
  setAgentID_Agents!: Sequelize.BelongsToManySetAssociationsMixin<Agent, AgentId>;
  addAgentID_Agent!: Sequelize.BelongsToManyAddAssociationMixin<Agent, AgentId>;
  addAgentID_Agents!: Sequelize.BelongsToManyAddAssociationsMixin<Agent, AgentId>;
  createAgentID_Agent!: Sequelize.BelongsToManyCreateAssociationMixin<Agent>;
  removeAgentID_Agent!: Sequelize.BelongsToManyRemoveAssociationMixin<Agent, AgentId>;
  removeAgentID_Agents!: Sequelize.BelongsToManyRemoveAssociationsMixin<Agent, AgentId>;
  hasAgentID_Agent!: Sequelize.BelongsToManyHasAssociationMixin<Agent, AgentId>;
  hasAgentID_Agents!: Sequelize.BelongsToManyHasAssociationsMixin<Agent, AgentId>;
  countAgentID_Agents!: Sequelize.BelongsToManyCountAssociationsMixin;
  // CollectingEvent hasMany Collectors via CollectingEventID
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
  // CollectingEvent belongsTo CollectingMethods via MethodID
  Method!: CollectingMethods;
  getMethod!: Sequelize.BelongsToGetAssociationMixin<CollectingMethods>;
  setMethod!: Sequelize.BelongsToSetAssociationMixin<CollectingMethods, CollectingMethodsId>;
  createMethod!: Sequelize.BelongsToCreateAssociationMixin<CollectingMethods>;
  // CollectingEvent belongsTo Locality via LocalityID
  Locality!: Locality;
  getLocality!: Sequelize.BelongsToGetAssociationMixin<Locality>;
  setLocality!: Sequelize.BelongsToSetAssociationMixin<Locality, LocalityId>;
  createLocality!: Sequelize.BelongsToCreateAssociationMixin<Locality>;
  // CollectingEvent belongsTo Users via CreatedByID
  CreatedBy!: Users;
  getCreatedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setCreatedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createCreatedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // CollectingEvent belongsTo Users via ModifiedByID
  ModifiedBy!: Users;
  getModifiedBy!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setModifiedBy!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createModifiedBy!: Sequelize.BelongsToCreateAssociationMixin<Users>;
  // CollectingEvent belongsTo Users via PEFTaggedBy
  PEFTaggedBy_User!: Users;
  getPEFTaggedBy_User!: Sequelize.BelongsToGetAssociationMixin<Users>;
  setPEFTaggedBy_User!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>;
  createPEFTaggedBy_User!: Sequelize.BelongsToCreateAssociationMixin<Users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CollectingEvent {
    return CollectingEvent.init({
    CollectingEventID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GUID: {
      type: DataTypes.UUID,
      allowNull: false
    },
    LocalityID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Locality',
        key: 'LocalityID'
      }
    },
    StartDateMonth: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    StartDateDay: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    StartDateYear: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    EndDateMonth: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    EndDateDay: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    EndDateYear: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MethodID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CollectingMethods',
        key: 'MethodID'
      }
    },
    HabitatInfoVerbatim: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CheckUpdate: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EventRemarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CollectorsCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MiscCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PossibleErrorFlag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    PossibleErrorReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PEFTaggedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    JohnsonLotCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Label1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Label2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    BlockReason: {
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
    }
  }, {
    sequelize,
    tableName: 'CollectingEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CollectingEvent$PrimaryKey",
        unique: true,
        fields: [
          { name: "CollectingEventID" },
        ]
      },
    ]
  });
  }
}
