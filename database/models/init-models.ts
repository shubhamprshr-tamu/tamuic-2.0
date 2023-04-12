import type { Sequelize } from "sequelize";
import { Agent as _Agent } from "./Agent";
import type { AgentAttributes, AgentCreationAttributes } from "./Agent";
import { CabinetTypes as _CabinetTypes } from "./CabinetTypes";
import type { CabinetTypesAttributes, CabinetTypesCreationAttributes } from "./CabinetTypes";
import { Cabinets as _Cabinets } from "./Cabinets";
import type { CabinetsAttributes, CabinetsCreationAttributes } from "./Cabinets";
import { CollectingEvent as _CollectingEvent } from "./CollectingEvent";
import type { CollectingEventAttributes, CollectingEventCreationAttributes } from "./CollectingEvent";
import { CollectingMethods as _CollectingMethods } from "./CollectingMethods";
import type { CollectingMethodsAttributes, CollectingMethodsCreationAttributes } from "./CollectingMethods";
import { Collectors as _Collectors } from "./Collectors";
import type { CollectorsAttributes, CollectorsCreationAttributes } from "./Collectors";
import { GenusGroupTaxon as _GenusGroupTaxon } from "./GenusGroupTaxon";
import type { GenusGroupTaxonAttributes, GenusGroupTaxonCreationAttributes } from "./GenusGroupTaxon";
import { GenusLocations as _GenusLocations } from "./GenusLocations";
import type { GenusLocationsAttributes, GenusLocationsCreationAttributes } from "./GenusLocations";
import { GeoDatum as _GeoDatum } from "./GeoDatum";
import type { GeoDatumAttributes, GeoDatumCreationAttributes } from "./GeoDatum";
import { GeoProtocol as _GeoProtocol } from "./GeoProtocol";
import type { GeoProtocolAttributes, GeoProtocolCreationAttributes } from "./GeoProtocol";
import { GeoSource as _GeoSource } from "./GeoSource";
import type { GeoSourceAttributes, GeoSourceCreationAttributes } from "./GeoSource";
import { GeoVerify as _GeoVerify } from "./GeoVerify";
import type { GeoVerifyAttributes, GeoVerifyCreationAttributes } from "./GeoVerify";
import { Geography as _Geography } from "./Geography";
import type { GeographyAttributes, GeographyCreationAttributes } from "./Geography";
import { Georeference as _Georeference } from "./Georeference";
import type { GeoreferenceAttributes, GeoreferenceCreationAttributes } from "./Georeference";
import { LifeStages as _LifeStages } from "./LifeStages";
import type { LifeStagesAttributes, LifeStagesCreationAttributes } from "./LifeStages";
import { Locality as _Locality } from "./Locality";
import type { LocalityAttributes, LocalityCreationAttributes } from "./Locality";
import { MuseumCuratorSettings as _MuseumCuratorSettings } from "./MuseumCuratorSettings";
import type { MuseumCuratorSettingsAttributes, MuseumCuratorSettingsCreationAttributes } from "./MuseumCuratorSettings";
import { MuseumInfo as _MuseumInfo } from "./MuseumInfo";
import type { MuseumInfoAttributes, MuseumInfoCreationAttributes } from "./MuseumInfo";
import { PreparationAttributes as _PreparationAttributes } from "./PreparationAttributes";
import type { PreparationAttributesAttributes, PreparationAttributesCreationAttributes } from "./PreparationAttributes";
import { SpeciesGroupTaxon as _SpeciesGroupTaxon } from "./SpeciesGroupTaxon";
import type { SpeciesGroupTaxonAttributes, SpeciesGroupTaxonCreationAttributes } from "./SpeciesGroupTaxon";
import { Specimen as _Specimen } from "./Specimen";
import type { SpecimenTypeAttributes, SpecimenCreationAttributes } from "./Specimen";
import { SpecimenAttributes as _SpecimenAttributes } from "./SpecimenAttributes";
import type { SpecimenAttributesAttributes, SpecimenAttributesCreationAttributes } from "./SpecimenAttributes";
import { SpecimenBioAttributes as _SpecimenBioAttributes } from "./SpecimenBioAttributes";
import type { SpecimenBioAttributesAttributes, SpecimenBioAttributesCreationAttributes } from "./SpecimenBioAttributes";
import { SpecimenDetLabels as _SpecimenDetLabels } from "./SpecimenDetLabels";
import type { SpecimenDetLabelsAttributes, SpecimenDetLabelsCreationAttributes } from "./SpecimenDetLabels";
import { SpecimenMiscCodes as _SpecimenMiscCodes } from "./SpecimenMiscCodes";
import type { SpecimenMiscCodesAttributes, SpecimenMiscCodesCreationAttributes } from "./SpecimenMiscCodes";
import { SpecimenTest as _SpecimenTest } from "./SpecimenTest";
import type { SpecimenTestAttributes, SpecimenTestCreationAttributes } from "./SpecimenTest";
import { Table_1 as _Table_1 } from "./Table_1";
import type { Table_1Attributes, Table_1CreationAttributes } from "./Table_1";
import { TaxonCombos as _TaxonCombos } from "./TaxonCombos";
import type { TaxonCombosAttributes, TaxonCombosCreationAttributes } from "./TaxonCombos";
import { TaxonLevel as _TaxonLevel } from "./TaxonLevel";
import type { TaxonLevelAttributes, TaxonLevelCreationAttributes } from "./TaxonLevel";
import { TaxonName as _TaxonName } from "./TaxonName";
import type { TaxonNameAttributes, TaxonNameCreationAttributes } from "./TaxonName";
import { TaxonNameTemp as _TaxonNameTemp } from "./TaxonNameTemp";
import type { TaxonNameTempAttributes, TaxonNameTempCreationAttributes } from "./TaxonNameTemp";
import { TypeAttributes as _TypeAttributes } from "./TypeAttributes";
import type { TypeAttributesAttributes, TypeAttributesCreationAttributes } from "./TypeAttributes";
import { TypeInfo as _TypeInfo } from "./TypeInfo";
import type { TypeInfoAttributes, TypeInfoCreationAttributes } from "./TypeInfo";
import { Users as _Users } from "./Users";
import type { UsersAttributes, UsersCreationAttributes } from "./Users";
import { WebLog as _WebLog } from "./WebLog";
import type { WebLogAttributes, WebLogCreationAttributes } from "./WebLog";
import { WorkingCombinations as _WorkingCombinations } from "./WorkingCombinations";
import type { WorkingCombinationsAttributes, WorkingCombinationsCreationAttributes } from "./WorkingCombinations";
import { qryBuilder_Columns as _qryBuilder_Columns } from "./qryBuilder_Columns";
import type { qryBuilder_ColumnsAttributes, qryBuilder_ColumnsCreationAttributes } from "./qryBuilder_Columns";
import { qryBuilder_Filters as _qryBuilder_Filters } from "./qryBuilder_Filters";
import type { qryBuilder_FiltersAttributes, qryBuilder_FiltersCreationAttributes } from "./qryBuilder_Filters";
import { qryBuilder_Queries as _qryBuilder_Queries } from "./qryBuilder_Queries";
import type { qryBuilder_QueriesAttributes, qryBuilder_QueriesCreationAttributes } from "./qryBuilder_Queries";
import { qryBuilder_Relations as _qryBuilder_Relations } from "./qryBuilder_Relations";
import type { qryBuilder_RelationsAttributes, qryBuilder_RelationsCreationAttributes } from "./qryBuilder_Relations";

export {
  _Agent as Agent,
  _CabinetTypes as CabinetTypes,
  _Cabinets as Cabinets,
  _CollectingEvent as CollectingEvent,
  _CollectingMethods as CollectingMethods,
  _Collectors as Collectors,
  _GenusGroupTaxon as GenusGroupTaxon,
  _GenusLocations as GenusLocations,
  _GeoDatum as GeoDatum,
  _GeoProtocol as GeoProtocol,
  _GeoSource as GeoSource,
  _GeoVerify as GeoVerify,
  _Geography as Geography,
  _Georeference as Georeference,
  _LifeStages as LifeStages,
  _Locality as Locality,
  _MuseumCuratorSettings as MuseumCuratorSettings,
  _MuseumInfo as MuseumInfo,
  _PreparationAttributes as PreparationAttributes,
  _SpeciesGroupTaxon as SpeciesGroupTaxon,
  _Specimen as Specimen,
  _SpecimenAttributes as SpecimenAttributes,
  _SpecimenBioAttributes as SpecimenBioAttributes,
  _SpecimenDetLabels as SpecimenDetLabels,
  _SpecimenMiscCodes as SpecimenMiscCodes,
  _SpecimenTest as SpecimenTest,
  _Table_1 as Table_1,
  _TaxonCombos as TaxonCombos,
  _TaxonLevel as TaxonLevel,
  _TaxonName as TaxonName,
  _TaxonNameTemp as TaxonNameTemp,
  _TypeAttributes as TypeAttributes,
  _TypeInfo as TypeInfo,
  _Users as Users,
  _WebLog as WebLog,
  _WorkingCombinations as WorkingCombinations,
  _qryBuilder_Columns as qryBuilder_Columns,
  _qryBuilder_Filters as qryBuilder_Filters,
  _qryBuilder_Queries as qryBuilder_Queries,
  _qryBuilder_Relations as qryBuilder_Relations,
};

export type {
  AgentAttributes,
  AgentCreationAttributes,
  CabinetTypesAttributes,
  CabinetTypesCreationAttributes,
  CabinetsAttributes,
  CabinetsCreationAttributes,
  CollectingEventAttributes,
  CollectingEventCreationAttributes,
  CollectingMethodsAttributes,
  CollectingMethodsCreationAttributes,
  CollectorsAttributes,
  CollectorsCreationAttributes,
  GenusGroupTaxonAttributes,
  GenusGroupTaxonCreationAttributes,
  GenusLocationsAttributes,
  GenusLocationsCreationAttributes,
  GeoDatumAttributes,
  GeoDatumCreationAttributes,
  GeoProtocolAttributes,
  GeoProtocolCreationAttributes,
  GeoSourceAttributes,
  GeoSourceCreationAttributes,
  GeoVerifyAttributes,
  GeoVerifyCreationAttributes,
  GeographyAttributes,
  GeographyCreationAttributes,
  GeoreferenceAttributes,
  GeoreferenceCreationAttributes,
  LifeStagesAttributes,
  LifeStagesCreationAttributes,
  LocalityAttributes,
  LocalityCreationAttributes,
  MuseumCuratorSettingsAttributes,
  MuseumCuratorSettingsCreationAttributes,
  MuseumInfoAttributes,
  MuseumInfoCreationAttributes,
  PreparationAttributesAttributes,
  PreparationAttributesCreationAttributes,
  SpeciesGroupTaxonAttributes,
  SpeciesGroupTaxonCreationAttributes,
  SpecimenTypeAttributes,
  SpecimenCreationAttributes,
  SpecimenAttributesAttributes,
  SpecimenAttributesCreationAttributes,
  SpecimenBioAttributesAttributes,
  SpecimenBioAttributesCreationAttributes,
  SpecimenDetLabelsAttributes,
  SpecimenDetLabelsCreationAttributes,
  SpecimenMiscCodesAttributes,
  SpecimenMiscCodesCreationAttributes,
  SpecimenTestAttributes,
  SpecimenTestCreationAttributes,
  Table_1Attributes,
  Table_1CreationAttributes,
  TaxonCombosAttributes,
  TaxonCombosCreationAttributes,
  TaxonLevelAttributes,
  TaxonLevelCreationAttributes,
  TaxonNameAttributes,
  TaxonNameCreationAttributes,
  TaxonNameTempAttributes,
  TaxonNameTempCreationAttributes,
  TypeAttributesAttributes,
  TypeAttributesCreationAttributes,
  TypeInfoAttributes,
  TypeInfoCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
  WebLogAttributes,
  WebLogCreationAttributes,
  WorkingCombinationsAttributes,
  WorkingCombinationsCreationAttributes,
  qryBuilder_ColumnsAttributes,
  qryBuilder_ColumnsCreationAttributes,
  qryBuilder_FiltersAttributes,
  qryBuilder_FiltersCreationAttributes,
  qryBuilder_QueriesAttributes,
  qryBuilder_QueriesCreationAttributes,
  qryBuilder_RelationsAttributes,
  qryBuilder_RelationsCreationAttributes,
};



export function initModels(sequelize: Sequelize) {
  const Agent = _Agent.initModel(sequelize);
  const CabinetTypes = _CabinetTypes.initModel(sequelize);
  const Cabinets = _Cabinets.initModel(sequelize);
  const CollectingEvent = _CollectingEvent.initModel(sequelize);
  const CollectingMethods = _CollectingMethods.initModel(sequelize);
  const Collectors = _Collectors.initModel(sequelize);
  const GenusGroupTaxon = _GenusGroupTaxon.initModel(sequelize);
  const GenusLocations = _GenusLocations.initModel(sequelize);
  const GeoDatum = _GeoDatum.initModel(sequelize);
  const GeoProtocol = _GeoProtocol.initModel(sequelize);
  const GeoSource = _GeoSource.initModel(sequelize);
  const GeoVerify = _GeoVerify.initModel(sequelize);
  const Geography = _Geography.initModel(sequelize);
  const Georeference = _Georeference.initModel(sequelize);
  const LifeStages = _LifeStages.initModel(sequelize);
  const Locality = _Locality.initModel(sequelize);
  const MuseumCuratorSettings = _MuseumCuratorSettings.initModel(sequelize);
  const MuseumInfo = _MuseumInfo.initModel(sequelize);
  const PreparationAttributes = _PreparationAttributes.initModel(sequelize);
  const SpeciesGroupTaxon = _SpeciesGroupTaxon.initModel(sequelize);
  const Specimen = _Specimen.initModel(sequelize);
  const SpecimenAttributes = _SpecimenAttributes.initModel(sequelize);
  const SpecimenBioAttributes = _SpecimenBioAttributes.initModel(sequelize);
  const SpecimenDetLabels = _SpecimenDetLabels.initModel(sequelize);
  const SpecimenMiscCodes = _SpecimenMiscCodes.initModel(sequelize);
  const SpecimenTest = _SpecimenTest.initModel(sequelize);
  const Table_1 = _Table_1.initModel(sequelize);
  const TaxonCombos = _TaxonCombos.initModel(sequelize);
  const TaxonLevel = _TaxonLevel.initModel(sequelize);
  const TaxonName = _TaxonName.initModel(sequelize);
  const TaxonNameTemp = _TaxonNameTemp.initModel(sequelize);
  const TypeAttributes = _TypeAttributes.initModel(sequelize);
  const TypeInfo = _TypeInfo.initModel(sequelize);
  const Users = _Users.initModel(sequelize);
  const WebLog = _WebLog.initModel(sequelize);
  const WorkingCombinations = _WorkingCombinations.initModel(sequelize);
  const qryBuilder_Columns = _qryBuilder_Columns.initModel(sequelize);
  const qryBuilder_Filters = _qryBuilder_Filters.initModel(sequelize);
  const qryBuilder_Queries = _qryBuilder_Queries.initModel(sequelize);
  const qryBuilder_Relations = _qryBuilder_Relations.initModel(sequelize);

  Agent.belongsToMany(CollectingEvent, { as: 'CollectingEventID_CollectingEvents', through: Collectors, foreignKey: "AgentID", otherKey: "CollectingEventID" });
  CollectingEvent.belongsToMany(Agent, { as: 'AgentID_Agents', through: Collectors, foreignKey: "CollectingEventID", otherKey: "AgentID" });
  Collectors.belongsTo(Agent, { as: "Agent", foreignKey: "AgentID"});
  Agent.hasMany(Collectors, { as: "Collectors", foreignKey: "AgentID"});
  SpecimenDetLabels.belongsTo(Agent, { as: "Determiner_Agent", foreignKey: "Determiner"});
  Agent.hasMany(SpecimenDetLabels, { as: "SpecimenDetLabels", foreignKey: "Determiner"});
  Collectors.belongsTo(CollectingEvent, { as: "CollectingEvent", foreignKey: "CollectingEventID"});
  CollectingEvent.hasMany(Collectors, { as: "Collectors", foreignKey: "CollectingEventID"});
  CollectingEvent.belongsTo(CollectingMethods, { as: "Method", foreignKey: "MethodID"});
  CollectingMethods.hasMany(CollectingEvent, { as: "CollectingEvents", foreignKey: "MethodID"});
  GenusLocations.belongsTo(GenusGroupTaxon, { as: "GenusGroupName", foreignKey: "GenusGroupNameID"});
  GenusGroupTaxon.hasMany(GenusLocations, { as: "GenusLocations", foreignKey: "GenusGroupNameID"});
  TaxonCombos.belongsTo(GenusGroupTaxon, { as: "Genus", foreignKey: "GenusID"});
  GenusGroupTaxon.hasMany(TaxonCombos, { as: "TaxonCombos", foreignKey: "GenusID"});
  Georeference.belongsTo(GeoDatum, { as: "Datum", foreignKey: "DatumID"});
  GeoDatum.hasMany(Georeference, { as: "Georeferences", foreignKey: "DatumID"});
  Georeference.belongsTo(GeoProtocol, { as: "Protocol", foreignKey: "ProtocolID"});
  GeoProtocol.hasMany(Georeference, { as: "Georeferences", foreignKey: "ProtocolID"});
  Georeference.belongsTo(GeoSource, { as: "Source", foreignKey: "SourceID"});
  GeoSource.hasMany(Georeference, { as: "Georeferences", foreignKey: "SourceID"});
  Locality.belongsTo(GeoVerify, { as: "GeoVerStatus_GeoVerify", foreignKey: "GeoVerStatus"});
  GeoVerify.hasMany(Locality, { as: "Localities", foreignKey: "GeoVerStatus"});
  CollectingEvent.belongsTo(Locality, { as: "Locality", foreignKey: "LocalityID"});
  Locality.hasMany(CollectingEvent, { as: "CollectingEvents", foreignKey: "LocalityID"});
  Georeference.belongsTo(Locality, { as: "Locality", foreignKey: "LocalityID"});
  Locality.hasMany(Georeference, { as: "Georeferences", foreignKey: "LocalityID"});
  SpecimenAttributes.belongsTo(PreparationAttributes, { as: "Preparation_PreparationAttribute", foreignKey: "Preparation"});
  PreparationAttributes.hasMany(SpecimenAttributes, { as: "SpecimenAttributes", foreignKey: "Preparation"});
  TaxonCombos.belongsTo(SpeciesGroupTaxon, { as: "SubSpecy", foreignKey: "SubSpeciesID"});
  SpeciesGroupTaxon.hasMany(TaxonCombos, { as: "TaxonCombos", foreignKey: "SubSpeciesID"});
  Specimen.belongsTo(Specimen, { as: "ParentSpecimen", foreignKey: "ParentSpecimenID"});
  Specimen.hasMany(Specimen, { as: "Specimens", foreignKey: "ParentSpecimenID"});
  SpecimenBioAttributes.belongsTo(Specimen, { as: "Specimen", foreignKey: "SpecimenID"});
  Specimen.hasOne(SpecimenBioAttributes, { as: "SpecimenBioAttribute", foreignKey: "SpecimenID"});
  MuseumInfo.belongsTo(TaxonCombos, { as: "Combination", foreignKey: "CombinationID"});
  TaxonCombos.hasMany(MuseumInfo, { as: "MuseumInfos", foreignKey: "CombinationID"});
  TypeInfo.belongsTo(TaxonCombos, { as: "Combination", foreignKey: "CombinationID"});
  TaxonCombos.hasMany(TypeInfo, { as: "TypeInfos", foreignKey: "CombinationID"});
  TaxonName.belongsTo(TaxonLevel, { as: "LevelNumber_TaxonLevel", foreignKey: "LevelNumber"});
  TaxonLevel.hasMany(TaxonName, { as: "TaxonNames", foreignKey: "LevelNumber"});
  GenusGroupTaxon.belongsTo(TaxonName, { as: "HigherClass", foreignKey: "HigherClassID"});
  TaxonName.hasMany(GenusGroupTaxon, { as: "GenusGroupTaxons", foreignKey: "HigherClassID"});
  SpecimenAttributes.belongsTo(TypeAttributes, { as: "IsType_TypeAttribute", foreignKey: "IsType"});
  TypeAttributes.hasMany(SpecimenAttributes, { as: "SpecimenAttributes", foreignKey: "IsType"});
  CollectingEvent.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(CollectingEvent, { as: "CollectingEvents", foreignKey: "CreatedByID"});
  CollectingEvent.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(CollectingEvent, { as: "ModifiedBy_CollectingEvents", foreignKey: "ModifiedByID"});
  CollectingEvent.belongsTo(Users, { as: "PEFTaggedBy_User", foreignKey: "PEFTaggedBy"});
  Users.hasMany(CollectingEvent, { as: "PEFTaggedBy_CollectingEvents", foreignKey: "PEFTaggedBy"});
  Geography.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(Geography, { as: "Geographies", foreignKey: "CreatedByID"});
  Geography.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(Geography, { as: "ModifiedBy_Geographies", foreignKey: "ModifiedByID"});
  Locality.belongsTo(Users, { as: "PEFTaggedBy_User", foreignKey: "PEFTaggedBy"});
  Users.hasMany(Locality, { as: "Localities", foreignKey: "PEFTaggedBy"});
  Locality.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(Locality, { as: "CreatedBy_Localities", foreignKey: "CreatedByID"});
  Locality.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(Locality, { as: "ModifiedBy_Localities", foreignKey: "ModifiedByID"});
  Specimen.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(Specimen, { as: "Specimens", foreignKey: "ModifiedByID"});
  Specimen.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(Specimen, { as: "CreatedBy_Specimens", foreignKey: "CreatedByID"});
  SpecimenAttributes.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(SpecimenAttributes, { as: "SpecimenAttributes", foreignKey: "ModifiedByID"});
  SpecimenAttributes.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(SpecimenAttributes, { as: "CreatedBy_SpecimenAttributes", foreignKey: "CreatedByID"});
  SpecimenBioAttributes.belongsTo(Users, { as: "ModifiedBy", foreignKey: "ModifiedByID"});
  Users.hasMany(SpecimenBioAttributes, { as: "SpecimenBioAttributes", foreignKey: "ModifiedByID"});
  SpecimenBioAttributes.belongsTo(Users, { as: "CreatedBy", foreignKey: "CreatedByID"});
  Users.hasMany(SpecimenBioAttributes, { as: "CreatedBy_SpecimenBioAttributes", foreignKey: "CreatedByID"});

  return {
    Agent: Agent,
    CabinetTypes: CabinetTypes,
    Cabinets: Cabinets,
    CollectingEvent: CollectingEvent,
    CollectingMethods: CollectingMethods,
    Collectors: Collectors,
    GenusGroupTaxon: GenusGroupTaxon,
    GenusLocations: GenusLocations,
    GeoDatum: GeoDatum,
    GeoProtocol: GeoProtocol,
    GeoSource: GeoSource,
    GeoVerify: GeoVerify,
    Geography: Geography,
    Georeference: Georeference,
    LifeStages: LifeStages,
    Locality: Locality,
    MuseumCuratorSettings: MuseumCuratorSettings,
    MuseumInfo: MuseumInfo,
    PreparationAttributes: PreparationAttributes,
    SpeciesGroupTaxon: SpeciesGroupTaxon,
    Specimen: Specimen,
    SpecimenAttributes: SpecimenAttributes,
    SpecimenBioAttributes: SpecimenBioAttributes,
    SpecimenDetLabels: SpecimenDetLabels,
    SpecimenMiscCodes: SpecimenMiscCodes,
    SpecimenTest: SpecimenTest,
    Table_1: Table_1,
    TaxonCombos: TaxonCombos,
    TaxonLevel: TaxonLevel,
    TaxonName: TaxonName,
    TaxonNameTemp: TaxonNameTemp,
    TypeAttributes: TypeAttributes,
    TypeInfo: TypeInfo,
    Users: Users,
    WebLog: WebLog,
    WorkingCombinations: WorkingCombinations,
    qryBuilder_Columns: qryBuilder_Columns,
    qryBuilder_Filters: qryBuilder_Filters,
    qryBuilder_Queries: qryBuilder_Queries,
    qryBuilder_Relations: qryBuilder_Relations,
  };
}
