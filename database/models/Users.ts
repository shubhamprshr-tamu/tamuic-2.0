import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CollectingEvent, CollectingEventId } from './CollectingEvent';
import type { Geography, GeographyId } from './Geography';
import type { Locality, LocalityId } from './Locality';
import type { Specimen, SpecimenId } from './Specimen';
import type { SpecimenAttributes, SpecimenAttributesId } from './SpecimenAttributes';
import type { SpecimenBioAttributes, SpecimenBioAttributesId } from './SpecimenBioAttributes';

export interface UsersAttributes {
  UserID: number;
  Name?: string;
  Password?: string;
  Active: boolean;
  AgentID?: number;
  DateTimeStamp: Date;
  Roles?: string;
  UseAutofill: boolean;
}

export type UsersPk = "UserID";
export type UsersId = Users[UsersPk];
export type UsersOptionalAttributes = "UserID" | "Name" | "Password" | "Active" | "AgentID" | "DateTimeStamp" | "Roles" | "UseAutofill";
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>;

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  UserID!: number;
  Name?: string;
  Password?: string;
  Active!: boolean;
  AgentID?: number;
  DateTimeStamp!: Date;
  Roles?: string;
  UseAutofill!: boolean;

  // Users hasMany CollectingEvent via CreatedByID
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
  // Users hasMany CollectingEvent via ModifiedByID
  ModifiedBy_CollectingEvents!: CollectingEvent[];
  getModifiedBy_CollectingEvents!: Sequelize.HasManyGetAssociationsMixin<CollectingEvent>;
  setModifiedBy_CollectingEvents!: Sequelize.HasManySetAssociationsMixin<CollectingEvent, CollectingEventId>;
  addModifiedBy_CollectingEvent!: Sequelize.HasManyAddAssociationMixin<CollectingEvent, CollectingEventId>;
  addModifiedBy_CollectingEvents!: Sequelize.HasManyAddAssociationsMixin<CollectingEvent, CollectingEventId>;
  createModifiedBy_CollectingEvent!: Sequelize.HasManyCreateAssociationMixin<CollectingEvent>;
  removeModifiedBy_CollectingEvent!: Sequelize.HasManyRemoveAssociationMixin<CollectingEvent, CollectingEventId>;
  removeModifiedBy_CollectingEvents!: Sequelize.HasManyRemoveAssociationsMixin<CollectingEvent, CollectingEventId>;
  hasModifiedBy_CollectingEvent!: Sequelize.HasManyHasAssociationMixin<CollectingEvent, CollectingEventId>;
  hasModifiedBy_CollectingEvents!: Sequelize.HasManyHasAssociationsMixin<CollectingEvent, CollectingEventId>;
  countModifiedBy_CollectingEvents!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany CollectingEvent via PEFTaggedBy
  PEFTaggedBy_CollectingEvents!: CollectingEvent[];
  getPEFTaggedBy_CollectingEvents!: Sequelize.HasManyGetAssociationsMixin<CollectingEvent>;
  setPEFTaggedBy_CollectingEvents!: Sequelize.HasManySetAssociationsMixin<CollectingEvent, CollectingEventId>;
  addPEFTaggedBy_CollectingEvent!: Sequelize.HasManyAddAssociationMixin<CollectingEvent, CollectingEventId>;
  addPEFTaggedBy_CollectingEvents!: Sequelize.HasManyAddAssociationsMixin<CollectingEvent, CollectingEventId>;
  createPEFTaggedBy_CollectingEvent!: Sequelize.HasManyCreateAssociationMixin<CollectingEvent>;
  removePEFTaggedBy_CollectingEvent!: Sequelize.HasManyRemoveAssociationMixin<CollectingEvent, CollectingEventId>;
  removePEFTaggedBy_CollectingEvents!: Sequelize.HasManyRemoveAssociationsMixin<CollectingEvent, CollectingEventId>;
  hasPEFTaggedBy_CollectingEvent!: Sequelize.HasManyHasAssociationMixin<CollectingEvent, CollectingEventId>;
  hasPEFTaggedBy_CollectingEvents!: Sequelize.HasManyHasAssociationsMixin<CollectingEvent, CollectingEventId>;
  countPEFTaggedBy_CollectingEvents!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Geography via CreatedByID
  Geographies!: Geography[];
  getGeographies!: Sequelize.HasManyGetAssociationsMixin<Geography>;
  setGeographies!: Sequelize.HasManySetAssociationsMixin<Geography, GeographyId>;
  addGeography!: Sequelize.HasManyAddAssociationMixin<Geography, GeographyId>;
  addGeographies!: Sequelize.HasManyAddAssociationsMixin<Geography, GeographyId>;
  createGeography!: Sequelize.HasManyCreateAssociationMixin<Geography>;
  removeGeography!: Sequelize.HasManyRemoveAssociationMixin<Geography, GeographyId>;
  removeGeographies!: Sequelize.HasManyRemoveAssociationsMixin<Geography, GeographyId>;
  hasGeography!: Sequelize.HasManyHasAssociationMixin<Geography, GeographyId>;
  hasGeographies!: Sequelize.HasManyHasAssociationsMixin<Geography, GeographyId>;
  countGeographies!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Geography via ModifiedByID
  ModifiedBy_Geographies!: Geography[];
  getModifiedBy_Geographies!: Sequelize.HasManyGetAssociationsMixin<Geography>;
  setModifiedBy_Geographies!: Sequelize.HasManySetAssociationsMixin<Geography, GeographyId>;
  addModifiedBy_Geography!: Sequelize.HasManyAddAssociationMixin<Geography, GeographyId>;
  addModifiedBy_Geographies!: Sequelize.HasManyAddAssociationsMixin<Geography, GeographyId>;
  createModifiedBy_Geography!: Sequelize.HasManyCreateAssociationMixin<Geography>;
  removeModifiedBy_Geography!: Sequelize.HasManyRemoveAssociationMixin<Geography, GeographyId>;
  removeModifiedBy_Geographies!: Sequelize.HasManyRemoveAssociationsMixin<Geography, GeographyId>;
  hasModifiedBy_Geography!: Sequelize.HasManyHasAssociationMixin<Geography, GeographyId>;
  hasModifiedBy_Geographies!: Sequelize.HasManyHasAssociationsMixin<Geography, GeographyId>;
  countModifiedBy_Geographies!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Locality via PEFTaggedBy
  Localities!: Locality[];
  getLocalities!: Sequelize.HasManyGetAssociationsMixin<Locality>;
  setLocalities!: Sequelize.HasManySetAssociationsMixin<Locality, LocalityId>;
  addLocality!: Sequelize.HasManyAddAssociationMixin<Locality, LocalityId>;
  addLocalities!: Sequelize.HasManyAddAssociationsMixin<Locality, LocalityId>;
  createLocality!: Sequelize.HasManyCreateAssociationMixin<Locality>;
  removeLocality!: Sequelize.HasManyRemoveAssociationMixin<Locality, LocalityId>;
  removeLocalities!: Sequelize.HasManyRemoveAssociationsMixin<Locality, LocalityId>;
  hasLocality!: Sequelize.HasManyHasAssociationMixin<Locality, LocalityId>;
  hasLocalities!: Sequelize.HasManyHasAssociationsMixin<Locality, LocalityId>;
  countLocalities!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Locality via CreatedByID
  CreatedBy_Localities!: Locality[];
  getCreatedBy_Localities!: Sequelize.HasManyGetAssociationsMixin<Locality>;
  setCreatedBy_Localities!: Sequelize.HasManySetAssociationsMixin<Locality, LocalityId>;
  addCreatedBy_Locality!: Sequelize.HasManyAddAssociationMixin<Locality, LocalityId>;
  addCreatedBy_Localities!: Sequelize.HasManyAddAssociationsMixin<Locality, LocalityId>;
  createCreatedBy_Locality!: Sequelize.HasManyCreateAssociationMixin<Locality>;
  removeCreatedBy_Locality!: Sequelize.HasManyRemoveAssociationMixin<Locality, LocalityId>;
  removeCreatedBy_Localities!: Sequelize.HasManyRemoveAssociationsMixin<Locality, LocalityId>;
  hasCreatedBy_Locality!: Sequelize.HasManyHasAssociationMixin<Locality, LocalityId>;
  hasCreatedBy_Localities!: Sequelize.HasManyHasAssociationsMixin<Locality, LocalityId>;
  countCreatedBy_Localities!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Locality via ModifiedByID
  ModifiedBy_Localities!: Locality[];
  getModifiedBy_Localities!: Sequelize.HasManyGetAssociationsMixin<Locality>;
  setModifiedBy_Localities!: Sequelize.HasManySetAssociationsMixin<Locality, LocalityId>;
  addModifiedBy_Locality!: Sequelize.HasManyAddAssociationMixin<Locality, LocalityId>;
  addModifiedBy_Localities!: Sequelize.HasManyAddAssociationsMixin<Locality, LocalityId>;
  createModifiedBy_Locality!: Sequelize.HasManyCreateAssociationMixin<Locality>;
  removeModifiedBy_Locality!: Sequelize.HasManyRemoveAssociationMixin<Locality, LocalityId>;
  removeModifiedBy_Localities!: Sequelize.HasManyRemoveAssociationsMixin<Locality, LocalityId>;
  hasModifiedBy_Locality!: Sequelize.HasManyHasAssociationMixin<Locality, LocalityId>;
  hasModifiedBy_Localities!: Sequelize.HasManyHasAssociationsMixin<Locality, LocalityId>;
  countModifiedBy_Localities!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Specimen via ModifiedByID
  Specimens!: Specimen[];
  getSpecimens!: Sequelize.HasManyGetAssociationsMixin<Specimen>;
  setSpecimens!: Sequelize.HasManySetAssociationsMixin<Specimen, SpecimenId>;
  addSpecimen!: Sequelize.HasManyAddAssociationMixin<Specimen, SpecimenId>;
  addSpecimens!: Sequelize.HasManyAddAssociationsMixin<Specimen, SpecimenId>;
  createSpecimen!: Sequelize.HasManyCreateAssociationMixin<Specimen>;
  removeSpecimen!: Sequelize.HasManyRemoveAssociationMixin<Specimen, SpecimenId>;
  removeSpecimens!: Sequelize.HasManyRemoveAssociationsMixin<Specimen, SpecimenId>;
  hasSpecimen!: Sequelize.HasManyHasAssociationMixin<Specimen, SpecimenId>;
  hasSpecimens!: Sequelize.HasManyHasAssociationsMixin<Specimen, SpecimenId>;
  countSpecimens!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany Specimen via CreatedByID
  CreatedBy_Specimens!: Specimen[];
  getCreatedBy_Specimens!: Sequelize.HasManyGetAssociationsMixin<Specimen>;
  setCreatedBy_Specimens!: Sequelize.HasManySetAssociationsMixin<Specimen, SpecimenId>;
  addCreatedBy_Specimen!: Sequelize.HasManyAddAssociationMixin<Specimen, SpecimenId>;
  addCreatedBy_Specimens!: Sequelize.HasManyAddAssociationsMixin<Specimen, SpecimenId>;
  createCreatedBy_Specimen!: Sequelize.HasManyCreateAssociationMixin<Specimen>;
  removeCreatedBy_Specimen!: Sequelize.HasManyRemoveAssociationMixin<Specimen, SpecimenId>;
  removeCreatedBy_Specimens!: Sequelize.HasManyRemoveAssociationsMixin<Specimen, SpecimenId>;
  hasCreatedBy_Specimen!: Sequelize.HasManyHasAssociationMixin<Specimen, SpecimenId>;
  hasCreatedBy_Specimens!: Sequelize.HasManyHasAssociationsMixin<Specimen, SpecimenId>;
  countCreatedBy_Specimens!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany SpecimenAttributes via ModifiedByID
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
  // Users hasMany SpecimenAttributes via CreatedByID
  CreatedBy_SpecimenAttributes!: SpecimenAttributes[];
  getCreatedBy_SpecimenAttributes!: Sequelize.HasManyGetAssociationsMixin<SpecimenAttributes>;
  setCreatedBy_SpecimenAttributes!: Sequelize.HasManySetAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  addCreatedBy_SpecimenAttribute!: Sequelize.HasManyAddAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  addCreatedBy_SpecimenAttributes!: Sequelize.HasManyAddAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  createCreatedBy_SpecimenAttribute!: Sequelize.HasManyCreateAssociationMixin<SpecimenAttributes>;
  removeCreatedBy_SpecimenAttribute!: Sequelize.HasManyRemoveAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  removeCreatedBy_SpecimenAttributes!: Sequelize.HasManyRemoveAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  hasCreatedBy_SpecimenAttribute!: Sequelize.HasManyHasAssociationMixin<SpecimenAttributes, SpecimenAttributesId>;
  hasCreatedBy_SpecimenAttributes!: Sequelize.HasManyHasAssociationsMixin<SpecimenAttributes, SpecimenAttributesId>;
  countCreatedBy_SpecimenAttributes!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany SpecimenBioAttributes via ModifiedByID
  SpecimenBioAttributes!: SpecimenBioAttributes[];
  getSpecimenBioAttributes!: Sequelize.HasManyGetAssociationsMixin<SpecimenBioAttributes>;
  setSpecimenBioAttributes!: Sequelize.HasManySetAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  addSpecimenBioAttribute!: Sequelize.HasManyAddAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  addSpecimenBioAttributes!: Sequelize.HasManyAddAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  createSpecimenBioAttribute!: Sequelize.HasManyCreateAssociationMixin<SpecimenBioAttributes>;
  removeSpecimenBioAttribute!: Sequelize.HasManyRemoveAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  removeSpecimenBioAttributes!: Sequelize.HasManyRemoveAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  hasSpecimenBioAttribute!: Sequelize.HasManyHasAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  hasSpecimenBioAttributes!: Sequelize.HasManyHasAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  countSpecimenBioAttributes!: Sequelize.HasManyCountAssociationsMixin;
  // Users hasMany SpecimenBioAttributes via CreatedByID
  CreatedBy_SpecimenBioAttributes!: SpecimenBioAttributes[];
  getCreatedBy_SpecimenBioAttributes!: Sequelize.HasManyGetAssociationsMixin<SpecimenBioAttributes>;
  setCreatedBy_SpecimenBioAttributes!: Sequelize.HasManySetAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  addCreatedBy_SpecimenBioAttribute!: Sequelize.HasManyAddAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  addCreatedBy_SpecimenBioAttributes!: Sequelize.HasManyAddAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  createCreatedBy_SpecimenBioAttribute!: Sequelize.HasManyCreateAssociationMixin<SpecimenBioAttributes>;
  removeCreatedBy_SpecimenBioAttribute!: Sequelize.HasManyRemoveAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  removeCreatedBy_SpecimenBioAttributes!: Sequelize.HasManyRemoveAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  hasCreatedBy_SpecimenBioAttribute!: Sequelize.HasManyHasAssociationMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  hasCreatedBy_SpecimenBioAttributes!: Sequelize.HasManyHasAssociationsMixin<SpecimenBioAttributes, SpecimenBioAttributesId>;
  countCreatedBy_SpecimenBioAttributes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init({
    UserID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    AgentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DateTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    Roles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UseAutofill: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Users",
        unique: true,
        fields: [
          { name: "UserID" },
        ]
      },
    ]
  });
  }
}
