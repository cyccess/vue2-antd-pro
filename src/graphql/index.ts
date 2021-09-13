import gql from 'graphql-tag';
import * as Urql from '@/vue-urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  Date: any;
  LocalDateTime: any;
  Long: any;
};

export type AdminAddAssessKpiDepartmentDtoBoolExp = {
  _and?: Maybe<Array<Maybe<AdminAddAssessKpiDepartmentDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<AdminAddAssessKpiDepartmentDtoBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<StringComparisonExp>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeBoolExp>;
  modifiedTime?: Maybe<LocalDateTimeComparisonExp>;
  scoreStandard?: Maybe<StringComparisonExp>;
  weight?: Maybe<IntegerComparisonExp>;
};

export type AdminAddAssessKpiDepartmentDtoInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<Scalars['String']>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeInput>;
  modifiedTime?: Maybe<Scalars['LocalDateTime']>;
  scoreStandard?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type AdminAddAssessKpiDepartmentDtoOrderBy = {
  createTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<OrderBy>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeOrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  scoreStandard?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type BaseStaffBasicInfoInput = {
  birthPlace?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['LocalDateTime']>;
  companyId?: Maybe<Scalars['Long']>;
  deptId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<JobInput>>;
  joinDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  politicalStatus?: Maybe<Scalars['Int']>;
  primaryDegree?: Maybe<Scalars['Int']>;
  staffNo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type BaseStaffBoolExpInput = {
  _and?: Maybe<Array<BaseStaffBoolExpInput>>;
  _or?: Maybe<Array<BaseStaffBoolExpInput>>;
  actRetireDate?: Maybe<LocalDateTimeComparisonExpInput>;
  birthPlace?: Maybe<StringComparisonExpInput>;
  birthday?: Maybe<LocalDateTimeComparisonExpInput>;
  company?: Maybe<CompanyBoolExpInput>;
  contactAddr?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  department?: Maybe<DepartmentBoolExpInput>;
  educationHis?: Maybe<StaffEducationHisBoolExpInput>;
  email?: Maybe<StringComparisonExpInput>;
  emergencyContact?: Maybe<StringComparisonExpInput>;
  familyMembers?: Maybe<StaffFamilyMemberBoolExpInput>;
  gender?: Maybe<IntegerComparisonExpInput>;
  groups?: Maybe<GroupBoolExpInput>;
  houseRegister?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  idCard?: Maybe<StringComparisonExpInput>;
  jobHis?: Maybe<StaffJobHisBoolExpInput>;
  jobRankType?: Maybe<LongComparisonExpInput>;
  jobs?: Maybe<JobBoolExpInput>;
  joinChannel?: Maybe<IntegerComparisonExpInput>;
  joinDate?: Maybe<LocalDateTimeComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  phone?: Maybe<StringComparisonExpInput>;
  politicalStatus?: Maybe<IntegerComparisonExpInput>;
  positionCertifications?: Maybe<StaffPositionCertificationBoolExpInput>;
  primaryDegree?: Maybe<IntegerComparisonExpInput>;
  primaryTitle?: Maybe<IntegerComparisonExpInput>;
  probationActEndDate?: Maybe<LocalDateTimeComparisonExpInput>;
  probationEndDate?: Maybe<LocalDateTimeComparisonExpInput>;
  probationStartDate?: Maybe<LocalDateTimeComparisonExpInput>;
  registerAddress?: Maybe<StringComparisonExpInput>;
  registrationType?: Maybe<IntegerComparisonExpInput>;
  retireDate?: Maybe<LocalDateTimeComparisonExpInput>;
  staffNo?: Maybe<StringComparisonExpInput>;
  staffParty?: Maybe<StaffPartyBoolExpInput>;
  startWorkDate?: Maybe<LocalDateTimeComparisonExpInput>;
  status?: Maybe<IntegerComparisonExpInput>;
  usedName?: Maybe<StringComparisonExpInput>;
  user?: Maybe<UserBoolExpInput>;
  userNameSpellingHead?: Maybe<StringComparisonExpInput>;
};

export type BaseStaffInput = {
  actRetireDate?: Maybe<Scalars['LocalDateTime']>;
  birthPlace?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['LocalDateTime']>;
  company?: Maybe<CompanyInput>;
  contactAddr?: Maybe<Scalars['String']>;
  department?: Maybe<DepartmentInput>;
  educationHis?: Maybe<Array<StaffEducationHisInput>>;
  email?: Maybe<Scalars['String']>;
  emergencyContact?: Maybe<Scalars['String']>;
  familyMembers?: Maybe<Array<StaffFamilyMemberInput>>;
  gender?: Maybe<Scalars['Int']>;
  groups?: Maybe<Array<GroupInput>>;
  houseRegister?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  jobHis?: Maybe<Array<StaffJobHisInput>>;
  jobRankLevel?: Maybe<Scalars['Int']>;
  jobRankType?: Maybe<Scalars['Long']>;
  jobs?: Maybe<Array<JobInput>>;
  joinChannel?: Maybe<Scalars['Int']>;
  joinDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  politicalStatus?: Maybe<Scalars['Int']>;
  positionCertifications?: Maybe<Array<StaffPositionCertificationInput>>;
  primaryDegree?: Maybe<Scalars['Int']>;
  primaryTitle?: Maybe<Scalars['Int']>;
  probationActEndDate?: Maybe<Scalars['LocalDateTime']>;
  probationEndDate?: Maybe<Scalars['LocalDateTime']>;
  probationStartDate?: Maybe<Scalars['LocalDateTime']>;
  registerAddress?: Maybe<Scalars['String']>;
  registrationType?: Maybe<Scalars['Int']>;
  retireDate?: Maybe<Scalars['LocalDateTime']>;
  rewardsAfterJoinStaff?: Maybe<Array<StaffRewardAfterJoinInput>>;
  staffNo?: Maybe<Scalars['String']>;
  staffParty?: Maybe<Array<StaffPartyInput>>;
  startWorkDate?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Int']>;
  usedName?: Maybe<Scalars['String']>;
  user?: Maybe<UserInput>;
  userNameSpellingHead?: Maybe<Scalars['String']>;
};

export type BaseStaffOrderByInput = {
  actRetireDate?: Maybe<OrderBy>;
  birthPlace?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  company?: Maybe<CompanyOrderByInput>;
  contactAddr?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  department?: Maybe<DepartmentOrderByInput>;
  educationHis?: Maybe<StaffEducationHisOrderByInput>;
  email?: Maybe<OrderBy>;
  emergencyContact?: Maybe<OrderBy>;
  familyMembers?: Maybe<StaffFamilyMemberOrderByInput>;
  gender?: Maybe<OrderBy>;
  houseRegister?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idCard?: Maybe<OrderBy>;
  jobHis?: Maybe<StaffJobHisOrderByInput>;
  jobRankType?: Maybe<OrderBy>;
  joinChannel?: Maybe<OrderBy>;
  joinDate?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  phone?: Maybe<OrderBy>;
  politicalStatus?: Maybe<OrderBy>;
  positionCertifications?: Maybe<StaffPositionCertificationOrderByInput>;
  primaryDegree?: Maybe<OrderBy>;
  primaryTitle?: Maybe<OrderBy>;
  probationActEndDate?: Maybe<OrderBy>;
  probationEndDate?: Maybe<OrderBy>;
  probationStartDate?: Maybe<OrderBy>;
  registerAddress?: Maybe<OrderBy>;
  registrationType?: Maybe<OrderBy>;
  retireDate?: Maybe<OrderBy>;
  staffNo?: Maybe<OrderBy>;
  staffParty?: Maybe<StaffPartyOrderByInput>;
  startWorkDate?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  usedName?: Maybe<OrderBy>;
  userNameSpellingHead?: Maybe<OrderBy>;
};

export type BaseStaffWithoutRelationInput = {
  actRetireDate?: Maybe<Scalars['LocalDateTime']>;
  birthPlace?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['LocalDateTime']>;
  contactAddr?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emergencyContact?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  houseRegister?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  jobRankLevel?: Maybe<Scalars['Int']>;
  jobRankType?: Maybe<Scalars['Long']>;
  joinChannel?: Maybe<Scalars['Int']>;
  joinDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  politicalStatus?: Maybe<Scalars['Int']>;
  primaryDegree?: Maybe<Scalars['Int']>;
  primaryTitle?: Maybe<Scalars['Int']>;
  probationActEndDate?: Maybe<Scalars['LocalDateTime']>;
  probationEndDate?: Maybe<Scalars['LocalDateTime']>;
  probationStartDate?: Maybe<Scalars['LocalDateTime']>;
  registerAddress?: Maybe<Scalars['String']>;
  registrationType?: Maybe<Scalars['Int']>;
  retireDate?: Maybe<Scalars['LocalDateTime']>;
  staffNo?: Maybe<Scalars['String']>;
  startWorkDate?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Int']>;
  usedName?: Maybe<Scalars['String']>;
  userNameSpellingHead?: Maybe<Scalars['String']>;
};

export type BigDecimalComparisonExp = {
  _eq?: Maybe<Scalars['BigDecimal']>;
  _ge?: Maybe<Scalars['BigDecimal']>;
  _gt?: Maybe<Scalars['BigDecimal']>;
  _in?: Maybe<Array<Maybe<Scalars['BigDecimal']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['BigDecimal']>;
  _lt?: Maybe<Scalars['BigDecimal']>;
  _neq?: Maybe<Scalars['BigDecimal']>;
  _nin?: Maybe<Array<Maybe<Scalars['BigDecimal']>>>;
};

export type BigDecimalComparisonExpInput = {
  _eq?: Maybe<Scalars['BigDecimal']>;
  _ge?: Maybe<Scalars['BigDecimal']>;
  _gt?: Maybe<Scalars['BigDecimal']>;
  _in?: Maybe<Array<Scalars['BigDecimal']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['BigDecimal']>;
  _lt?: Maybe<Scalars['BigDecimal']>;
  _neq?: Maybe<Scalars['BigDecimal']>;
  _nin?: Maybe<Array<Scalars['BigDecimal']>>;
};

export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _ge?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type BooleanComparisonExpInput = {
  _eq?: Maybe<Scalars['Boolean']>;
  _ge?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type CompanyBoolExpInput = {
  _and?: Maybe<Array<CompanyBoolExpInput>>;
  _or?: Maybe<Array<CompanyBoolExpInput>>;
  children?: Maybe<CompanyBoolExpInput>;
  code?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  departments?: Maybe<DepartmentBoolExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  headcount?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  parent?: Maybe<CompanyBoolExpInput>;
  shortName?: Maybe<StringComparisonExpInput>;
  sort?: Maybe<IntegerComparisonExpInput>;
  staffs?: Maybe<BaseStaffBoolExpInput>;
};

export type CompanyInput = {
  children?: Maybe<Array<CompanyInput>>;
  code?: Maybe<Scalars['String']>;
  departments?: Maybe<Array<DepartmentInput>>;
  description?: Maybe<Scalars['String']>;
  headcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CompanyInput>;
  shortName?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  staffs?: Maybe<Array<BaseStaffInput>>;
};

export type CompanyOrderByInput = {
  children?: Maybe<CompanyOrderByInput>;
  code?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  departments?: Maybe<DepartmentOrderByInput>;
  description?: Maybe<OrderBy>;
  headcount?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent?: Maybe<CompanyOrderByInput>;
  shortName?: Maybe<OrderBy>;
  sort?: Maybe<OrderBy>;
  staffs?: Maybe<BaseStaffOrderByInput>;
};

export type DateComparisonExp = {
  _eq?: Maybe<Scalars['Date']>;
  _ge?: Maybe<Scalars['Date']>;
  _gt?: Maybe<Scalars['Date']>;
  _in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Date']>;
  _lt?: Maybe<Scalars['Date']>;
  _neq?: Maybe<Scalars['Date']>;
  _nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DepartmentBoolExpInput = {
  _and?: Maybe<Array<DepartmentBoolExpInput>>;
  _or?: Maybe<Array<DepartmentBoolExpInput>>;
  children?: Maybe<DepartmentBoolExpInput>;
  code?: Maybe<StringComparisonExpInput>;
  company?: Maybe<CompanyBoolExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  dutyDesc?: Maybe<StringComparisonExpInput>;
  headcount?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  parent?: Maybe<DepartmentBoolExpInput>;
  sort?: Maybe<IntegerComparisonExpInput>;
  staffInCharge?: Maybe<BaseStaffBoolExpInput>;
  users?: Maybe<BaseStaffBoolExpInput>;
};

export type DepartmentInput = {
  children?: Maybe<Array<DepartmentInput>>;
  code?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
  description?: Maybe<Scalars['String']>;
  dutyDesc?: Maybe<Scalars['String']>;
  headcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<DepartmentInput>;
  party?: Maybe<PartyInput>;
  sort?: Maybe<Scalars['Int']>;
  staffInCharge?: Maybe<BaseStaffInput>;
  users?: Maybe<Array<BaseStaffInput>>;
};

export type DepartmentOrderByInput = {
  children?: Maybe<DepartmentOrderByInput>;
  code?: Maybe<OrderBy>;
  company?: Maybe<CompanyOrderByInput>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  dutyDesc?: Maybe<OrderBy>;
  headcount?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent?: Maybe<DepartmentOrderByInput>;
  sort?: Maybe<OrderBy>;
  staffInCharge?: Maybe<BaseStaffOrderByInput>;
  users?: Maybe<BaseStaffOrderByInput>;
};

export type DepartmentSimpleRelationInput = {
  code?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  dutyDesc?: Maybe<Scalars['String']>;
  headcount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  leaderId?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  parentDepId?: Maybe<Scalars['Long']>;
  sort?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Long']>;
  users?: Maybe<Array<BaseStaffInput>>;
};

export type DispatchStaffBoolExpInput = {
  _and?: Maybe<Array<DispatchStaffBoolExpInput>>;
  _or?: Maybe<Array<DispatchStaffBoolExpInput>>;
  address?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  credentialId?: Maybe<StringComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  department?: Maybe<DepartmentBoolExpInput>;
  dispatchedBy?: Maybe<StringComparisonExpInput>;
  education?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  phone?: Maybe<StringComparisonExpInput>;
};

export type DispatchStaffInput = {
  address?: Maybe<Scalars['String']>;
  credentialId?: Maybe<Scalars['String']>;
  department?: Maybe<DepartmentInput>;
  dispatchedBy?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type DispatchStaffOrderByInput = {
  address?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  credentialId?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  dispatchedBy?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  phone?: Maybe<OrderBy>;
};

export type DoubleComparisonExp = {
  _eq?: Maybe<Scalars['Float']>;
  _ge?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Float']>;
  _lt?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DoubleComparisonExpInput = {
  _eq?: Maybe<Scalars['Float']>;
  _ge?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Float']>;
  _lt?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

export type GroupBoolExpInput = {
  _and?: Maybe<Array<GroupBoolExpInput>>;
  _or?: Maybe<Array<GroupBoolExpInput>>;
  company?: Maybe<CompanyBoolExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  sort?: Maybe<IntegerComparisonExpInput>;
  staffInCharge?: Maybe<BaseStaffBoolExpInput>;
  staffs?: Maybe<BaseStaffBoolExpInput>;
};

export type GroupInput = {
  company?: Maybe<CompanyInput>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  staffInCharge?: Maybe<BaseStaffInput>;
  staffs?: Maybe<Array<BaseStaffInput>>;
};

export type HrAnnuityBoolExp = {
  _and?: Maybe<Array<Maybe<HrAnnuityBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAnnuityBoolExp>>>;
  countDeposit?: Maybe<BigDecimalComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  employee?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  individualDeposit?: Maybe<BigDecimalComparisonExp>;
  month?: Maybe<IntegerComparisonExp>;
  unitDeposit?: Maybe<BigDecimalComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  year?: Maybe<LongComparisonExp>;
};

export type HrAnnuityInput = {
  countDeposit?: Maybe<Scalars['BigDecimal']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  employee?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  individualDeposit?: Maybe<Scalars['BigDecimal']>;
  month?: Maybe<Scalars['Int']>;
  unitDeposit?: Maybe<Scalars['BigDecimal']>;
  userId?: Maybe<Scalars['Long']>;
  year?: Maybe<Scalars['Long']>;
};

export type HrAnnuityOrderBy = {
  countDeposit?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  employee?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  individualDeposit?: Maybe<OrderBy>;
  month?: Maybe<OrderBy>;
  unitDeposit?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type HrAssessKpiBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isQuantify?: Maybe<IntegerComparisonExp>;
  kpiDetails?: Maybe<HrAssessKpiDetailBoolExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  quantifyUnit?: Maybe<StringComparisonExp>;
  quantifyValue?: Maybe<IntegerComparisonExp>;
  weight?: Maybe<BigDecimalComparisonExp>;
};

export type HrAssessKpiDepartmentBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiDepartmentBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiDepartmentBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  dataSource?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<StringComparisonExp>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeBoolExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  scoreAssessApprovalGroup?: Maybe<IntegerComparisonExp>;
  scoreAssessFirstWorkingGroup?: Maybe<IntegerComparisonExp>;
  scoreAssessSelfDepartment?: Maybe<IntegerComparisonExp>;
  scoreStandard?: Maybe<StringComparisonExp>;
  weight?: Maybe<IntegerComparisonExp>;
};

export type HrAssessKpiDepartmentInput = {
  createTime?: Maybe<Scalars['Date']>;
  dataSource?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<Scalars['String']>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeInput>;
  modifiedTime?: Maybe<Scalars['Date']>;
  scoreAssessApprovalGroup?: Maybe<Scalars['Int']>;
  scoreAssessFirstWorkingGroup?: Maybe<Scalars['Int']>;
  scoreAssessSelfDepartment?: Maybe<Scalars['Int']>;
  scoreStandard?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type HrAssessKpiDepartmentOrderBy = {
  createTime?: Maybe<OrderBy>;
  dataSource?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<OrderBy>;
  kpiType?: Maybe<HrAssessKpiDepartmentTypeOrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  scoreAssessApprovalGroup?: Maybe<OrderBy>;
  scoreAssessFirstWorkingGroup?: Maybe<OrderBy>;
  scoreAssessSelfDepartment?: Maybe<OrderBy>;
  scoreStandard?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type HrAssessKpiDepartmentTypeBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiDepartmentTypeBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiDepartmentTypeBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type HrAssessKpiDepartmentTypeInput = {
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
};

export type HrAssessKpiDepartmentTypeOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type HrAssessKpiDetailBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiDetailBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiDetailBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<HrAssessKpiBoolExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
};

export type HrAssessKpiDetailInput = {
  content?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<HrAssessKpiInput>;
  modifiedTime?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
};

export type HrAssessKpiDetailOrderBy = {
  content?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<HrAssessKpiOrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
};

export type HrAssessKpiEmployeeDistributionPlanBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiEmployeeDistributionPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiEmployeeDistributionPlanBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  distributionPlan?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

export type HrAssessKpiEmployeeDistributionPlanInput = {
  createTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  distributionPlan?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
};

export type HrAssessKpiEmployeeDistributionPlanOrderBy = {
  createTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  distributionPlan?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type HrAssessKpiEmployeeNoticeBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiEmployeeNoticeBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiEmployeeNoticeBoolExp>>>;
  agree?: Maybe<StringComparisonExp>;
  content?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  disagree?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

export type HrAssessKpiEmployeeNoticeInput = {
  agree?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  disagree?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
};

export type HrAssessKpiEmployeeNoticeOrderBy = {
  agree?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  disagree?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type HrAssessKpiEmployeeSelfBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiEmployeeSelfBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiEmployeeSelfBoolExp>>>;
  assessGrade?: Maybe<IntegerComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  dataSource?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<StringComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  scoreStandard?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
  weight?: Maybe<IntegerComparisonExp>;
};

export type HrAssessKpiEmployeeSelfInput = {
  assessGrade?: Maybe<Scalars['Int']>;
  createTime?: Maybe<Scalars['Date']>;
  dataSource?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  scoreStandard?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type HrAssessKpiEmployeeSelfOrderBy = {
  assessGrade?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  dataSource?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  scoreStandard?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type HrAssessKpiInput = {
  createTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isQuantify?: Maybe<Scalars['Int']>;
  kpiDetails?: Maybe<Array<Maybe<HrAssessKpiDetailInput>>>;
  modifiedTime?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  quantifyUnit?: Maybe<Scalars['String']>;
  quantifyValue?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['BigDecimal']>;
};

export type HrAssessKpiOrderBy = {
  createTime?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isQuantify?: Maybe<OrderBy>;
  kpiDetails?: Maybe<HrAssessKpiDetailOrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  quantifyUnit?: Maybe<OrderBy>;
  quantifyValue?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type HrAssessKpiRelationBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessKpiRelationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessKpiRelationBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<IntegerComparisonExp>;
  templateAssessId?: Maybe<IntegerComparisonExp>;
};

export type HrAssessKpiRelationInput = {
  id?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Int']>;
  templateAssessId?: Maybe<Scalars['Int']>;
};

export type HrAssessKpiRelationOrderBy = {
  id?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  templateAssessId?: Maybe<OrderBy>;
};

export type HrAssessTaskTemplateBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessTaskTemplateBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessTaskTemplateBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  createUser?: Maybe<IntegerComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpis?: Maybe<HrAssessKpiBoolExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  period?: Maybe<IntegerComparisonExp>;
};

export type HrAssessTaskTemplateInput = {
  createTime?: Maybe<Scalars['Date']>;
  createUser?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpis?: Maybe<Array<Maybe<HrAssessKpiInput>>>;
  modifiedTime?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
};

export type HrAssessTaskTemplateOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUser?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  period?: Maybe<OrderBy>;
};

export type HrAssessVoteBoolExp = {
  _and?: Maybe<Array<Maybe<HrAssessVoteBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrAssessVoteBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
  vote?: Maybe<BooleanComparisonExp>;
};

export type HrAssessVoteInput = {
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
  vote?: Maybe<Scalars['Boolean']>;
};

export type HrAssessVoteOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  vote?: Maybe<OrderBy>;
};

export type HrDepartmentDetailsBoolExp = {
  _and?: Maybe<Array<Maybe<HrDepartmentDetailsBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrDepartmentDetailsBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  departmentDescription?: Maybe<StringComparisonExp>;
  departmentResponsibility?: Maybe<StringComparisonExp>;
  existingNumber?: Maybe<IntegerComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  industryTitle?: Maybe<StringComparisonExp>;
  institutionalFrameworkId?: Maybe<LongComparisonExp>;
  ruleNumber?: Maybe<IntegerComparisonExp>;
  superiorDepartment?: Maybe<StringComparisonExp>;
};

export type HrDepartmentDetailsInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  departmentDescription?: Maybe<Scalars['String']>;
  departmentResponsibility?: Maybe<Scalars['String']>;
  existingNumber?: Maybe<Scalars['Int']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  industryTitle?: Maybe<Scalars['String']>;
  institutionalFrameworkId?: Maybe<Scalars['Long']>;
  ruleNumber?: Maybe<Scalars['Int']>;
  superiorDepartment?: Maybe<Scalars['String']>;
};

export type HrDepartmentDetailsOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  departmentDescription?: Maybe<OrderBy>;
  departmentResponsibility?: Maybe<OrderBy>;
  existingNumber?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  industryTitle?: Maybe<OrderBy>;
  institutionalFrameworkId?: Maybe<OrderBy>;
  ruleNumber?: Maybe<OrderBy>;
  superiorDepartment?: Maybe<OrderBy>;
};

export type HrDepartmentalTrainingPlanBoolExp = {
  _and?: Maybe<Array<Maybe<HrDepartmentalTrainingPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrDepartmentalTrainingPlanBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  lecturer?: Maybe<StringComparisonExp>;
  opinionsHr?: Maybe<StringComparisonExp>;
  opinionsLeaderCharge?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reasonsApplication?: Maybe<StringComparisonExp>;
  selfRegistration?: Maybe<IntegerComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
  trainingExpenses?: Maybe<StringComparisonExp>;
  trainingInstitutions?: Maybe<StringComparisonExp>;
  trainingLocation?: Maybe<StringComparisonExp>;
  trainingTheme?: Maybe<StringComparisonExp>;
  trainingType?: Maybe<StringComparisonExp>;
};

export type HrDepartmentalTrainingPlanInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  lecturer?: Maybe<Scalars['String']>;
  opinionsHr?: Maybe<Scalars['String']>;
  opinionsLeaderCharge?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reasonsApplication?: Maybe<Scalars['String']>;
  selfRegistration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Int']>;
  trainingExpenses?: Maybe<Scalars['String']>;
  trainingInstitutions?: Maybe<Scalars['String']>;
  trainingLocation?: Maybe<Scalars['String']>;
  trainingTheme?: Maybe<Scalars['String']>;
  trainingType?: Maybe<Scalars['String']>;
};

export type HrDepartmentalTrainingPlanOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lecturer?: Maybe<OrderBy>;
  opinionsHr?: Maybe<OrderBy>;
  opinionsLeaderCharge?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reasonsApplication?: Maybe<OrderBy>;
  selfRegistration?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  trainingExpenses?: Maybe<OrderBy>;
  trainingInstitutions?: Maybe<OrderBy>;
  trainingLocation?: Maybe<OrderBy>;
  trainingTheme?: Maybe<OrderBy>;
  trainingType?: Maybe<OrderBy>;
};

export type HrDispatchInformationListBoolExp = {
  _and?: Maybe<Array<Maybe<HrDispatchInformationListBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrDispatchInformationListBoolExp>>>;
  essentialInformation?: Maybe<StringComparisonExp>;
  holidayInformation?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  salaryCostInformation?: Maybe<StringComparisonExp>;
};

export type HrDispatchInformationListInput = {
  essentialInformation?: Maybe<Scalars['String']>;
  holidayInformation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  salaryCostInformation?: Maybe<Scalars['String']>;
};

export type HrDispatchInformationListOrderBy = {
  essentialInformation?: Maybe<OrderBy>;
  holidayInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  salaryCostInformation?: Maybe<OrderBy>;
};

export type HrEmployeeAnnualAssessBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeeAnnualAssessBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeeAnnualAssessBoolExp>>>;
  birthday?: Maybe<DateComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  files?: Maybe<HrFileBoolExp>;
  gender?: Maybe<StringComparisonExp>;
  grade?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobs?: Maybe<StringComparisonExp>;
  politicalStatus?: Maybe<StringComparisonExp>;
  primaryDegree?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  reportOnWork?: Maybe<StringComparisonExp>;
  startWorkDate?: Maybe<DateComparisonExp>;
  technicalTitle?: Maybe<StringComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
  year?: Maybe<IntegerComparisonExp>;
};

export type HrEmployeeAnnualAssessInput = {
  birthday?: Maybe<Scalars['Date']>;
  createTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  files?: Maybe<Array<Maybe<HrFileInput>>>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  jobs?: Maybe<Scalars['String']>;
  politicalStatus?: Maybe<Scalars['String']>;
  primaryDegree?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  reportOnWork?: Maybe<Scalars['String']>;
  startWorkDate?: Maybe<Scalars['Date']>;
  technicalTitle?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type HrEmployeeAnnualAssessOrderBy = {
  birthday?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobs?: Maybe<OrderBy>;
  politicalStatus?: Maybe<OrderBy>;
  primaryDegree?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  reportOnWork?: Maybe<OrderBy>;
  startWorkDate?: Maybe<OrderBy>;
  technicalTitle?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type HrEmployeeInformationListBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeeInformationListBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeeInformationListBoolExp>>>;
  annualAssessmentInformation?: Maybe<StringComparisonExp>;
  annuityBenefitsInformation?: Maybe<StringComparisonExp>;
  attendanceInformation?: Maybe<StringComparisonExp>;
  dispatchInformation?: Maybe<StringComparisonExp>;
  essentialInformation?: Maybe<StringComparisonExp>;
  holidayInformation?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobMobilityInformation?: Maybe<StringComparisonExp>;
  rankScoreInformation?: Maybe<StringComparisonExp>;
  salaryCostInformation?: Maybe<StringComparisonExp>;
  salaryInformation?: Maybe<StringComparisonExp>;
};

export type HrEmployeeInformationListInput = {
  annualAssessmentInformation?: Maybe<Scalars['String']>;
  annuityBenefitsInformation?: Maybe<Scalars['String']>;
  attendanceInformation?: Maybe<Scalars['String']>;
  dispatchInformation?: Maybe<Scalars['String']>;
  essentialInformation?: Maybe<Scalars['String']>;
  holidayInformation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  jobMobilityInformation?: Maybe<Scalars['String']>;
  rankScoreInformation?: Maybe<Scalars['String']>;
  salaryCostInformation?: Maybe<Scalars['String']>;
  salaryInformation?: Maybe<Scalars['String']>;
};

export type HrEmployeeInformationListOrderBy = {
  annualAssessmentInformation?: Maybe<OrderBy>;
  annuityBenefitsInformation?: Maybe<OrderBy>;
  attendanceInformation?: Maybe<OrderBy>;
  dispatchInformation?: Maybe<OrderBy>;
  essentialInformation?: Maybe<OrderBy>;
  holidayInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobMobilityInformation?: Maybe<OrderBy>;
  rankScoreInformation?: Maybe<OrderBy>;
  salaryCostInformation?: Maybe<OrderBy>;
  salaryInformation?: Maybe<OrderBy>;
};

export type HrEmployeePersonalInformationChangeBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeePersonalInformationChangeBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeePersonalInformationChangeBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  changeItem?: Maybe<StringComparisonExp>;
  contentAfterChange?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  originalContent?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
  supportingMaterials?: Maybe<StringComparisonExp>;
};

export type HrEmployeePersonalInformationChangeInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  changeItem?: Maybe<Scalars['String']>;
  contentAfterChange?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  originalContent?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  supportingMaterials?: Maybe<Scalars['String']>;
};

export type HrEmployeePersonalInformationChangeOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  changeItem?: Maybe<OrderBy>;
  contentAfterChange?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  originalContent?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  supportingMaterials?: Maybe<OrderBy>;
};

export type HrEmployeeRewardsBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeeRewardsBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeeRewardsBoolExp>>>;
  des?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
  rewardsKey?: Maybe<IntegerComparisonExp>;
  rewardsValue?: Maybe<StringComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  year?: Maybe<IntegerComparisonExp>;
};

export type HrEmployeeRewardsInput = {
  des?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
  rewardsKey?: Maybe<Scalars['Int']>;
  rewardsValue?: Maybe<Scalars['String']>;
  staffId?: Maybe<Scalars['Long']>;
  year?: Maybe<Scalars['Int']>;
};

export type HrEmployeeRewardsOrderBy = {
  des?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
  rewardsKey?: Maybe<OrderBy>;
  rewardsValue?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type HrEmployeeTurnoverBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeeTurnoverBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeeTurnoverBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  assetPreservationOpinion?: Maybe<StringComparisonExp>;
  auditDepartmentOpinion?: Maybe<StringComparisonExp>;
  chairmanOpinion?: Maybe<StringComparisonExp>;
  departmentHeadOpinion?: Maybe<StringComparisonExp>;
  departmentLeaderChargeOpinion?: Maybe<StringComparisonExp>;
  departureTime?: Maybe<DateComparisonExp>;
  disciplineInspectionSupervisionOfficeOpinion?: Maybe<StringComparisonExp>;
  generalManagerOpinion?: Maybe<StringComparisonExp>;
  handoverOfficeSupplies?: Maybe<StringComparisonExp>;
  humanResourcesDepartmentOpinion?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobName?: Maybe<StringComparisonExp>;
  managementLeaderHumanResourcesDepartmentOpinion?: Maybe<StringComparisonExp>;
  personalLoan?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reasonsResignation?: Maybe<StringComparisonExp>;
  riskManagementDepartmentOpinion?: Maybe<StringComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
};

export type HrEmployeeTurnoverInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  assetPreservationOpinion?: Maybe<Scalars['String']>;
  auditDepartmentOpinion?: Maybe<Scalars['String']>;
  chairmanOpinion?: Maybe<Scalars['String']>;
  departmentHeadOpinion?: Maybe<Scalars['String']>;
  departmentLeaderChargeOpinion?: Maybe<Scalars['String']>;
  departureTime?: Maybe<Scalars['Date']>;
  disciplineInspectionSupervisionOfficeOpinion?: Maybe<Scalars['String']>;
  generalManagerOpinion?: Maybe<Scalars['String']>;
  handoverOfficeSupplies?: Maybe<Scalars['String']>;
  humanResourcesDepartmentOpinion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  jobName?: Maybe<Scalars['String']>;
  managementLeaderHumanResourcesDepartmentOpinion?: Maybe<Scalars['String']>;
  personalLoan?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reasonsResignation?: Maybe<Scalars['String']>;
  riskManagementDepartmentOpinion?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
};

export type HrEmployeeTurnoverOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  assetPreservationOpinion?: Maybe<OrderBy>;
  auditDepartmentOpinion?: Maybe<OrderBy>;
  chairmanOpinion?: Maybe<OrderBy>;
  departmentHeadOpinion?: Maybe<OrderBy>;
  departmentLeaderChargeOpinion?: Maybe<OrderBy>;
  departureTime?: Maybe<OrderBy>;
  disciplineInspectionSupervisionOfficeOpinion?: Maybe<OrderBy>;
  generalManagerOpinion?: Maybe<OrderBy>;
  handoverOfficeSupplies?: Maybe<OrderBy>;
  humanResourcesDepartmentOpinion?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobName?: Maybe<OrderBy>;
  managementLeaderHumanResourcesDepartmentOpinion?: Maybe<OrderBy>;
  personalLoan?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reasonsResignation?: Maybe<OrderBy>;
  riskManagementDepartmentOpinion?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type HrEmployeeWelfareSupplementMedicalInsuranceBoolExp = {
  _and?: Maybe<Array<Maybe<HrEmployeeWelfareSupplementMedicalInsuranceBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrEmployeeWelfareSupplementMedicalInsuranceBoolExp>>>;
  balance?: Maybe<BigDecimalComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  distributionAmount?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  insuranceTypeName?: Maybe<StringComparisonExp>;
  reimbursementAmount?: Maybe<BigDecimalComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

export type HrEmployeeWelfareSupplementMedicalInsuranceInput = {
  balance?: Maybe<Scalars['BigDecimal']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  distributionAmount?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  insuranceTypeName?: Maybe<Scalars['String']>;
  reimbursementAmount?: Maybe<Scalars['BigDecimal']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
};

export type HrEmployeeWelfareSupplementMedicalInsuranceOrderBy = {
  balance?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  distributionAmount?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  insuranceTypeName?: Maybe<OrderBy>;
  reimbursementAmount?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type HrExpansionReductionApplyBoolExp = {
  _and?: Maybe<Array<Maybe<HrExpansionReductionApplyBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrExpansionReductionApplyBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationItems?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  departmentLeadersinCharge?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  managementLeaderHrDepartment?: Maybe<StringComparisonExp>;
  numberActualStaff?: Maybe<IntegerComparisonExp>;
  numberCurrentStaff?: Maybe<IntegerComparisonExp>;
  opinionsHrDepartment?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reason?: Maybe<StringComparisonExp>;
  staffingAfterChange?: Maybe<IntegerComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
};

export type HrExpansionReductionApplyInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationItems?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  departmentLeadersinCharge?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  managementLeaderHrDepartment?: Maybe<Scalars['String']>;
  numberActualStaff?: Maybe<Scalars['Int']>;
  numberCurrentStaff?: Maybe<Scalars['Int']>;
  opinionsHrDepartment?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  staffingAfterChange?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type HrExpansionReductionApplyOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationItems?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  departmentLeadersinCharge?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  managementLeaderHrDepartment?: Maybe<OrderBy>;
  numberActualStaff?: Maybe<OrderBy>;
  numberCurrentStaff?: Maybe<OrderBy>;
  opinionsHrDepartment?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reason?: Maybe<OrderBy>;
  staffingAfterChange?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type HrFileBoolExp = {
  _and?: Maybe<Array<Maybe<HrFileBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrFileBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  fileName?: Maybe<StringComparisonExp>;
  filePath?: Maybe<StringComparisonExp>;
  fileUrl?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
};

export type HrFileInput = {
  createTime?: Maybe<Scalars['Date']>;
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
};

export type HrFileOrderBy = {
  createTime?: Maybe<OrderBy>;
  fileName?: Maybe<OrderBy>;
  filePath?: Maybe<OrderBy>;
  fileUrl?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type HrFileProbationContractBoolExp = {
  _and?: Maybe<Array<Maybe<HrFileProbationContractBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrFileProbationContractBoolExp>>>;
  hrFile?: Maybe<HrFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  probationContractId?: Maybe<LongComparisonExp>;
};

export type HrFileProbationContractInput = {
  hrFile?: Maybe<HrFileInput>;
  id?: Maybe<Scalars['Long']>;
  probationContractId?: Maybe<Scalars['Long']>;
};

export type HrFileProbationContractOrderBy = {
  id?: Maybe<OrderBy>;
  probationContractId?: Maybe<OrderBy>;
};

export type HrGradeBonusRulesBoolExp = {
  _and?: Maybe<Array<Maybe<HrGradeBonusRulesBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrGradeBonusRulesBoolExp>>>;
  grade?: Maybe<IntegerComparisonExp>;
  gradeBonusRules?: Maybe<HrGradeBonusRulesBoolExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  score?: Maybe<IntegerComparisonExp>;
  year?: Maybe<DateComparisonExp>;
};

export type HrGradeBonusRulesInput = {
  grade?: Maybe<Scalars['Int']>;
  gradeBonusRules?: Maybe<Array<Maybe<HrGradeBonusRulesInput>>>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Date']>;
};

export type HrGradeBonusRulesOrderBy = {
  grade?: Maybe<OrderBy>;
  gradeBonusRules?: Maybe<HrGradeBonusRulesOrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type HrHisPromotionBoolExp = {
  _and?: Maybe<Array<Maybe<HrHisPromotionBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrHisPromotionBoolExp>>>;
  documentLevel?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  levelName?: Maybe<StringComparisonExp>;
  nextLevelId?: Maybe<LongComparisonExp>;
  rankName?: Maybe<StringComparisonExp>;
  salary?: Maybe<BigDecimalComparisonExp>;
  score?: Maybe<IntegerComparisonExp>;
  subordinateSequence?: Maybe<StringComparisonExp>;
};

export type HrHisPromotionInput = {
  documentLevel?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  levelName?: Maybe<Scalars['String']>;
  nextLevelId?: Maybe<Scalars['Long']>;
  rankName?: Maybe<Scalars['String']>;
  salary?: Maybe<Scalars['BigDecimal']>;
  score?: Maybe<Scalars['Int']>;
  subordinateSequence?: Maybe<Scalars['String']>;
};

export type HrHisPromotionOrderBy = {
  documentLevel?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  levelName?: Maybe<OrderBy>;
  nextLevelId?: Maybe<OrderBy>;
  rankName?: Maybe<OrderBy>;
  salary?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  subordinateSequence?: Maybe<OrderBy>;
};

export type HrHumanResourceTrainingPlanBoolExp = {
  _and?: Maybe<Array<Maybe<HrHumanResourceTrainingPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrHumanResourceTrainingPlanBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  hrLeaderCharge?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  lecturer?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reasonsApplication?: Maybe<StringComparisonExp>;
  selfRegistration?: Maybe<IntegerComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  trainingDepartment?: Maybe<StringComparisonExp>;
  trainingExpenses?: Maybe<StringComparisonExp>;
  trainingInstitutions?: Maybe<StringComparisonExp>;
  trainingLocation?: Maybe<StringComparisonExp>;
  trainingTheme?: Maybe<StringComparisonExp>;
  trainingType?: Maybe<StringComparisonExp>;
};

export type HrHumanResourceTrainingPlanInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  endTime?: Maybe<Scalars['Date']>;
  hrLeaderCharge?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lecturer?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reasonsApplication?: Maybe<Scalars['String']>;
  selfRegistration?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  trainingDepartment?: Maybe<Scalars['String']>;
  trainingExpenses?: Maybe<Scalars['String']>;
  trainingInstitutions?: Maybe<Scalars['String']>;
  trainingLocation?: Maybe<Scalars['String']>;
  trainingTheme?: Maybe<Scalars['String']>;
  trainingType?: Maybe<Scalars['String']>;
};

export type HrHumanResourceTrainingPlanOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  hrLeaderCharge?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lecturer?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reasonsApplication?: Maybe<OrderBy>;
  selfRegistration?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  trainingDepartment?: Maybe<OrderBy>;
  trainingExpenses?: Maybe<OrderBy>;
  trainingInstitutions?: Maybe<OrderBy>;
  trainingLocation?: Maybe<OrderBy>;
  trainingTheme?: Maybe<OrderBy>;
  trainingType?: Maybe<OrderBy>;
};

export type HrInstitutionalFrameworkBoolExp = {
  _and?: Maybe<Array<Maybe<HrInstitutionalFrameworkBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrInstitutionalFrameworkBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  classification?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  pid?: Maybe<LongComparisonExp>;
  rank?: Maybe<IntegerComparisonExp>;
};

export type HrInstitutionalFrameworkInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Long']>;
  rank?: Maybe<Scalars['Int']>;
};

export type HrInstitutionalFrameworkOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  classification?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  pid?: Maybe<OrderBy>;
  rank?: Maybe<OrderBy>;
};

export type HrInternInformationListBoolExp = {
  _and?: Maybe<Array<Maybe<HrInternInformationListBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrInternInformationListBoolExp>>>;
  assessmentStatus?: Maybe<StringComparisonExp>;
  attendanceInformation?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  internsInformation?: Maybe<StringComparisonExp>;
  salaryInformation?: Maybe<StringComparisonExp>;
};

export type HrInternInformationListInput = {
  assessmentStatus?: Maybe<Scalars['String']>;
  attendanceInformation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  internsInformation?: Maybe<Scalars['String']>;
  salaryInformation?: Maybe<Scalars['String']>;
};

export type HrInternInformationListOrderBy = {
  assessmentStatus?: Maybe<OrderBy>;
  attendanceInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  internsInformation?: Maybe<OrderBy>;
  salaryInformation?: Maybe<OrderBy>;
};

export type HrJobDetailsBoolExp = {
  _and?: Maybe<Array<Maybe<HrJobDetailsBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrJobDetailsBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  departmentName?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  existingNumber?: Maybe<IntegerComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobId?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  requirements?: Maybe<StringComparisonExp>;
  responsibilities?: Maybe<StringComparisonExp>;
  ruleNumber?: Maybe<IntegerComparisonExp>;
};

export type HrJobDetailsInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  departmentName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  existingNumber?: Maybe<Scalars['Int']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  jobId?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  requirements?: Maybe<Scalars['String']>;
  responsibilities?: Maybe<Scalars['String']>;
  ruleNumber?: Maybe<Scalars['Int']>;
};

export type HrJobDetailsOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  departmentName?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  existingNumber?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobId?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  requirements?: Maybe<OrderBy>;
  responsibilities?: Maybe<OrderBy>;
  ruleNumber?: Maybe<OrderBy>;
};

export type HrLaborContractListBoolExp = {
  _and?: Maybe<Array<Maybe<HrLaborContractListBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrLaborContractListBoolExp>>>;
  contractDate?: Maybe<DateComparisonExp>;
  expirationDate?: Maybe<DateComparisonExp>;
  files?: Maybe<HrFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
};

export type HrLaborContractListInput = {
  contractDate?: Maybe<Scalars['Date']>;
  expirationDate?: Maybe<Scalars['Date']>;
  files?: Maybe<Array<Maybe<HrFileInput>>>;
  id?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
};

export type HrLaborContractListOrderBy = {
  contractDate?: Maybe<OrderBy>;
  expirationDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
};

export type HrMappingAwardRankBoolExp = {
  _and?: Maybe<Array<Maybe<HrMappingAwardRankBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrMappingAwardRankBoolExp>>>;
  awardKey?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
};

export type HrMappingAwardRankInput = {
  awardKey?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
};

export type HrMappingAwardRankOrderBy = {
  awardKey?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
};

export type HrMappingEducationRankBoolExp = {
  _and?: Maybe<Array<Maybe<HrMappingEducationRankBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrMappingEducationRankBoolExp>>>;
  eduKey?: Maybe<IntegerComparisonExp>;
  educationKey?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
};

export type HrMappingEducationRankInput = {
  eduKey?: Maybe<Scalars['Int']>;
  educationKey?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
};

export type HrMappingEducationRankOrderBy = {
  eduKey?: Maybe<OrderBy>;
  educationKey?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
};

export type HrMappingQualificationCertificateBoolExp = {
  _and?: Maybe<Array<Maybe<HrMappingQualificationCertificateBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrMappingQualificationCertificateBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
  qualificationCertificateKey?: Maybe<IntegerComparisonExp>;
};

export type HrMappingQualificationCertificateInput = {
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
  qualificationCertificateKey?: Maybe<Scalars['Int']>;
};

export type HrMappingQualificationCertificateOrderBy = {
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
  qualificationCertificateKey?: Maybe<OrderBy>;
};

export type HrMappingTitelBoolExp = {
  _and?: Maybe<Array<Maybe<HrMappingTitelBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrMappingTitelBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
  titelKey?: Maybe<IntegerComparisonExp>;
};

export type HrMappingTitelInput = {
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
  titelKey?: Maybe<Scalars['Int']>;
};

export type HrMappingTitelOrderBy = {
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
  titelKey?: Maybe<OrderBy>;
};

export type HrPerformanceEvaluationBoolExp = {
  _and?: Maybe<Array<Maybe<HrPerformanceEvaluationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPerformanceEvaluationBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  coordinateAbility?: Maybe<IntegerComparisonExp>;
  evaluationPeopleId?: Maybe<LongComparisonExp>;
  evaluationPeopleName?: Maybe<StringComparisonExp>;
  evaluationPeopleRank?: Maybe<IntegerComparisonExp>;
  evaluationResultsId?: Maybe<LongComparisonExp>;
  evaluationWeight?: Maybe<IntegerComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  informant?: Maybe<StringComparisonExp>;
  informantDepartment?: Maybe<StringComparisonExp>;
  informantId?: Maybe<LongComparisonExp>;
  informantPost?: Maybe<StringComparisonExp>;
  innovationAbility?: Maybe<IntegerComparisonExp>;
  organizingAbility?: Maybe<IntegerComparisonExp>;
  professionalSkill?: Maybe<IntegerComparisonExp>;
  specializedKnowledgeExperience?: Maybe<IntegerComparisonExp>;
  totalPoints?: Maybe<IntegerComparisonExp>;
};

export type HrPerformanceEvaluationInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  coordinateAbility?: Maybe<Scalars['Int']>;
  evaluationPeopleId?: Maybe<Scalars['Long']>;
  evaluationPeopleName?: Maybe<Scalars['String']>;
  evaluationPeopleRank?: Maybe<Scalars['Int']>;
  evaluationResultsId?: Maybe<Scalars['Long']>;
  evaluationWeight?: Maybe<Scalars['Int']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  informant?: Maybe<Scalars['String']>;
  informantDepartment?: Maybe<Scalars['String']>;
  informantId?: Maybe<Scalars['Long']>;
  informantPost?: Maybe<Scalars['String']>;
  innovationAbility?: Maybe<Scalars['Int']>;
  organizingAbility?: Maybe<Scalars['Int']>;
  professionalSkill?: Maybe<Scalars['Int']>;
  specializedKnowledgeExperience?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['Int']>;
};

export type HrPerformanceEvaluationOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  coordinateAbility?: Maybe<OrderBy>;
  evaluationPeopleId?: Maybe<OrderBy>;
  evaluationPeopleName?: Maybe<OrderBy>;
  evaluationPeopleRank?: Maybe<OrderBy>;
  evaluationResultsId?: Maybe<OrderBy>;
  evaluationWeight?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  informant?: Maybe<OrderBy>;
  informantDepartment?: Maybe<OrderBy>;
  informantId?: Maybe<OrderBy>;
  informantPost?: Maybe<OrderBy>;
  innovationAbility?: Maybe<OrderBy>;
  organizingAbility?: Maybe<OrderBy>;
  professionalSkill?: Maybe<OrderBy>;
  specializedKnowledgeExperience?: Maybe<OrderBy>;
  totalPoints?: Maybe<OrderBy>;
};

export type HrPersonChangeKpiBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeKpiBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeKpiBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isQuantify?: Maybe<IntegerComparisonExp>;
  kpiDetails?: Maybe<HrPersonChangeKpiDetailBoolExp>;
  name?: Maybe<StringComparisonExp>;
  quantifyUnit?: Maybe<StringComparisonExp>;
  quantifyValue?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
  weight?: Maybe<BigDecimalComparisonExp>;
};

export type HrPersonChangeKpiDetailBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeKpiDetailBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeKpiDetailBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<HrPersonChangeKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type HrPersonChangeKpiDetailInput = {
  content?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<HrPersonChangeKpiInput>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type HrPersonChangeKpiDetailOrderBy = {
  content?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<HrPersonChangeKpiOrderBy>;
  name?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type HrPersonChangeKpiInput = {
  createTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isQuantify?: Maybe<Scalars['Int']>;
  kpiDetails?: Maybe<Array<Maybe<HrPersonChangeKpiDetailInput>>>;
  name?: Maybe<Scalars['String']>;
  quantifyUnit?: Maybe<Scalars['String']>;
  quantifyValue?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['BigDecimal']>;
};

export type HrPersonChangeKpiOrderBy = {
  createTime?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isQuantify?: Maybe<OrderBy>;
  kpiDetails?: Maybe<HrPersonChangeKpiDetailOrderBy>;
  name?: Maybe<OrderBy>;
  quantifyUnit?: Maybe<OrderBy>;
  quantifyValue?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type HrPersonChangePlanBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangePlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangePlanBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  planName?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreEndTime?: Maybe<DateComparisonExp>;
  scoreStartTime?: Maybe<DateComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyStaffs?: Maybe<HrPersonChangeSurveyStaffBoolExp>;
  template?: Maybe<HrPersonChangeTaskTemplateBoolExp>;
};

export type HrPersonChangePlanInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  planName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreEndTime?: Maybe<Scalars['Date']>;
  scoreStartTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyStaffs?: Maybe<Array<Maybe<HrPersonChangeSurveyStaffInput>>>;
  template?: Maybe<HrPersonChangeTaskTemplateInput>;
};

export type HrPersonChangePlanOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  planName?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreEndTime?: Maybe<OrderBy>;
  scoreStartTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyStaffs?: Maybe<HrPersonChangeSurveyStaffOrderBy>;
  template?: Maybe<HrPersonChangeTaskTemplateOrderBy>;
};

export type HrPersonChangeResultBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeResultBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeResultBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<HrPersonChangeSurveyStaffBoolExp>;
};

export type HrPersonChangeResultInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<HrPersonChangeSurveyStaffInput>;
};

export type HrPersonChangeResultOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<HrPersonChangeSurveyStaffOrderBy>;
};

export type HrPersonChangeResultSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeResultSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeResultSaveDtoBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<HrPersonChangeSaveDtoBoolExp>;
};

export type HrPersonChangeResultSaveDtoInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<HrPersonChangeSaveDtoInput>;
};

export type HrPersonChangeResultSaveDtoOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<HrPersonChangeSaveDtoOrderBy>;
};

export type HrPersonChangeSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeSaveDtoBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  questionnaireResults?: Maybe<HrPersonChangeResultSaveDtoBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<LocalDateTimeComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
};

export type HrPersonChangeSaveDtoInput = {
  id?: Maybe<Scalars['Long']>;
  questionnaireResults?: Maybe<Array<Maybe<HrPersonChangeResultSaveDtoInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type HrPersonChangeSaveDtoOrderBy = {
  id?: Maybe<OrderBy>;
  questionnaireResults?: Maybe<HrPersonChangeResultSaveDtoOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type HrPersonChangeSurveyStaffBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeSurveyStaffBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeSurveyStaffBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  questionnairePlan?: Maybe<HrPersonChangePlanBoolExp>;
  questionnaireResults?: Maybe<HrPersonChangeResultBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<DateComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyDepartmentId?: Maybe<IntegerComparisonExp>;
  surveyDepartmentName?: Maybe<StringComparisonExp>;
  surveyJobId?: Maybe<IntegerComparisonExp>;
  surveyJobName?: Maybe<StringComparisonExp>;
  surveyUserId?: Maybe<IntegerComparisonExp>;
  surveyUsername?: Maybe<StringComparisonExp>;
  updateState?: Maybe<IntegerComparisonExp>;
};

export type HrPersonChangeSurveyStaffInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  questionnairePlan?: Maybe<HrPersonChangePlanInput>;
  questionnaireResults?: Maybe<Array<Maybe<HrPersonChangeResultInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyDepartmentId?: Maybe<Scalars['Int']>;
  surveyDepartmentName?: Maybe<Scalars['String']>;
  surveyJobId?: Maybe<Scalars['Int']>;
  surveyJobName?: Maybe<Scalars['String']>;
  surveyUserId?: Maybe<Scalars['Int']>;
  surveyUsername?: Maybe<Scalars['String']>;
  updateState?: Maybe<Scalars['Int']>;
};

export type HrPersonChangeSurveyStaffOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  questionnairePlan?: Maybe<HrPersonChangePlanOrderBy>;
  questionnaireResults?: Maybe<HrPersonChangeResultOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyDepartmentId?: Maybe<OrderBy>;
  surveyDepartmentName?: Maybe<OrderBy>;
  surveyJobId?: Maybe<OrderBy>;
  surveyJobName?: Maybe<OrderBy>;
  surveyUserId?: Maybe<OrderBy>;
  surveyUsername?: Maybe<OrderBy>;
  updateState?: Maybe<OrderBy>;
};

export type HrPersonChangeTaskTemplateBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonChangeTaskTemplateBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonChangeTaskTemplateBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpis?: Maybe<HrPersonChangeKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  period?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type HrPersonChangeTaskTemplateInput = {
  createTime?: Maybe<Scalars['Date']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpis?: Maybe<Array<Maybe<HrPersonChangeKpiInput>>>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type HrPersonChangeTaskTemplateOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  period?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type HrPersonalInformationChangeConfigurationBoolExp = {
  _and?: Maybe<Array<Maybe<HrPersonalInformationChangeConfigurationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPersonalInformationChangeConfigurationBoolExp>>>;
  changeEndTime?: Maybe<DateComparisonExp>;
  changeStartTime?: Maybe<DateComparisonExp>;
  fieldType?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  informationField?: Maybe<StringComparisonExp>;
  informationFieldShow?: Maybe<StringComparisonExp>;
};

export type HrPersonalInformationChangeConfigurationInput = {
  changeEndTime?: Maybe<Scalars['Date']>;
  changeStartTime?: Maybe<Scalars['Date']>;
  fieldType?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  informationField?: Maybe<Scalars['String']>;
  informationFieldShow?: Maybe<Scalars['String']>;
};

export type HrPersonalInformationChangeConfigurationOrderBy = {
  changeEndTime?: Maybe<OrderBy>;
  changeStartTime?: Maybe<OrderBy>;
  fieldType?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  informationField?: Maybe<OrderBy>;
  informationFieldShow?: Maybe<OrderBy>;
};

export type HrPostCompetencyMiddleManagementBoolExp = {
  _and?: Maybe<Array<Maybe<HrPostCompetencyMiddleManagementBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPostCompetencyMiddleManagementBoolExp>>>;
  communicationCoordinationAbility?: Maybe<IntegerComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  innovationAbility?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  organizingAbility?: Maybe<IntegerComparisonExp>;
  post?: Maybe<StringComparisonExp>;
  professionalKnowledgeExperience?: Maybe<IntegerComparisonExp>;
  professionalTechnicalLevel?: Maybe<IntegerComparisonExp>;
  totalPoints?: Maybe<IntegerComparisonExp>;
};

export type HrPostCompetencyMiddleManagementInput = {
  communicationCoordinationAbility?: Maybe<Scalars['Int']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  innovationAbility?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizingAbility?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['String']>;
  professionalKnowledgeExperience?: Maybe<Scalars['Int']>;
  professionalTechnicalLevel?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['Int']>;
};

export type HrPostCompetencyMiddleManagementOrderBy = {
  communicationCoordinationAbility?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  innovationAbility?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizingAbility?: Maybe<OrderBy>;
  post?: Maybe<OrderBy>;
  professionalKnowledgeExperience?: Maybe<OrderBy>;
  professionalTechnicalLevel?: Maybe<OrderBy>;
  totalPoints?: Maybe<OrderBy>;
};

export type HrPostCompetencyTopManagementBoolExp = {
  _and?: Maybe<Array<Maybe<HrPostCompetencyTopManagementBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrPostCompetencyTopManagementBoolExp>>>;
  communicationCoordinationAbility?: Maybe<IntegerComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  innovationAbility?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  organizingAbility?: Maybe<IntegerComparisonExp>;
  post?: Maybe<StringComparisonExp>;
  professionalKnowledgeExperience?: Maybe<IntegerComparisonExp>;
  professionalTechnicalLevel?: Maybe<IntegerComparisonExp>;
  totalPoints?: Maybe<IntegerComparisonExp>;
};

export type HrPostCompetencyTopManagementInput = {
  communicationCoordinationAbility?: Maybe<Scalars['Int']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  innovationAbility?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizingAbility?: Maybe<Scalars['Int']>;
  post?: Maybe<Scalars['String']>;
  professionalKnowledgeExperience?: Maybe<Scalars['Int']>;
  professionalTechnicalLevel?: Maybe<Scalars['Int']>;
  totalPoints?: Maybe<Scalars['Int']>;
};

export type HrPostCompetencyTopManagementOrderBy = {
  communicationCoordinationAbility?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  innovationAbility?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizingAbility?: Maybe<OrderBy>;
  post?: Maybe<OrderBy>;
  professionalKnowledgeExperience?: Maybe<OrderBy>;
  professionalTechnicalLevel?: Maybe<OrderBy>;
  totalPoints?: Maybe<OrderBy>;
};

export type HrProbationAssessmentReportBoolExp = {
  _and?: Maybe<Array<Maybe<HrProbationAssessmentReportBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrProbationAssessmentReportBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  assessmentScore?: Maybe<StringComparisonExp>;
  dateBirth?: Maybe<DateComparisonExp>;
  departmentHeadOpinion?: Maybe<StringComparisonExp>;
  departmentLeaderChargeOpinion?: Maybe<StringComparisonExp>;
  education?: Maybe<StringComparisonExp>;
  employmentOriginalUnit?: Maybe<StringComparisonExp>;
  entryTime?: Maybe<DateComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  humanResourcesDepartmentOpinion?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  major?: Maybe<StringComparisonExp>;
  politicalOutlook?: Maybe<StringComparisonExp>;
  probationDepartment?: Maybe<StringComparisonExp>;
  probationJob?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
  technicalTitle?: Maybe<StringComparisonExp>;
  workSummary?: Maybe<StringComparisonExp>;
  workingYears?: Maybe<StringComparisonExp>;
};

export type HrProbationAssessmentReportInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  assessmentScore?: Maybe<Scalars['String']>;
  dateBirth?: Maybe<Scalars['Date']>;
  departmentHeadOpinion?: Maybe<Scalars['String']>;
  departmentLeaderChargeOpinion?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  employmentOriginalUnit?: Maybe<Scalars['String']>;
  entryTime?: Maybe<Scalars['Date']>;
  gender?: Maybe<Scalars['String']>;
  humanResourcesDepartmentOpinion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  major?: Maybe<Scalars['String']>;
  politicalOutlook?: Maybe<Scalars['String']>;
  probationDepartment?: Maybe<Scalars['String']>;
  probationJob?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  technicalTitle?: Maybe<Scalars['String']>;
  workSummary?: Maybe<Scalars['String']>;
  workingYears?: Maybe<Scalars['String']>;
};

export type HrProbationAssessmentReportOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  assessmentScore?: Maybe<OrderBy>;
  dateBirth?: Maybe<OrderBy>;
  departmentHeadOpinion?: Maybe<OrderBy>;
  departmentLeaderChargeOpinion?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  employmentOriginalUnit?: Maybe<OrderBy>;
  entryTime?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  humanResourcesDepartmentOpinion?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  major?: Maybe<OrderBy>;
  politicalOutlook?: Maybe<OrderBy>;
  probationDepartment?: Maybe<OrderBy>;
  probationJob?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  technicalTitle?: Maybe<OrderBy>;
  workSummary?: Maybe<OrderBy>;
  workingYears?: Maybe<OrderBy>;
};

export type HrRankPromotionApplicationBoolExp = {
  _and?: Maybe<Array<Maybe<HrRankPromotionApplicationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrRankPromotionApplicationBoolExp>>>;
  academicDegree?: Maybe<StringComparisonExp>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  birthPlace?: Maybe<StringComparisonExp>;
  chairmanOpinion?: Maybe<StringComparisonExp>;
  currentPosition?: Maybe<StringComparisonExp>;
  currentRank?: Maybe<StringComparisonExp>;
  dateBirth?: Maybe<DateComparisonExp>;
  departmentHeadOpinion?: Maybe<StringComparisonExp>;
  departmentLeaderChargeOpinion?: Maybe<StringComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  generalManagerOpinion?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  hrDepartmentLeaderChargeOpinionOpinion?: Maybe<StringComparisonExp>;
  humanResourcesDepartmentOpinion?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  nation?: Maybe<StringComparisonExp>;
  nativePlace?: Maybe<StringComparisonExp>;
  politicalOutlook?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  proposedPromotionLevel?: Maybe<StringComparisonExp>;
  qualification?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  technicalPosition?: Maybe<StringComparisonExp>;
  workingHours?: Maybe<StringComparisonExp>;
};

export type HrRankPromotionApplicationInput = {
  academicDegree?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  birthPlace?: Maybe<Scalars['String']>;
  chairmanOpinion?: Maybe<Scalars['String']>;
  currentPosition?: Maybe<Scalars['String']>;
  currentRank?: Maybe<Scalars['String']>;
  dateBirth?: Maybe<Scalars['Date']>;
  departmentHeadOpinion?: Maybe<Scalars['String']>;
  departmentLeaderChargeOpinion?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  generalManagerOpinion?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  hrDepartmentLeaderChargeOpinionOpinion?: Maybe<Scalars['String']>;
  humanResourcesDepartmentOpinion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  nation?: Maybe<Scalars['String']>;
  nativePlace?: Maybe<Scalars['String']>;
  politicalOutlook?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  proposedPromotionLevel?: Maybe<Scalars['String']>;
  qualification?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  technicalPosition?: Maybe<Scalars['String']>;
  workingHours?: Maybe<Scalars['String']>;
};

export type HrRankPromotionApplicationOrderBy = {
  academicDegree?: Maybe<OrderBy>;
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  birthPlace?: Maybe<OrderBy>;
  chairmanOpinion?: Maybe<OrderBy>;
  currentPosition?: Maybe<OrderBy>;
  currentRank?: Maybe<OrderBy>;
  dateBirth?: Maybe<OrderBy>;
  departmentHeadOpinion?: Maybe<OrderBy>;
  departmentLeaderChargeOpinion?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  generalManagerOpinion?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  hrDepartmentLeaderChargeOpinionOpinion?: Maybe<OrderBy>;
  humanResourcesDepartmentOpinion?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  nation?: Maybe<OrderBy>;
  nativePlace?: Maybe<OrderBy>;
  politicalOutlook?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  proposedPromotionLevel?: Maybe<OrderBy>;
  qualification?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  technicalPosition?: Maybe<OrderBy>;
  workingHours?: Maybe<OrderBy>;
};

export type HrRenewalLaborContractBoolExp = {
  _and?: Maybe<Array<Maybe<HrRenewalLaborContractBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrRenewalLaborContractBoolExp>>>;
  academicDegree?: Maybe<StringComparisonExp>;
  age?: Maybe<IntegerComparisonExp>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  businessSkillScore?: Maybe<StringComparisonExp>;
  chairmanOpinions?: Maybe<StringComparisonExp>;
  collaborativeScoring?: Maybe<StringComparisonExp>;
  complianceScore?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentHeadOpinions?: Maybe<StringComparisonExp>;
  departmentLeaderChargeOpinions?: Maybe<StringComparisonExp>;
  education?: Maybe<StringComparisonExp>;
  enterpriseScore?: Maybe<StringComparisonExp>;
  entryTime?: Maybe<DateComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  generalManagerOpinions?: Maybe<StringComparisonExp>;
  humanResourcesDepartmentChargeOpinions?: Maybe<StringComparisonExp>;
  humanResourcesDepartmentOpinions?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  initiativeScore?: Maybe<StringComparisonExp>;
  integritySelfDisciplineScore?: Maybe<StringComparisonExp>;
  job?: Maybe<StringComparisonExp>;
  jobPerformanceScore?: Maybe<StringComparisonExp>;
  jobResponsibilityScore?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  politicalOutlook?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  responsibilityScore?: Maybe<StringComparisonExp>;
  teamSpiritScore?: Maybe<StringComparisonExp>;
  workEfficiencyScore?: Maybe<StringComparisonExp>;
  workQualityScore?: Maybe<StringComparisonExp>;
};

export type HrRenewalLaborContractInput = {
  academicDegree?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  businessSkillScore?: Maybe<Scalars['String']>;
  chairmanOpinions?: Maybe<Scalars['String']>;
  collaborativeScoring?: Maybe<Scalars['String']>;
  complianceScore?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentHeadOpinions?: Maybe<Scalars['String']>;
  departmentLeaderChargeOpinions?: Maybe<Scalars['String']>;
  education?: Maybe<Scalars['String']>;
  enterpriseScore?: Maybe<Scalars['String']>;
  entryTime?: Maybe<Scalars['Date']>;
  gender?: Maybe<Scalars['String']>;
  generalManagerOpinions?: Maybe<Scalars['String']>;
  humanResourcesDepartmentChargeOpinions?: Maybe<Scalars['String']>;
  humanResourcesDepartmentOpinions?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  initiativeScore?: Maybe<Scalars['String']>;
  integritySelfDisciplineScore?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  jobPerformanceScore?: Maybe<Scalars['String']>;
  jobResponsibilityScore?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  politicalOutlook?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  responsibilityScore?: Maybe<Scalars['String']>;
  teamSpiritScore?: Maybe<Scalars['String']>;
  workEfficiencyScore?: Maybe<Scalars['String']>;
  workQualityScore?: Maybe<Scalars['String']>;
};

export type HrRenewalLaborContractOrderBy = {
  academicDegree?: Maybe<OrderBy>;
  age?: Maybe<OrderBy>;
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  businessSkillScore?: Maybe<OrderBy>;
  chairmanOpinions?: Maybe<OrderBy>;
  collaborativeScoring?: Maybe<OrderBy>;
  complianceScore?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentHeadOpinions?: Maybe<OrderBy>;
  departmentLeaderChargeOpinions?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  enterpriseScore?: Maybe<OrderBy>;
  entryTime?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  generalManagerOpinions?: Maybe<OrderBy>;
  humanResourcesDepartmentChargeOpinions?: Maybe<OrderBy>;
  humanResourcesDepartmentOpinions?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  initiativeScore?: Maybe<OrderBy>;
  integritySelfDisciplineScore?: Maybe<OrderBy>;
  job?: Maybe<OrderBy>;
  jobPerformanceScore?: Maybe<OrderBy>;
  jobResponsibilityScore?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  politicalOutlook?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  responsibilityScore?: Maybe<OrderBy>;
  teamSpiritScore?: Maybe<OrderBy>;
  workEfficiencyScore?: Maybe<OrderBy>;
  workQualityScore?: Maybe<OrderBy>;
};

export type HrSalaryBoolExp = {
  _and?: Maybe<Array<Maybe<HrSalaryBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrSalaryBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  educationSalary?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  rankSalary?: Maybe<BigDecimalComparisonExp>;
  rewardAssess?: Maybe<BigDecimalComparisonExp>;
  salaryType?: Maybe<LongComparisonExp>;
  stationSalary?: Maybe<BigDecimalComparisonExp>;
  taskAssess?: Maybe<BigDecimalComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
};

export type HrSalaryEducationBoolExp = {
  _and?: Maybe<Array<Maybe<HrSalaryEducationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrSalaryEducationBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  education?: Maybe<StringComparisonExp>;
  educationId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  monthSalary?: Maybe<BigDecimalComparisonExp>;
};

export type HrSalaryEducationInput = {
  createTime?: Maybe<Scalars['Date']>;
  education?: Maybe<Scalars['String']>;
  educationId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  monthSalary?: Maybe<Scalars['BigDecimal']>;
};

export type HrSalaryEducationOrderBy = {
  createTime?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  educationId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  monthSalary?: Maybe<OrderBy>;
};

export type HrSalaryInput = {
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  educationSalary?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  rankSalary?: Maybe<Scalars['BigDecimal']>;
  rewardAssess?: Maybe<Scalars['BigDecimal']>;
  salaryType?: Maybe<Scalars['Long']>;
  stationSalary?: Maybe<Scalars['BigDecimal']>;
  taskAssess?: Maybe<Scalars['BigDecimal']>;
  userId?: Maybe<Scalars['Long']>;
};

export type HrSalaryOrderBy = {
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  educationSalary?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  rankSalary?: Maybe<OrderBy>;
  rewardAssess?: Maybe<OrderBy>;
  salaryType?: Maybe<OrderBy>;
  stationSalary?: Maybe<OrderBy>;
  taskAssess?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

export type HrSalaryPostBoolExp = {
  _and?: Maybe<Array<Maybe<HrSalaryPostBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrSalaryPostBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  monthSalary?: Maybe<BigDecimalComparisonExp>;
  post?: Maybe<StringComparisonExp>;
  postId?: Maybe<LongComparisonExp>;
  postSalaryGrade?: Maybe<IntegerComparisonExp>;
  postType?: Maybe<StringComparisonExp>;
  postTypeId?: Maybe<LongComparisonExp>;
};

export type HrSalaryPostInput = {
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  monthSalary?: Maybe<Scalars['BigDecimal']>;
  post?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['Long']>;
  postSalaryGrade?: Maybe<Scalars['Int']>;
  postType?: Maybe<Scalars['String']>;
  postTypeId?: Maybe<Scalars['Long']>;
};

export type HrSalaryPostOrderBy = {
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  monthSalary?: Maybe<OrderBy>;
  post?: Maybe<OrderBy>;
  postId?: Maybe<OrderBy>;
  postSalaryGrade?: Maybe<OrderBy>;
  postType?: Maybe<OrderBy>;
  postTypeId?: Maybe<OrderBy>;
};

export type HrSecondmentJobTransferBoolExp = {
  _and?: Maybe<Array<Maybe<HrSecondmentJobTransferBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrSecondmentJobTransferBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  birthplace?: Maybe<StringComparisonExp>;
  chairmanOpinion?: Maybe<StringComparisonExp>;
  commentsGeneralManager?: Maybe<StringComparisonExp>;
  currentWorkUnit?: Maybe<StringComparisonExp>;
  currentWorkUnitId?: Maybe<LongComparisonExp>;
  dateBirth?: Maybe<DateComparisonExp>;
  familiarWithMajor?: Maybe<StringComparisonExp>;
  fullTimeGraduateSchool?: Maybe<StringComparisonExp>;
  fullTimeMajor?: Maybe<StringComparisonExp>;
  fullTimeSchooling?: Maybe<StringComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  graduateCollegesServiceEducation?: Maybe<StringComparisonExp>;
  health?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  nation?: Maybe<StringComparisonExp>;
  nativePlace?: Maybe<StringComparisonExp>;
  onTheJobEducation?: Maybe<StringComparisonExp>;
  onTheJobEducationMajors?: Maybe<StringComparisonExp>;
  opinionsDepartmentHeadCurrentWorkUnit?: Maybe<StringComparisonExp>;
  opinionsLeadersChargeCurrentWorkUnitDepartment?: Maybe<StringComparisonExp>;
  opinionsLeadersChargeSecondmentDepartment?: Maybe<StringComparisonExp>;
  opinionsManagementLeadersHumanResourcesDepartment?: Maybe<StringComparisonExp>;
  opinionsPersonChargeSecondedDepartment?: Maybe<StringComparisonExp>;
  preliminaryCommentsHumanResources?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  resume?: Maybe<StringComparisonExp>;
  secondmentDepartment?: Maybe<StringComparisonExp>;
  secondmentDepartmentId?: Maybe<LongComparisonExp>;
  secondmentEndTime?: Maybe<DateComparisonExp>;
  secondmentStartTime?: Maybe<DateComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
  technicalPosition?: Maybe<StringComparisonExp>;
  timeJoinParty?: Maybe<DateComparisonExp>;
  transferredPersonId?: Maybe<LongComparisonExp>;
  workingHours?: Maybe<StringComparisonExp>;
};

export type HrSecondmentJobTransferInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  birthplace?: Maybe<Scalars['String']>;
  chairmanOpinion?: Maybe<Scalars['String']>;
  commentsGeneralManager?: Maybe<Scalars['String']>;
  currentWorkUnit?: Maybe<Scalars['String']>;
  currentWorkUnitId?: Maybe<Scalars['Long']>;
  dateBirth?: Maybe<Scalars['Date']>;
  familiarWithMajor?: Maybe<Scalars['String']>;
  fullTimeGraduateSchool?: Maybe<Scalars['String']>;
  fullTimeMajor?: Maybe<Scalars['String']>;
  fullTimeSchooling?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  graduateCollegesServiceEducation?: Maybe<Scalars['String']>;
  health?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  nation?: Maybe<Scalars['String']>;
  nativePlace?: Maybe<Scalars['String']>;
  onTheJobEducation?: Maybe<Scalars['String']>;
  onTheJobEducationMajors?: Maybe<Scalars['String']>;
  opinionsDepartmentHeadCurrentWorkUnit?: Maybe<Scalars['String']>;
  opinionsLeadersChargeCurrentWorkUnitDepartment?: Maybe<Scalars['String']>;
  opinionsLeadersChargeSecondmentDepartment?: Maybe<Scalars['String']>;
  opinionsManagementLeadersHumanResourcesDepartment?: Maybe<Scalars['String']>;
  opinionsPersonChargeSecondedDepartment?: Maybe<Scalars['String']>;
  preliminaryCommentsHumanResources?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  resume?: Maybe<Scalars['String']>;
  secondmentDepartment?: Maybe<Scalars['String']>;
  secondmentDepartmentId?: Maybe<Scalars['Long']>;
  secondmentEndTime?: Maybe<Scalars['Date']>;
  secondmentStartTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Int']>;
  technicalPosition?: Maybe<Scalars['String']>;
  timeJoinParty?: Maybe<Scalars['Date']>;
  transferredPersonId?: Maybe<Scalars['Long']>;
  workingHours?: Maybe<Scalars['String']>;
};

export type HrSecondmentJobTransferOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  birthplace?: Maybe<OrderBy>;
  chairmanOpinion?: Maybe<OrderBy>;
  commentsGeneralManager?: Maybe<OrderBy>;
  currentWorkUnit?: Maybe<OrderBy>;
  currentWorkUnitId?: Maybe<OrderBy>;
  dateBirth?: Maybe<OrderBy>;
  familiarWithMajor?: Maybe<OrderBy>;
  fullTimeGraduateSchool?: Maybe<OrderBy>;
  fullTimeMajor?: Maybe<OrderBy>;
  fullTimeSchooling?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  graduateCollegesServiceEducation?: Maybe<OrderBy>;
  health?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  nation?: Maybe<OrderBy>;
  nativePlace?: Maybe<OrderBy>;
  onTheJobEducation?: Maybe<OrderBy>;
  onTheJobEducationMajors?: Maybe<OrderBy>;
  opinionsDepartmentHeadCurrentWorkUnit?: Maybe<OrderBy>;
  opinionsLeadersChargeCurrentWorkUnitDepartment?: Maybe<OrderBy>;
  opinionsLeadersChargeSecondmentDepartment?: Maybe<OrderBy>;
  opinionsManagementLeadersHumanResourcesDepartment?: Maybe<OrderBy>;
  opinionsPersonChargeSecondedDepartment?: Maybe<OrderBy>;
  preliminaryCommentsHumanResources?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  resume?: Maybe<OrderBy>;
  secondmentDepartment?: Maybe<OrderBy>;
  secondmentDepartmentId?: Maybe<OrderBy>;
  secondmentEndTime?: Maybe<OrderBy>;
  secondmentStartTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  technicalPosition?: Maybe<OrderBy>;
  timeJoinParty?: Maybe<OrderBy>;
  transferredPersonId?: Maybe<OrderBy>;
  workingHours?: Maybe<OrderBy>;
};

export type HrStaffInformationBoolExp = {
  _and?: Maybe<Array<Maybe<HrStaffInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrStaffInformationBoolExp>>>;
  age?: Maybe<IntegerComparisonExp>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  compellation?: Maybe<StringComparisonExp>;
  contactInformation?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentDetailsId?: Maybe<LongComparisonExp>;
  education?: Maybe<StringComparisonExp>;
  gender?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobs?: Maybe<StringComparisonExp>;
  jobsId?: Maybe<LongComparisonExp>;
  rank?: Maybe<StringComparisonExp>;
  rankScore?: Maybe<IntegerComparisonExp>;
  salary?: Maybe<BigDecimalComparisonExp>;
  status?: Maybe<IntegerComparisonExp>;
  workingYears?: Maybe<IntegerComparisonExp>;
};

export type HrStaffInformationInput = {
  age?: Maybe<Scalars['Int']>;
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  compellation?: Maybe<Scalars['String']>;
  contactInformation?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentDetailsId?: Maybe<Scalars['Long']>;
  education?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  jobs?: Maybe<Scalars['String']>;
  jobsId?: Maybe<Scalars['Long']>;
  rank?: Maybe<Scalars['String']>;
  rankScore?: Maybe<Scalars['Int']>;
  salary?: Maybe<Scalars['BigDecimal']>;
  status?: Maybe<Scalars['Int']>;
  workingYears?: Maybe<Scalars['Int']>;
};

export type HrStaffInformationOrderBy = {
  age?: Maybe<OrderBy>;
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  compellation?: Maybe<OrderBy>;
  contactInformation?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentDetailsId?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobs?: Maybe<OrderBy>;
  jobsId?: Maybe<OrderBy>;
  rank?: Maybe<OrderBy>;
  rankScore?: Maybe<OrderBy>;
  salary?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  workingYears?: Maybe<OrderBy>;
};

export type HrStaffTitelBoolExp = {
  _and?: Maybe<Array<Maybe<HrStaffTitelBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrStaffTitelBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  staffName?: Maybe<StringComparisonExp>;
  titelId?: Maybe<LongComparisonExp>;
  titelName?: Maybe<StringComparisonExp>;
};

export type HrStaffTitelInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
  staffId?: Maybe<Scalars['Long']>;
  staffName?: Maybe<Scalars['String']>;
  titelId?: Maybe<Scalars['Long']>;
  titelName?: Maybe<Scalars['String']>;
};

export type HrStaffTitelOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  staffName?: Maybe<OrderBy>;
  titelId?: Maybe<OrderBy>;
  titelName?: Maybe<OrderBy>;
};

export type HrTestBoolExp = {
  _and?: Maybe<Array<Maybe<HrTestBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTestBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  uname?: Maybe<StringComparisonExp>;
};

export type HrTestInput = {
  id?: Maybe<Scalars['Long']>;
  uname?: Maybe<Scalars['String']>;
};

export type HrTestOrderBy = {
  id?: Maybe<OrderBy>;
  uname?: Maybe<OrderBy>;
};

export type HrTitleInformationBoolExp = {
  _and?: Maybe<Array<Maybe<HrTitleInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTitleInformationBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  describe?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  points?: Maybe<IntegerComparisonExp>;
  titelName?: Maybe<StringComparisonExp>;
};

export type HrTitleInformationInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  describe?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  points?: Maybe<Scalars['Int']>;
  titelName?: Maybe<Scalars['String']>;
};

export type HrTitleInformationOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  describe?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  points?: Maybe<OrderBy>;
  titelName?: Maybe<OrderBy>;
};

export type HrTrainingMaterialsBoolExp = {
  _and?: Maybe<Array<Maybe<HrTrainingMaterialsBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTrainingMaterialsBoolExp>>>;
  alternateField1?: Maybe<StringComparisonExp>;
  alternateField2?: Maybe<StringComparisonExp>;
  courseTopics?: Maybe<StringComparisonExp>;
  courseType?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  lecturer?: Maybe<StringComparisonExp>;
  numberEadings?: Maybe<IntegerComparisonExp>;
  satisfactionScore?: Maybe<IntegerComparisonExp>;
  trainingEffectiveness?: Maybe<StringComparisonExp>;
  trainingInstitutions?: Maybe<StringComparisonExp>;
  trainingTime?: Maybe<DateComparisonExp>;
};

export type HrTrainingMaterialsInput = {
  alternateField1?: Maybe<Scalars['String']>;
  alternateField2?: Maybe<Scalars['String']>;
  courseTopics?: Maybe<Scalars['String']>;
  courseType?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  lecturer?: Maybe<Scalars['String']>;
  numberEadings?: Maybe<Scalars['Int']>;
  satisfactionScore?: Maybe<Scalars['Int']>;
  trainingEffectiveness?: Maybe<Scalars['String']>;
  trainingInstitutions?: Maybe<Scalars['String']>;
  trainingTime?: Maybe<Scalars['Date']>;
};

export type HrTrainingMaterialsOrderBy = {
  alternateField1?: Maybe<OrderBy>;
  alternateField2?: Maybe<OrderBy>;
  courseTopics?: Maybe<OrderBy>;
  courseType?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lecturer?: Maybe<OrderBy>;
  numberEadings?: Maybe<OrderBy>;
  satisfactionScore?: Maybe<OrderBy>;
  trainingEffectiveness?: Maybe<OrderBy>;
  trainingInstitutions?: Maybe<OrderBy>;
  trainingTime?: Maybe<OrderBy>;
};

export type HrTrainingRecordBoolExp = {
  _and?: Maybe<Array<Maybe<HrTrainingRecordBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTrainingRecordBoolExp>>>;
  department?: Maybe<HrTrainingRecordDepartmentRatioyBoolExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  trainingAgency?: Maybe<StringComparisonExp>;
  trainingCost?: Maybe<BigDecimalComparisonExp>;
  trainingInstructors?: Maybe<StringComparisonExp>;
  trainingPlace?: Maybe<StringComparisonExp>;
  trainingSubject?: Maybe<StringComparisonExp>;
  trainingType?: Maybe<StringComparisonExp>;
};

export type HrTrainingRecordDepartmentRatioyBoolExp = {
  _and?: Maybe<Array<Maybe<HrTrainingRecordDepartmentRatioyBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTrainingRecordDepartmentRatioyBoolExp>>>;
  departmentId?: Maybe<LongComparisonExp>;
  departmentName?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  trainingRecord?: Maybe<HrTrainingRecordBoolExp>;
};

export type HrTrainingRecordDepartmentRatioyInput = {
  departmentId?: Maybe<Scalars['Long']>;
  departmentName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  trainingRecord?: Maybe<HrTrainingRecordInput>;
};

export type HrTrainingRecordDepartmentRatioyOrderBy = {
  departmentId?: Maybe<OrderBy>;
  departmentName?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  trainingRecord?: Maybe<HrTrainingRecordOrderBy>;
};

export type HrTrainingRecordInput = {
  department?: Maybe<Array<Maybe<HrTrainingRecordDepartmentRatioyInput>>>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  startTime?: Maybe<Scalars['Date']>;
  trainingAgency?: Maybe<Scalars['String']>;
  trainingCost?: Maybe<Scalars['BigDecimal']>;
  trainingInstructors?: Maybe<Scalars['String']>;
  trainingPlace?: Maybe<Scalars['String']>;
  trainingSubject?: Maybe<Scalars['String']>;
  trainingType?: Maybe<Scalars['String']>;
};

export type HrTrainingRecordOrderBy = {
  department?: Maybe<HrTrainingRecordDepartmentRatioyOrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  trainingAgency?: Maybe<OrderBy>;
  trainingCost?: Maybe<OrderBy>;
  trainingInstructors?: Maybe<OrderBy>;
  trainingPlace?: Maybe<OrderBy>;
  trainingSubject?: Maybe<OrderBy>;
  trainingType?: Maybe<OrderBy>;
};

export type HrTrainingTypeBoolExp = {
  _and?: Maybe<Array<Maybe<HrTrainingTypeBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrTrainingTypeBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  typeName?: Maybe<StringComparisonExp>;
};

export type HrTrainingTypeInput = {
  id?: Maybe<Scalars['Long']>;
  typeName?: Maybe<Scalars['String']>;
};

export type HrTrainingTypeOrderBy = {
  id?: Maybe<OrderBy>;
  typeName?: Maybe<OrderBy>;
};

export type HrWelfareAnnuityBoolExp = {
  _and?: Maybe<Array<Maybe<HrWelfareAnnuityBoolExp>>>;
  _or?: Maybe<Array<Maybe<HrWelfareAnnuityBoolExp>>>;
  annuityTotle?: Maybe<BigDecimalComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  month?: Maybe<StringComparisonExp>;
  selfPayment?: Maybe<BigDecimalComparisonExp>;
  subtotal?: Maybe<BigDecimalComparisonExp>;
  unitPayment?: Maybe<BigDecimalComparisonExp>;
  userName?: Maybe<StringComparisonExp>;
  years?: Maybe<LongComparisonExp>;
};

export type HrWelfareAnnuityInput = {
  annuityTotle?: Maybe<Scalars['BigDecimal']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  month?: Maybe<Scalars['String']>;
  selfPayment?: Maybe<Scalars['BigDecimal']>;
  subtotal?: Maybe<Scalars['BigDecimal']>;
  unitPayment?: Maybe<Scalars['BigDecimal']>;
  userName?: Maybe<Scalars['String']>;
  years?: Maybe<Scalars['Long']>;
};

export type HrWelfareAnnuityOrderBy = {
  annuityTotle?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  month?: Maybe<OrderBy>;
  selfPayment?: Maybe<OrderBy>;
  subtotal?: Maybe<OrderBy>;
  unitPayment?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
  years?: Maybe<OrderBy>;
};

export type IntegerComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _ge?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntegerComparisonExpInput = {
  _eq?: Maybe<Scalars['Int']>;
  _ge?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Int']>;
  _lt?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type JobBoolExpInput = {
  _and?: Maybe<Array<JobBoolExpInput>>;
  _or?: Maybe<Array<JobBoolExpInput>>;
  company?: Maybe<CompanyBoolExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  dutyDesc?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  isPrimary?: Maybe<BooleanComparisonExpInput>;
  isSecurity?: Maybe<BooleanComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  posLevel?: Maybe<IntegerComparisonExpInput>;
  posType?: Maybe<IntegerComparisonExpInput>;
  sort?: Maybe<IntegerComparisonExpInput>;
  staffs?: Maybe<BaseStaffBoolExpInput>;
};

export type JobInput = {
  company?: Maybe<CompanyInput>;
  description?: Maybe<Scalars['String']>;
  dutyDesc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  isSecurity?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  posLevel?: Maybe<Scalars['Int']>;
  posType?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  staffs?: Maybe<Array<BaseStaffInput>>;
};

export type JobOrderByInput = {
  company?: Maybe<CompanyOrderByInput>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  dutyDesc?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isPrimary?: Maybe<OrderBy>;
  isSecurity?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  posLevel?: Maybe<OrderBy>;
  posType?: Maybe<OrderBy>;
  sort?: Maybe<OrderBy>;
};

export type LocalDateTimeComparisonExp = {
  _eq?: Maybe<Scalars['LocalDateTime']>;
  _ge?: Maybe<Scalars['LocalDateTime']>;
  _gt?: Maybe<Scalars['LocalDateTime']>;
  _in?: Maybe<Array<Maybe<Scalars['LocalDateTime']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['LocalDateTime']>;
  _lt?: Maybe<Scalars['LocalDateTime']>;
  _neq?: Maybe<Scalars['LocalDateTime']>;
  _nin?: Maybe<Array<Maybe<Scalars['LocalDateTime']>>>;
};

export type LocalDateTimeComparisonExpInput = {
  _eq?: Maybe<Scalars['LocalDateTime']>;
  _ge?: Maybe<Scalars['LocalDateTime']>;
  _gt?: Maybe<Scalars['LocalDateTime']>;
  _in?: Maybe<Array<Scalars['LocalDateTime']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['LocalDateTime']>;
  _lt?: Maybe<Scalars['LocalDateTime']>;
  _neq?: Maybe<Scalars['LocalDateTime']>;
  _nin?: Maybe<Array<Scalars['LocalDateTime']>>;
};

export type LongComparisonExp = {
  _eq?: Maybe<Scalars['Long']>;
  _ge?: Maybe<Scalars['Long']>;
  _gt?: Maybe<Scalars['Long']>;
  _in?: Maybe<Array<Maybe<Scalars['Long']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Long']>;
  _lt?: Maybe<Scalars['Long']>;
  _neq?: Maybe<Scalars['Long']>;
  _nin?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

export type LongComparisonExpInput = {
  _eq?: Maybe<Scalars['Long']>;
  _ge?: Maybe<Scalars['Long']>;
  _gt?: Maybe<Scalars['Long']>;
  _in?: Maybe<Array<Scalars['Long']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['Long']>;
  _lt?: Maybe<Scalars['Long']>;
  _neq?: Maybe<Scalars['Long']>;
  _nin?: Maybe<Array<Scalars['Long']>>;
};

export type MessageBodyInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MessageInput = {
  code?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  messageBody?: Maybe<Array<MessageBodyInput>>;
  receiver?: Maybe<Scalars['Long']>;
  receiverName?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['Long']>;
  senderName?: Maybe<Scalars['String']>;
  templateId?: Maybe<Scalars['Long']>;
  title?: Maybe<Scalars['String']>;
  uniqueIdentification?: Maybe<Scalars['String']>;
};

export type OaAdviceListBoolExp = {
  _and?: Maybe<Array<Maybe<OaAdviceListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaAdviceListBoolExp>>>;
  anonymity?: Maybe<StringComparisonExp>;
  content?: Maybe<StringComparisonExp>;
  date?: Maybe<DateComparisonExp>;
  departmentObject?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type OaAdviceListInput = {
  anonymity?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  departmentObject?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
};

export type OaAdviceListOrderBy = {
  anonymity?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  departmentObject?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type OaAdviceParticularsBoolExp = {
  _and?: Maybe<Array<Maybe<OaAdviceParticularsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaAdviceParticularsBoolExp>>>;
  anonymity?: Maybe<StringComparisonExp>;
  constructionContent?: Maybe<StringComparisonExp>;
  date?: Maybe<DateComparisonExp>;
  departmentObject?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  replyContent?: Maybe<StringComparisonExp>;
};

export type OaAdviceParticularsInput = {
  anonymity?: Maybe<Scalars['String']>;
  constructionContent?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  departmentObject?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  replyContent?: Maybe<Scalars['String']>;
};

export type OaAdviceParticularsOrderBy = {
  anonymity?: Maybe<OrderBy>;
  constructionContent?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  departmentObject?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  replyContent?: Maybe<OrderBy>;
};

export type OaAnnouncementNoticeBoolExp = {
  _and?: Maybe<Array<Maybe<OaAnnouncementNoticeBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaAnnouncementNoticeBoolExp>>>;
  context?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  noticeFile?: Maybe<OaFileBoolExp>;
  publisher?: Maybe<StringComparisonExp>;
  push?: Maybe<BooleanComparisonExp>;
  readers?: Maybe<StringComparisonExp>;
  readingRange?: Maybe<StringComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  top?: Maybe<BooleanComparisonExp>;
  type?: Maybe<OaAnnouncementNoticeTypeSettingBoolExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaAnnouncementNoticeInput = {
  context?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  noticeFile?: Maybe<Array<Maybe<OaFileInput>>>;
  publisher?: Maybe<Scalars['String']>;
  push?: Maybe<Scalars['Boolean']>;
  readers?: Maybe<Scalars['String']>;
  readingRange?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Boolean']>;
  type?: Maybe<OaAnnouncementNoticeTypeSettingInput>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaAnnouncementNoticeOrderBy = {
  context?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  publisher?: Maybe<OrderBy>;
  push?: Maybe<OrderBy>;
  readers?: Maybe<OrderBy>;
  readingRange?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  top?: Maybe<OrderBy>;
  type?: Maybe<OaAnnouncementNoticeTypeSettingOrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaAnnouncementNoticeTypeSettingBoolExp = {
  _and?: Maybe<Array<Maybe<OaAnnouncementNoticeTypeSettingBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaAnnouncementNoticeTypeSettingBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  noticeType?: Maybe<OaAnnouncementNoticeBoolExp>;
  remarks?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaAnnouncementNoticeTypeSettingInput = {
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  noticeType?: Maybe<Array<Maybe<OaAnnouncementNoticeInput>>>;
  remarks?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaAnnouncementNoticeTypeSettingOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  noticeType?: Maybe<OaAnnouncementNoticeOrderBy>;
  remarks?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaAskLeaveListBoolExp = {
  _and?: Maybe<Array<Maybe<OaAskLeaveListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaAskLeaveListBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  departmentId?: Maybe<LongComparisonExp>;
  departmentName?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaveCategory?: Maybe<IntegerComparisonExp>;
  people?: Maybe<StringComparisonExp>;
  peopleId?: Maybe<LongComparisonExp>;
  reasonForLeave?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  totalDays?: Maybe<LongComparisonExp>;
};

export type OaAskLeaveListInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  departmentId?: Maybe<Scalars['Long']>;
  departmentName?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  leaveCategory?: Maybe<Scalars['Int']>;
  people?: Maybe<Scalars['String']>;
  peopleId?: Maybe<Scalars['Long']>;
  reasonForLeave?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Date']>;
  totalDays?: Maybe<Scalars['Long']>;
};

export type OaAskLeaveListOrderBy = {
  departmentId?: Maybe<OrderBy>;
  departmentName?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaveCategory?: Maybe<OrderBy>;
  people?: Maybe<OrderBy>;
  peopleId?: Maybe<OrderBy>;
  reasonForLeave?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  totalDays?: Maybe<OrderBy>;
};

export type OaCarRentApplyBoolExp = {
  _and?: Maybe<Array<Maybe<OaCarRentApplyBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCarRentApplyBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reatCost?: Maybe<BigDecimalComparisonExp>;
  reatMotorcycleType?: Maybe<StringComparisonExp>;
  reatRemark?: Maybe<StringComparisonExp>;
  rentName?: Maybe<StringComparisonExp>;
  rentPhotoTimeLimit?: Maybe<IntegerComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaCarRentApplyInput = {
  agent?: Maybe<Scalars['Int']>;
  applicationTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reatCost?: Maybe<Scalars['BigDecimal']>;
  reatMotorcycleType?: Maybe<Scalars['String']>;
  reatRemark?: Maybe<Scalars['String']>;
  rentName?: Maybe<Scalars['String']>;
  rentPhotoTimeLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaCarRentApplyOrderBy = {
  agent?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reatCost?: Maybe<OrderBy>;
  reatMotorcycleType?: Maybe<OrderBy>;
  reatRemark?: Maybe<OrderBy>;
  rentName?: Maybe<OrderBy>;
  rentPhotoTimeLimit?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaCarRentBoolExp = {
  _and?: Maybe<Array<Maybe<OaCarRentBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCarRentBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  reatCost?: Maybe<BigDecimalComparisonExp>;
  reatMotorcycleType?: Maybe<StringComparisonExp>;
  reatRemark?: Maybe<StringComparisonExp>;
  rentName?: Maybe<StringComparisonExp>;
  rentPhotoTimeLimit?: Maybe<IntegerComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaCarRentEndBoolExp = {
  _and?: Maybe<Array<Maybe<OaCarRentEndBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCarRentEndBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaCarRentEndInput = {
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaCarRentEndOrderBy = {
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaCarRentInput = {
  agent?: Maybe<Scalars['Int']>;
  applicationTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  reatCost?: Maybe<Scalars['BigDecimal']>;
  reatMotorcycleType?: Maybe<Scalars['String']>;
  reatRemark?: Maybe<Scalars['String']>;
  rentName?: Maybe<Scalars['String']>;
  rentPhotoTimeLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaCarRentOrderBy = {
  agent?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  reatCost?: Maybe<OrderBy>;
  reatMotorcycleType?: Maybe<OrderBy>;
  reatRemark?: Maybe<OrderBy>;
  rentName?: Maybe<OrderBy>;
  rentPhotoTimeLimit?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaCheckBoolExp = {
  _and?: Maybe<Array<Maybe<OaCheckBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCheckBoolExp>>>;
  checkContent?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  nodeKey?: Maybe<StringComparisonExp>;
  nodeName?: Maybe<StringComparisonExp>;
  sort?: Maybe<IntegerComparisonExp>;
  tableId?: Maybe<LongComparisonExp>;
};

export type OaCheckInput = {
  checkContent?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  nodeKey?: Maybe<Scalars['String']>;
  nodeName?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  tableId?: Maybe<Scalars['Long']>;
};

export type OaCheckOrderBy = {
  checkContent?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  nodeKey?: Maybe<OrderBy>;
  nodeName?: Maybe<OrderBy>;
  sort?: Maybe<OrderBy>;
  tableId?: Maybe<OrderBy>;
};

export type OaCheckingInListBoolExp = {
  _and?: Maybe<Array<Maybe<OaCheckingInListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCheckingInListBoolExp>>>;
  clockInTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  people?: Maybe<StringComparisonExp>;
  punchInTime?: Maybe<DateComparisonExp>;
};

export type OaCheckingInListInput = {
  clockInTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  people?: Maybe<Scalars['String']>;
  punchInTime?: Maybe<Scalars['Date']>;
};

export type OaCheckingInListOrderBy = {
  clockInTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  people?: Maybe<OrderBy>;
  punchInTime?: Maybe<OrderBy>;
};

export type OaColumnManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaColumnManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaColumnManagementListBoolExp>>>;
  accessory?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  detail?: Maybe<StringComparisonExp>;
  headline?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  issuer?: Maybe<StringComparisonExp>;
  releaseDate?: Maybe<DateComparisonExp>;
};

export type OaColumnManagementListInput = {
  accessory?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  issuer?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['Date']>;
};

export type OaColumnManagementListOrderBy = {
  accessory?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  detail?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  issuer?: Maybe<OrderBy>;
  releaseDate?: Maybe<OrderBy>;
};

export type OaCommunicationSuggestionsBoolExp = {
  _and?: Maybe<Array<Maybe<OaCommunicationSuggestionsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaCommunicationSuggestionsBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  anonymous?: Maybe<BooleanComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  dateTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  opinion?: Maybe<StringComparisonExp>;
  position?: Maybe<StringComparisonExp>;
  reply?: Maybe<StringComparisonExp>;
  replyUser?: Maybe<LongComparisonExp>;
  sendTo?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

export type OaCommunicationSuggestionsInput = {
  annex?: Maybe<Scalars['String']>;
  anonymous?: Maybe<Scalars['Boolean']>;
  createTime?: Maybe<Scalars['Date']>;
  dateTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  opinion?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  reply?: Maybe<Scalars['String']>;
  replyUser?: Maybe<Scalars['Long']>;
  sendTo?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
  username?: Maybe<Scalars['String']>;
};

export type OaCommunicationSuggestionsOrderBy = {
  annex?: Maybe<OrderBy>;
  anonymous?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  dateTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  opinion?: Maybe<OrderBy>;
  position?: Maybe<OrderBy>;
  reply?: Maybe<OrderBy>;
  replyUser?: Maybe<OrderBy>;
  sendTo?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type OaConferenceEquipmentBoolExp = {
  _and?: Maybe<Array<Maybe<OaConferenceEquipmentBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaConferenceEquipmentBoolExp>>>;
  equipmentModel?: Maybe<StringComparisonExp>;
  equipmentName?: Maybe<StringComparisonExp>;
  equipmentNumber?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  oaConferenceRooms?: Maybe<OaConferenceRoomBoolExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaConferenceEquipmentInput = {
  equipmentModel?: Maybe<Scalars['String']>;
  equipmentName?: Maybe<Scalars['String']>;
  equipmentNumber?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  oaConferenceRooms?: Maybe<Array<Maybe<OaConferenceRoomInput>>>;
  state?: Maybe<Scalars['Int']>;
};

export type OaConferenceEquipmentOrderBy = {
  equipmentModel?: Maybe<OrderBy>;
  equipmentName?: Maybe<OrderBy>;
  equipmentNumber?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaConferenceRoomBoolExp = {
  _and?: Maybe<Array<Maybe<OaConferenceRoomBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaConferenceRoomBoolExp>>>;
  conferenceEquipments?: Maybe<OaConferenceEquipmentBoolExp>;
  id?: Maybe<LongComparisonExp>;
  roomAddress?: Maybe<StringComparisonExp>;
  roomDescribe?: Maybe<StringComparisonExp>;
  roomName?: Maybe<StringComparisonExp>;
  roomNumberOfPeople?: Maybe<IntegerComparisonExp>;
  state?: Maybe<StringComparisonExp>;
};

export type OaConferenceRoomInput = {
  conferenceEquipments?: Maybe<Array<Maybe<OaConferenceEquipmentInput>>>;
  id?: Maybe<Scalars['Long']>;
  roomAddress?: Maybe<Scalars['String']>;
  roomDescribe?: Maybe<Scalars['String']>;
  roomName?: Maybe<Scalars['String']>;
  roomNumberOfPeople?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
};

export type OaConferenceRoomOrderBy = {
  id?: Maybe<OrderBy>;
  roomAddress?: Maybe<OrderBy>;
  roomDescribe?: Maybe<OrderBy>;
  roomName?: Maybe<OrderBy>;
  roomNumberOfPeople?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaDepartmentDynamicManagementConfigBoolExp = {
  _and?: Maybe<Array<Maybe<OaDepartmentDynamicManagementConfigBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDepartmentDynamicManagementConfigBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  push?: Maybe<BooleanComparisonExp>;
  status?: Maybe<LongComparisonExp>;
  stick?: Maybe<StringComparisonExp>;
  timeQuantum?: Maybe<DateComparisonExp>;
  workDynamicContent?: Maybe<StringComparisonExp>;
  workDynamicTitle?: Maybe<StringComparisonExp>;
};

export type OaDepartmentDynamicManagementConfigInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  push?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Long']>;
  stick?: Maybe<Scalars['String']>;
  timeQuantum?: Maybe<Scalars['Date']>;
  workDynamicContent?: Maybe<Scalars['String']>;
  workDynamicTitle?: Maybe<Scalars['String']>;
};

export type OaDepartmentDynamicManagementConfigOrderBy = {
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  push?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  stick?: Maybe<OrderBy>;
  timeQuantum?: Maybe<OrderBy>;
  workDynamicContent?: Maybe<OrderBy>;
  workDynamicTitle?: Maybe<OrderBy>;
};

export type OaDepartmentDynamicManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaDepartmentDynamicManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDepartmentDynamicManagementListBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  timeQuantum?: Maybe<DateComparisonExp>;
  workDynamicContent?: Maybe<StringComparisonExp>;
};

export type OaDepartmentDynamicManagementListInput = {
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  status?: Maybe<Scalars['String']>;
  timeQuantum?: Maybe<Scalars['Date']>;
  workDynamicContent?: Maybe<Scalars['String']>;
};

export type OaDepartmentDynamicManagementListOrderBy = {
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  timeQuantum?: Maybe<OrderBy>;
  workDynamicContent?: Maybe<OrderBy>;
};

export type OaDispatchBoolExp = {
  _and?: Maybe<Array<Maybe<OaDispatchBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDispatchBoolExp>>>;
  assign?: Maybe<StringComparisonExp>;
  auditStatus?: Maybe<StringComparisonExp>;
  copies?: Maybe<StringComparisonExp>;
  copy?: Maybe<StringComparisonExp>;
  dispatchCategory?: Maybe<OaDispatchCategoryBoolExp>;
  dispatchCause?: Maybe<StringComparisonExp>;
  documentNo?: Maybe<StringComparisonExp>;
  drafter?: Maybe<StringComparisonExp>;
  draftingDepartment?: Maybe<StringComparisonExp>;
  enclosure?: Maybe<OaFileBoolExp>;
  headline?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  mainDelivery?: Maybe<StringComparisonExp>;
  pigeonholeStatus?: Maybe<StringComparisonExp>;
  securityClassification?: Maybe<StringComparisonExp>;
  sharedFolderStatus?: Maybe<StringComparisonExp>;
  submissionTime?: Maybe<DateComparisonExp>;
  supervisorStatus?: Maybe<StringComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  type?: Maybe<OaDispatchTypeSettingBoolExp>;
  urgency?: Maybe<StringComparisonExp>;
};

export type OaDispatchCategoryBoolExp = {
  _and?: Maybe<Array<Maybe<OaDispatchCategoryBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDispatchCategoryBoolExp>>>;
  categoryName?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
};

export type OaDispatchCategoryInput = {
  categoryName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  remark?: Maybe<Scalars['String']>;
};

export type OaDispatchCategoryOrderBy = {
  categoryName?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
};

export type OaDispatchInput = {
  assign?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<Scalars['String']>;
  copies?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  dispatchCategory?: Maybe<OaDispatchCategoryInput>;
  dispatchCause?: Maybe<Scalars['String']>;
  documentNo?: Maybe<Scalars['String']>;
  drafter?: Maybe<Scalars['String']>;
  draftingDepartment?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  mainDelivery?: Maybe<Scalars['String']>;
  pigeonholeStatus?: Maybe<Scalars['String']>;
  securityClassification?: Maybe<Scalars['String']>;
  sharedFolderStatus?: Maybe<Scalars['String']>;
  submissionTime?: Maybe<Scalars['Date']>;
  supervisorStatus?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<OaDispatchTypeSettingInput>;
  urgency?: Maybe<Scalars['String']>;
};

export type OaDispatchOrderBy = {
  assign?: Maybe<OrderBy>;
  auditStatus?: Maybe<OrderBy>;
  copies?: Maybe<OrderBy>;
  copy?: Maybe<OrderBy>;
  dispatchCategory?: Maybe<OaDispatchCategoryOrderBy>;
  dispatchCause?: Maybe<OrderBy>;
  documentNo?: Maybe<OrderBy>;
  drafter?: Maybe<OrderBy>;
  draftingDepartment?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mainDelivery?: Maybe<OrderBy>;
  pigeonholeStatus?: Maybe<OrderBy>;
  securityClassification?: Maybe<OrderBy>;
  sharedFolderStatus?: Maybe<OrderBy>;
  submissionTime?: Maybe<OrderBy>;
  supervisorStatus?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  type?: Maybe<OaDispatchTypeSettingOrderBy>;
  urgency?: Maybe<OrderBy>;
};

export type OaDispatchTypeSettingBoolExp = {
  _and?: Maybe<Array<Maybe<OaDispatchTypeSettingBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDispatchTypeSettingBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaDispatchTypeSettingInput = {
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaDispatchTypeSettingOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaDocumentBoolExp = {
  _and?: Maybe<Array<Maybe<OaDocumentBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDocumentBoolExp>>>;
  effectiveDate?: Maybe<LocalDateTimeComparisonExp>;
  fileCabinet?: Maybe<IntegerComparisonExp>;
  fileCabinetType?: Maybe<IntegerComparisonExp>;
  fileSize?: Maybe<StringComparisonExp>;
  fileType?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  uploadDate?: Maybe<DateComparisonExp>;
  uploader?: Maybe<StringComparisonExp>;
};

export type OaDocumentInput = {
  effectiveDate?: Maybe<Scalars['LocalDateTime']>;
  fileCabinet?: Maybe<Scalars['Int']>;
  fileCabinetType?: Maybe<Scalars['Int']>;
  fileSize?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  uploadDate?: Maybe<Scalars['Date']>;
  uploader?: Maybe<Scalars['String']>;
};

export type OaDocumentOrderBy = {
  effectiveDate?: Maybe<OrderBy>;
  fileCabinet?: Maybe<OrderBy>;
  fileCabinetType?: Maybe<OrderBy>;
  fileSize?: Maybe<OrderBy>;
  fileType?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  uploadDate?: Maybe<OrderBy>;
  uploader?: Maybe<OrderBy>;
};

export type OaDoucumentFileCabinetsBoolExp = {
  _and?: Maybe<Array<Maybe<OaDoucumentFileCabinetsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDoucumentFileCabinetsBoolExp>>>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  pid?: Maybe<IntegerComparisonExp>;
};

export type OaDoucumentFileCabinetsInput = {
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
};

export type OaDoucumentFileCabinetsOrderBy = {
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  pid?: Maybe<OrderBy>;
};

export type OaDriverInformationBoolExp = {
  _and?: Maybe<Array<Maybe<OaDriverInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaDriverInformationBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  drivingLicenseNumber?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  state?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaDriverInformationInput = {
  createTime?: Maybe<Scalars['Date']>;
  drivingLicenseNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaDriverInformationOrderBy = {
  createTime?: Maybe<OrderBy>;
  drivingLicenseNumber?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaEmployeeCardAllBoolExp = {
  _and?: Maybe<Array<Maybe<OaEmployeeCardAllBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaEmployeeCardAllBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  cardPhoto?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  userName?: Maybe<StringComparisonExp>;
};

export type OaEmployeeCardAllInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  cardPhoto?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type OaEmployeeCardAllOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  cardPhoto?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
};

export type OaEmployeeCardApplyBoolExp = {
  _and?: Maybe<Array<Maybe<OaEmployeeCardApplyBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaEmployeeCardApplyBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  cardPhoto?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  userName?: Maybe<StringComparisonExp>;
};

export type OaEmployeeCardApplyInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  cardPhoto?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type OaEmployeeCardApplyOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  cardPhoto?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
};

export type OaEmployeeCardEndBoolExp = {
  _and?: Maybe<Array<Maybe<OaEmployeeCardEndBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaEmployeeCardEndBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaEmployeeCardEndInput = {
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaEmployeeCardEndOrderBy = {
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaEmployeeCardManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaEmployeeCardManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaEmployeeCardManagementListBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobNum?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  photo?: Maybe<OaFileBoolExp>;
  submissionTime?: Maybe<DateComparisonExp>;
  submitter?: Maybe<StringComparisonExp>;
  transaction?: Maybe<StringComparisonExp>;
};

export type OaEmployeeCardManagementListInput = {
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  jobNum?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Array<Maybe<OaFileInput>>>;
  submissionTime?: Maybe<Scalars['Date']>;
  submitter?: Maybe<Scalars['String']>;
  transaction?: Maybe<Scalars['String']>;
};

export type OaEmployeeCardManagementListOrderBy = {
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobNum?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  submissionTime?: Maybe<OrderBy>;
  submitter?: Maybe<OrderBy>;
  transaction?: Maybe<OrderBy>;
};

export type OaEvectionListBoolExp = {
  _and?: Maybe<Array<Maybe<OaEvectionListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaEvectionListBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  department?: Maybe<StringComparisonExp>;
  destination?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  people?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  totalDays?: Maybe<LongComparisonExp>;
  travelReason?: Maybe<StringComparisonExp>;
};

export type OaEvectionListInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  department?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  people?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Date']>;
  totalDays?: Maybe<Scalars['Long']>;
  travelReason?: Maybe<Scalars['String']>;
};

export type OaEvectionListOrderBy = {
  department?: Maybe<OrderBy>;
  destination?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  people?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  totalDays?: Maybe<OrderBy>;
  travelReason?: Maybe<OrderBy>;
};

export type OaFacilitiesEquipmentBoolExp = {
  _and?: Maybe<Array<Maybe<OaFacilitiesEquipmentBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFacilitiesEquipmentBoolExp>>>;
  annex?: Maybe<OaFileBoolExp>;
  createTime?: Maybe<DateComparisonExp>;
  dateTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  replay?: Maybe<StringComparisonExp>;
  replayTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
};

export type OaFacilitiesEquipmentInput = {
  annex?: Maybe<Array<Maybe<OaFileInput>>>;
  createTime?: Maybe<Scalars['Date']>;
  dateTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  replay?: Maybe<Scalars['String']>;
  replayTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
};

export type OaFacilitiesEquipmentOrderBy = {
  createTime?: Maybe<OrderBy>;
  dateTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  replay?: Maybe<OrderBy>;
  replayTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

export type OaFileBoolExp = {
  _and?: Maybe<Array<Maybe<OaFileBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFileBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  fileName?: Maybe<StringComparisonExp>;
  filePath?: Maybe<StringComparisonExp>;
  fileUrl?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  notice?: Maybe<OaAnnouncementNoticeBoolExp>;
};

export type OaFileInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  notice?: Maybe<OaAnnouncementNoticeInput>;
};

export type OaFileOrderBy = {
  createTime?: Maybe<OrderBy>;
  fileName?: Maybe<OrderBy>;
  filePath?: Maybe<OrderBy>;
  fileUrl?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  notice?: Maybe<OaAnnouncementNoticeOrderBy>;
};

export type OaFixedAssetsBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedAssetsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedAssetsBoolExp>>>;
  assetsAssetStatus?: Maybe<StringComparisonExp>;
  assetsCategory?: Maybe<StringComparisonExp>;
  assetsCompany?: Maybe<StringComparisonExp>;
  assetsDepartment?: Maybe<StringComparisonExp>;
  assetsFinancialNo?: Maybe<StringComparisonExp>;
  assetsName?: Maybe<StringComparisonExp>;
  assetsNumber?: Maybe<IntegerComparisonExp>;
  assetsPhysicalCategory?: Maybe<StringComparisonExp>;
  assetsPlace?: Maybe<StringComparisonExp>;
  assetsPresentPrice?: Maybe<BigDecimalComparisonExp>;
  assetsPurchaseDate?: Maybe<StringComparisonExp>;
  assetsPurchasingPersonnel?: Maybe<StringComparisonExp>;
  assetsReason?: Maybe<StringComparisonExp>;
  assetsRemarks?: Maybe<StringComparisonExp>;
  assetsSerialNumber?: Maybe<StringComparisonExp>;
  assetsSpecificationAndModel?: Maybe<StringComparisonExp>;
  assetsState?: Maybe<IntegerComparisonExp>;
  assetsUnitPrice?: Maybe<BigDecimalComparisonExp>;
  assetsUser?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
};

export type OaFixedAssetsInput = {
  assetsAssetStatus?: Maybe<Scalars['String']>;
  assetsCategory?: Maybe<Scalars['String']>;
  assetsCompany?: Maybe<Scalars['String']>;
  assetsDepartment?: Maybe<Scalars['String']>;
  assetsFinancialNo?: Maybe<Scalars['String']>;
  assetsName?: Maybe<Scalars['String']>;
  assetsNumber?: Maybe<Scalars['Int']>;
  assetsPhysicalCategory?: Maybe<Scalars['String']>;
  assetsPlace?: Maybe<Scalars['String']>;
  assetsPresentPrice?: Maybe<Scalars['BigDecimal']>;
  assetsPurchaseDate?: Maybe<Scalars['String']>;
  assetsPurchasingPersonnel?: Maybe<Scalars['String']>;
  assetsReason?: Maybe<Scalars['String']>;
  assetsRemarks?: Maybe<Scalars['String']>;
  assetsSerialNumber?: Maybe<Scalars['String']>;
  assetsSpecificationAndModel?: Maybe<Scalars['String']>;
  assetsState?: Maybe<Scalars['Int']>;
  assetsUnitPrice?: Maybe<Scalars['BigDecimal']>;
  assetsUser?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
};

export type OaFixedAssetsOrderBy = {
  assetsAssetStatus?: Maybe<OrderBy>;
  assetsCategory?: Maybe<OrderBy>;
  assetsCompany?: Maybe<OrderBy>;
  assetsDepartment?: Maybe<OrderBy>;
  assetsFinancialNo?: Maybe<OrderBy>;
  assetsName?: Maybe<OrderBy>;
  assetsNumber?: Maybe<OrderBy>;
  assetsPhysicalCategory?: Maybe<OrderBy>;
  assetsPlace?: Maybe<OrderBy>;
  assetsPresentPrice?: Maybe<OrderBy>;
  assetsPurchaseDate?: Maybe<OrderBy>;
  assetsPurchasingPersonnel?: Maybe<OrderBy>;
  assetsReason?: Maybe<OrderBy>;
  assetsRemarks?: Maybe<OrderBy>;
  assetsSerialNumber?: Maybe<OrderBy>;
  assetsSpecificationAndModel?: Maybe<OrderBy>;
  assetsState?: Maybe<OrderBy>;
  assetsUnitPrice?: Maybe<OrderBy>;
  assetsUser?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type OaFixedQuotaBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedQuotaBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedQuotaBoolExp>>>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  quotaName?: Maybe<StringComparisonExp>;
  quotaQuantity?: Maybe<BigDecimalComparisonExp>;
  quotaRemainingAmount?: Maybe<BigDecimalComparisonExp>;
  quotaState?: Maybe<IntegerComparisonExp>;
  quotaUseLimit?: Maybe<BigDecimalComparisonExp>;
};

export type OaFixedQuotaInput = {
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  quotaName?: Maybe<Scalars['String']>;
  quotaQuantity?: Maybe<Scalars['BigDecimal']>;
  quotaRemainingAmount?: Maybe<Scalars['BigDecimal']>;
  quotaState?: Maybe<Scalars['Int']>;
  quotaUseLimit?: Maybe<Scalars['BigDecimal']>;
};

export type OaFixedQuotaOrderBy = {
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  quotaName?: Maybe<OrderBy>;
  quotaQuantity?: Maybe<OrderBy>;
  quotaRemainingAmount?: Maybe<OrderBy>;
  quotaState?: Maybe<OrderBy>;
  quotaUseLimit?: Maybe<OrderBy>;
};

export type OaFixedReceiveBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedReceiveBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedReceiveBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  fixedId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  receiveName?: Maybe<StringComparisonExp>;
  receivePrice?: Maybe<BigDecimalComparisonExp>;
  receiveRemarks?: Maybe<StringComparisonExp>;
  receiveSpecifications?: Maybe<StringComparisonExp>;
  receiveSubjectMatter?: Maybe<StringComparisonExp>;
  receiveTotal?: Maybe<BigDecimalComparisonExp>;
  receiveUser?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaFixedReceiveInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  fixedId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  receiveName?: Maybe<Scalars['String']>;
  receivePrice?: Maybe<Scalars['BigDecimal']>;
  receiveRemarks?: Maybe<Scalars['String']>;
  receiveSpecifications?: Maybe<Scalars['String']>;
  receiveSubjectMatter?: Maybe<Scalars['String']>;
  receiveTotal?: Maybe<Scalars['BigDecimal']>;
  receiveUser?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaFixedReceiveOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  fixedId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  receiveName?: Maybe<OrderBy>;
  receivePrice?: Maybe<OrderBy>;
  receiveRemarks?: Maybe<OrderBy>;
  receiveSpecifications?: Maybe<OrderBy>;
  receiveSubjectMatter?: Maybe<OrderBy>;
  receiveTotal?: Maybe<OrderBy>;
  receiveUser?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaFixedRecordBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedRecordBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedRecordBoolExp>>>;
  fixedId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  recordAlterationTime?: Maybe<StringComparisonExp>;
  recordCause?: Maybe<StringComparisonExp>;
  recordChange?: Maybe<StringComparisonExp>;
  recordName?: Maybe<StringComparisonExp>;
  recordSubjectMatter?: Maybe<StringComparisonExp>;
  recordTime?: Maybe<StringComparisonExp>;
  recordUser?: Maybe<StringComparisonExp>;
};

export type OaFixedRecordInput = {
  fixedId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  recordAlterationTime?: Maybe<Scalars['String']>;
  recordCause?: Maybe<Scalars['String']>;
  recordChange?: Maybe<Scalars['String']>;
  recordName?: Maybe<Scalars['String']>;
  recordSubjectMatter?: Maybe<Scalars['String']>;
  recordTime?: Maybe<Scalars['String']>;
  recordUser?: Maybe<Scalars['String']>;
};

export type OaFixedRecordJointBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedRecordJointBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedRecordJointBoolExp>>>;
  fixedId?: Maybe<OaFixedAssetsBoolExp>;
  id?: Maybe<LongComparisonExp>;
  recordAlterationTime?: Maybe<StringComparisonExp>;
  recordCause?: Maybe<StringComparisonExp>;
  recordChange?: Maybe<StringComparisonExp>;
  recordName?: Maybe<StringComparisonExp>;
  recordSubjectMatter?: Maybe<StringComparisonExp>;
  recordTime?: Maybe<StringComparisonExp>;
  recordUser?: Maybe<StringComparisonExp>;
};

export type OaFixedRecordJointInput = {
  fixedId?: Maybe<OaFixedAssetsInput>;
  id?: Maybe<Scalars['Long']>;
  recordAlterationTime?: Maybe<Scalars['String']>;
  recordCause?: Maybe<Scalars['String']>;
  recordChange?: Maybe<Scalars['String']>;
  recordName?: Maybe<Scalars['String']>;
  recordSubjectMatter?: Maybe<Scalars['String']>;
  recordTime?: Maybe<Scalars['String']>;
  recordUser?: Maybe<Scalars['String']>;
};

export type OaFixedRecordJointOrderBy = {
  fixedId?: Maybe<OaFixedAssetsOrderBy>;
  id?: Maybe<OrderBy>;
  recordAlterationTime?: Maybe<OrderBy>;
  recordCause?: Maybe<OrderBy>;
  recordChange?: Maybe<OrderBy>;
  recordName?: Maybe<OrderBy>;
  recordSubjectMatter?: Maybe<OrderBy>;
  recordTime?: Maybe<OrderBy>;
  recordUser?: Maybe<OrderBy>;
};

export type OaFixedRecordOrderBy = {
  fixedId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  recordAlterationTime?: Maybe<OrderBy>;
  recordCause?: Maybe<OrderBy>;
  recordChange?: Maybe<OrderBy>;
  recordName?: Maybe<OrderBy>;
  recordSubjectMatter?: Maybe<OrderBy>;
  recordTime?: Maybe<OrderBy>;
  recordUser?: Maybe<OrderBy>;
};

export type OaFixedScrapBoolExp = {
  _and?: Maybe<Array<Maybe<OaFixedScrapBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaFixedScrapBoolExp>>>;
  assetsId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  scrapCompany?: Maybe<StringComparisonExp>;
  scrapDate?: Maybe<StringComparisonExp>;
  scrapDepreciation?: Maybe<BigDecimalComparisonExp>;
  scrapName?: Maybe<StringComparisonExp>;
  scrapNumber?: Maybe<IntegerComparisonExp>;
  scrapPresentPrice?: Maybe<BigDecimalComparisonExp>;
  scrapPurchaseDate?: Maybe<StringComparisonExp>;
  scrapRemarks?: Maybe<StringComparisonExp>;
  scrapResidualValue?: Maybe<BigDecimalComparisonExp>;
  scrapSerialNumber?: Maybe<StringComparisonExp>;
  scrapSpecificationAndModel?: Maybe<StringComparisonExp>;
  scrapState?: Maybe<IntegerComparisonExp>;
  scrapUnitPrice?: Maybe<BigDecimalComparisonExp>;
};

export type OaFixedScrapInput = {
  assetsId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  scrapCompany?: Maybe<Scalars['String']>;
  scrapDate?: Maybe<Scalars['String']>;
  scrapDepreciation?: Maybe<Scalars['BigDecimal']>;
  scrapName?: Maybe<Scalars['String']>;
  scrapNumber?: Maybe<Scalars['Int']>;
  scrapPresentPrice?: Maybe<Scalars['BigDecimal']>;
  scrapPurchaseDate?: Maybe<Scalars['String']>;
  scrapRemarks?: Maybe<Scalars['String']>;
  scrapResidualValue?: Maybe<Scalars['BigDecimal']>;
  scrapSerialNumber?: Maybe<Scalars['String']>;
  scrapSpecificationAndModel?: Maybe<Scalars['String']>;
  scrapState?: Maybe<Scalars['Int']>;
  scrapUnitPrice?: Maybe<Scalars['BigDecimal']>;
};

export type OaFixedScrapOrderBy = {
  assetsId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  scrapCompany?: Maybe<OrderBy>;
  scrapDate?: Maybe<OrderBy>;
  scrapDepreciation?: Maybe<OrderBy>;
  scrapName?: Maybe<OrderBy>;
  scrapNumber?: Maybe<OrderBy>;
  scrapPresentPrice?: Maybe<OrderBy>;
  scrapPurchaseDate?: Maybe<OrderBy>;
  scrapRemarks?: Maybe<OrderBy>;
  scrapResidualValue?: Maybe<OrderBy>;
  scrapSerialNumber?: Maybe<OrderBy>;
  scrapSpecificationAndModel?: Maybe<OrderBy>;
  scrapState?: Maybe<OrderBy>;
  scrapUnitPrice?: Maybe<OrderBy>;
};

export type OaHolidayAttendanceListBoolExp = {
  _and?: Maybe<Array<Maybe<OaHolidayAttendanceListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaHolidayAttendanceListBoolExp>>>;
  annualLeaveDays?: Maybe<LongComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaveType?: Maybe<StringComparisonExp>;
  outTime?: Maybe<LongComparisonExp>;
  people?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  time?: Maybe<LongComparisonExp>;
  travelTime?: Maybe<LongComparisonExp>;
};

export type OaHolidayAttendanceListInput = {
  annualLeaveDays?: Maybe<Scalars['Long']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  leaveType?: Maybe<Scalars['String']>;
  outTime?: Maybe<Scalars['Long']>;
  people?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Long']>;
  travelTime?: Maybe<Scalars['Long']>;
};

export type OaHolidayAttendanceListOrderBy = {
  annualLeaveDays?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaveType?: Maybe<OrderBy>;
  outTime?: Maybe<OrderBy>;
  people?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  travelTime?: Maybe<OrderBy>;
};

export type OaIncomingDispatchesBoolExp = {
  _and?: Maybe<Array<Maybe<OaIncomingDispatchesBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaIncomingDispatchesBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  assign?: Maybe<StringComparisonExp>;
  auditStatus?: Maybe<StringComparisonExp>;
  classification?: Maybe<StringComparisonExp>;
  dateOfReceipt?: Maybe<DateComparisonExp>;
  enclosure?: Maybe<OaFileBoolExp>;
  fileName?: Maybe<StringComparisonExp>;
  headline?: Maybe<StringComparisonExp>;
  hostDepartment?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isItFiled?: Maybe<StringComparisonExp>;
  letterNo?: Maybe<StringComparisonExp>;
  literati?: Maybe<StringComparisonExp>;
  numberOfPapersReceived?: Maybe<IntegerComparisonExp>;
  operationSignInDepartment?: Maybe<StringComparisonExp>;
  receivingNumber?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  supervisionOrNot?: Maybe<StringComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  transferToSharedDocument?: Maybe<StringComparisonExp>;
  unitOfCommunication?: Maybe<StringComparisonExp>;
};

export type OaIncomingDispatchesInput = {
  agent?: Maybe<Scalars['String']>;
  assign?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<Scalars['String']>;
  classification?: Maybe<Scalars['String']>;
  dateOfReceipt?: Maybe<Scalars['Date']>;
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  fileName?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  hostDepartment?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isItFiled?: Maybe<Scalars['String']>;
  letterNo?: Maybe<Scalars['String']>;
  literati?: Maybe<Scalars['String']>;
  numberOfPapersReceived?: Maybe<Scalars['Int']>;
  operationSignInDepartment?: Maybe<Scalars['String']>;
  receivingNumber?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  supervisionOrNot?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  transferToSharedDocument?: Maybe<Scalars['String']>;
  unitOfCommunication?: Maybe<Scalars['String']>;
};

export type OaIncomingDispatchesOrderBy = {
  agent?: Maybe<OrderBy>;
  assign?: Maybe<OrderBy>;
  auditStatus?: Maybe<OrderBy>;
  classification?: Maybe<OrderBy>;
  dateOfReceipt?: Maybe<OrderBy>;
  fileName?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  hostDepartment?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isItFiled?: Maybe<OrderBy>;
  letterNo?: Maybe<OrderBy>;
  literati?: Maybe<OrderBy>;
  numberOfPapersReceived?: Maybe<OrderBy>;
  operationSignInDepartment?: Maybe<OrderBy>;
  receivingNumber?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  supervisionOrNot?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  transferToSharedDocument?: Maybe<OrderBy>;
  unitOfCommunication?: Maybe<OrderBy>;
};

export type OaLeadershipAssignedBoolExp = {
  _and?: Maybe<Array<Maybe<OaLeadershipAssignedBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaLeadershipAssignedBoolExp>>>;
  assign?: Maybe<StringComparisonExp>;
  enclosure?: Maybe<OaFileBoolExp>;
  headline?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  transferredToSupervisionCheck?: Maybe<StringComparisonExp>;
};

export type OaLeadershipAssignedInput = {
  assign?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  text?: Maybe<Scalars['String']>;
  transferredToSupervisionCheck?: Maybe<Scalars['String']>;
};

export type OaLeadershipAssignedOrderBy = {
  assign?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  transferredToSupervisionCheck?: Maybe<OrderBy>;
};

export type OaMeetingSummaryBoolExp = {
  _and?: Maybe<Array<Maybe<OaMeetingSummaryBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaMeetingSummaryBoolExp>>>;
  auditOpinion?: Maybe<StringComparisonExp>;
  auditStatus?: Maybe<StringComparisonExp>;
  copies?: Maybe<StringComparisonExp>;
  copy?: Maybe<StringComparisonExp>;
  dispatchCategory?: Maybe<StringComparisonExp>;
  documentNo?: Maybe<StringComparisonExp>;
  drafter?: Maybe<StringComparisonExp>;
  draftingDepartment?: Maybe<StringComparisonExp>;
  enclosure?: Maybe<OaFileBoolExp>;
  headline?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  mainDelivery?: Maybe<StringComparisonExp>;
  securityClassification?: Maybe<StringComparisonExp>;
  submissionTime?: Maybe<DateComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  urgency?: Maybe<StringComparisonExp>;
  whetherArchive?: Maybe<StringComparisonExp>;
};

export type OaMeetingSummaryInput = {
  auditOpinion?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<Scalars['String']>;
  copies?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['String']>;
  dispatchCategory?: Maybe<Scalars['String']>;
  documentNo?: Maybe<Scalars['String']>;
  drafter?: Maybe<Scalars['String']>;
  draftingDepartment?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  mainDelivery?: Maybe<Scalars['String']>;
  securityClassification?: Maybe<Scalars['String']>;
  submissionTime?: Maybe<Scalars['Date']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  urgency?: Maybe<Scalars['String']>;
  whetherArchive?: Maybe<Scalars['String']>;
};

export type OaMeetingSummaryOrderBy = {
  auditOpinion?: Maybe<OrderBy>;
  auditStatus?: Maybe<OrderBy>;
  copies?: Maybe<OrderBy>;
  copy?: Maybe<OrderBy>;
  dispatchCategory?: Maybe<OrderBy>;
  documentNo?: Maybe<OrderBy>;
  drafter?: Maybe<OrderBy>;
  draftingDepartment?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mainDelivery?: Maybe<OrderBy>;
  securityClassification?: Maybe<OrderBy>;
  submissionTime?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  urgency?: Maybe<OrderBy>;
  whetherArchive?: Maybe<OrderBy>;
};

export type OaMemorabiliaApplicationBoolExp = {
  _and?: Maybe<Array<Maybe<OaMemorabiliaApplicationBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaMemorabiliaApplicationBoolExp>>>;
  accessory?: Maybe<StringComparisonExp>;
  agent?: Maybe<IntegerComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<StringComparisonExp>;
  auditStatus?: Maybe<StringComparisonExp>;
  content?: Maybe<StringComparisonExp>;
  generalManagerCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaderCheck?: Maybe<StringComparisonExp>;
  noticeFile?: Maybe<OaFileBoolExp>;
  period?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type OaMemorabiliaApplicationInput = {
  accessory?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['Int']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  generalManagerCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  leaderCheck?: Maybe<Scalars['String']>;
  noticeFile?: Maybe<Array<Maybe<OaFileInput>>>;
  period?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type OaMemorabiliaApplicationOrderBy = {
  accessory?: Maybe<OrderBy>;
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  auditStatus?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  generalManagerCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaderCheck?: Maybe<OrderBy>;
  noticeFile?: Maybe<OaFileOrderBy>;
  period?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type OaNewspapersMagazinesBoolExp = {
  _and?: Maybe<Array<Maybe<OaNewspapersMagazinesBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaNewspapersMagazinesBoolExp>>>;
  applyUserId?: Maybe<LongComparisonExp>;
  applyUsername?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  dateTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  newspapersMagazinesType?: Maybe<StringComparisonExp>;
  numbers?: Maybe<IntegerComparisonExp>;
  state?: Maybe<StringComparisonExp>;
};

export type OaNewspapersMagazinesInput = {
  applyUserId?: Maybe<Scalars['Long']>;
  applyUsername?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  dateTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  newspapersMagazinesType?: Maybe<Scalars['String']>;
  numbers?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
};

export type OaNewspapersMagazinesOrderBy = {
  applyUserId?: Maybe<OrderBy>;
  applyUsername?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  dateTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  newspapersMagazinesType?: Maybe<OrderBy>;
  numbers?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesBorrowBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesBorrowBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesBorrowBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  borrowMatter?: Maybe<StringComparisonExp>;
  borrowName?: Maybe<StringComparisonExp>;
  borrowNumber?: Maybe<IntegerComparisonExp>;
  borrowParameter?: Maybe<StringComparisonExp>;
  borrowRemarks?: Maybe<StringComparisonExp>;
  borrowReturntime?: Maybe<StringComparisonExp>;
  borrowTime?: Maybe<StringComparisonExp>;
  borrowUser?: Maybe<StringComparisonExp>;
  comprehensiveDepartmentHeadCheck?: Maybe<StringComparisonExp>;
  departmentHeadCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  stockId?: Maybe<LongComparisonExp>;
};

export type OaOfficeSuppliesBorrowInput = {
  agent?: Maybe<Scalars['Int']>;
  agentDepartment?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  borrowMatter?: Maybe<Scalars['String']>;
  borrowName?: Maybe<Scalars['String']>;
  borrowNumber?: Maybe<Scalars['Int']>;
  borrowParameter?: Maybe<Scalars['String']>;
  borrowRemarks?: Maybe<Scalars['String']>;
  borrowReturntime?: Maybe<Scalars['String']>;
  borrowTime?: Maybe<Scalars['String']>;
  borrowUser?: Maybe<Scalars['String']>;
  comprehensiveDepartmentHeadCheck?: Maybe<Scalars['String']>;
  departmentHeadCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  stockId?: Maybe<Scalars['Long']>;
};

export type OaOfficeSuppliesBorrowOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  borrowMatter?: Maybe<OrderBy>;
  borrowName?: Maybe<OrderBy>;
  borrowNumber?: Maybe<OrderBy>;
  borrowParameter?: Maybe<OrderBy>;
  borrowRemarks?: Maybe<OrderBy>;
  borrowReturntime?: Maybe<OrderBy>;
  borrowTime?: Maybe<OrderBy>;
  borrowUser?: Maybe<OrderBy>;
  comprehensiveDepartmentHeadCheck?: Maybe<OrderBy>;
  departmentHeadCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  stockId?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesCommoniyusedofficesuppliesBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesCommoniyusedofficesuppliesBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesCommoniyusedofficesuppliesBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  annexUrl?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  commoniyusedofficesuppliesMatter?: Maybe<StringComparisonExp>;
  commoniyusedofficesuppliesName?: Maybe<StringComparisonExp>;
  commoniyusedofficesuppliesNumber?: Maybe<IntegerComparisonExp>;
  commoniyusedofficesuppliesParameter?: Maybe<StringComparisonExp>;
  commoniyusedofficesuppliesRecord?: Maybe<StringComparisonExp>;
  commoniyusedofficesuppliesSupplier?: Maybe<StringComparisonExp>;
  commoniyusedofficesuppliesTotal?: Maybe<BigDecimalComparisonExp>;
  commoniyusedofficesuppliesUnitPrice?: Maybe<BigDecimalComparisonExp>;
  commoniyusedofficesuppliesUser?: Maybe<StringComparisonExp>;
  comprehensiveDepartmentHeadCheck?: Maybe<StringComparisonExp>;
  departmentHeadCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaderChargeCheck?: Maybe<StringComparisonExp>;
  managementLeaderOfComprehensiveDepartment?: Maybe<StringComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  stockId?: Maybe<LongComparisonExp>;
};

export type OaOfficeSuppliesCommoniyusedofficesuppliesInput = {
  agent?: Maybe<Scalars['Int']>;
  agentDepartment?: Maybe<Scalars['String']>;
  annexUrl?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  commoniyusedofficesuppliesMatter?: Maybe<Scalars['String']>;
  commoniyusedofficesuppliesName?: Maybe<Scalars['String']>;
  commoniyusedofficesuppliesNumber?: Maybe<Scalars['Int']>;
  commoniyusedofficesuppliesParameter?: Maybe<Scalars['String']>;
  commoniyusedofficesuppliesRecord?: Maybe<Scalars['String']>;
  commoniyusedofficesuppliesSupplier?: Maybe<Scalars['String']>;
  commoniyusedofficesuppliesTotal?: Maybe<Scalars['BigDecimal']>;
  commoniyusedofficesuppliesUnitPrice?: Maybe<Scalars['BigDecimal']>;
  commoniyusedofficesuppliesUser?: Maybe<Scalars['String']>;
  comprehensiveDepartmentHeadCheck?: Maybe<Scalars['String']>;
  departmentHeadCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  leaderChargeCheck?: Maybe<Scalars['String']>;
  managementLeaderOfComprehensiveDepartment?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  stockId?: Maybe<Scalars['Long']>;
};

export type OaOfficeSuppliesCommoniyusedofficesuppliesOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  annexUrl?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  commoniyusedofficesuppliesMatter?: Maybe<OrderBy>;
  commoniyusedofficesuppliesName?: Maybe<OrderBy>;
  commoniyusedofficesuppliesNumber?: Maybe<OrderBy>;
  commoniyusedofficesuppliesParameter?: Maybe<OrderBy>;
  commoniyusedofficesuppliesRecord?: Maybe<OrderBy>;
  commoniyusedofficesuppliesSupplier?: Maybe<OrderBy>;
  commoniyusedofficesuppliesTotal?: Maybe<OrderBy>;
  commoniyusedofficesuppliesUnitPrice?: Maybe<OrderBy>;
  commoniyusedofficesuppliesUser?: Maybe<OrderBy>;
  comprehensiveDepartmentHeadCheck?: Maybe<OrderBy>;
  departmentHeadCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaderChargeCheck?: Maybe<OrderBy>;
  managementLeaderOfComprehensiveDepartment?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  stockId?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesDeliveryBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesDeliveryBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesDeliveryBoolExp>>>;
  deliveryBasis?: Maybe<StringComparisonExp>;
  deliveryCategory?: Maybe<StringComparisonExp>;
  deliveryDate?: Maybe<StringComparisonExp>;
  deliveryDepartment?: Maybe<StringComparisonExp>;
  deliveryLevel?: Maybe<StringComparisonExp>;
  deliveryLreturnTime?: Maybe<StringComparisonExp>;
  deliveryMaterialObject?: Maybe<StringComparisonExp>;
  deliveryMoney?: Maybe<BigDecimalComparisonExp>;
  deliveryName?: Maybe<StringComparisonExp>;
  deliveryNumber?: Maybe<IntegerComparisonExp>;
  deliveryParameter?: Maybe<StringComparisonExp>;
  deliveryPersonnel?: Maybe<StringComparisonExp>;
  deliveryPrice?: Maybe<BigDecimalComparisonExp>;
  deliveryState?: Maybe<IntegerComparisonExp>;
  deliverySupplier?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  stockId?: Maybe<LongComparisonExp>;
};

export type OaOfficeSuppliesDeliveryInput = {
  deliveryBasis?: Maybe<Scalars['String']>;
  deliveryCategory?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryDepartment?: Maybe<Scalars['String']>;
  deliveryLevel?: Maybe<Scalars['String']>;
  deliveryLreturnTime?: Maybe<Scalars['String']>;
  deliveryMaterialObject?: Maybe<Scalars['String']>;
  deliveryMoney?: Maybe<Scalars['BigDecimal']>;
  deliveryName?: Maybe<Scalars['String']>;
  deliveryNumber?: Maybe<Scalars['Int']>;
  deliveryParameter?: Maybe<Scalars['String']>;
  deliveryPersonnel?: Maybe<Scalars['String']>;
  deliveryPrice?: Maybe<Scalars['BigDecimal']>;
  deliveryState?: Maybe<Scalars['Int']>;
  deliverySupplier?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  stockId?: Maybe<Scalars['Long']>;
};

export type OaOfficeSuppliesDeliveryOrderBy = {
  deliveryBasis?: Maybe<OrderBy>;
  deliveryCategory?: Maybe<OrderBy>;
  deliveryDate?: Maybe<OrderBy>;
  deliveryDepartment?: Maybe<OrderBy>;
  deliveryLevel?: Maybe<OrderBy>;
  deliveryLreturnTime?: Maybe<OrderBy>;
  deliveryMaterialObject?: Maybe<OrderBy>;
  deliveryMoney?: Maybe<OrderBy>;
  deliveryName?: Maybe<OrderBy>;
  deliveryNumber?: Maybe<OrderBy>;
  deliveryParameter?: Maybe<OrderBy>;
  deliveryPersonnel?: Maybe<OrderBy>;
  deliveryPrice?: Maybe<OrderBy>;
  deliveryState?: Maybe<OrderBy>;
  deliverySupplier?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  stockId?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesQuotaBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesQuotaBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesQuotaBoolExp>>>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  quotaName?: Maybe<StringComparisonExp>;
  quotaQuantity?: Maybe<BigDecimalComparisonExp>;
  quotaRemainingAmount?: Maybe<BigDecimalComparisonExp>;
  quotaState?: Maybe<IntegerComparisonExp>;
  quotaUseLimit?: Maybe<BigDecimalComparisonExp>;
};

export type OaOfficeSuppliesQuotaInput = {
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  quotaName?: Maybe<Scalars['String']>;
  quotaQuantity?: Maybe<Scalars['BigDecimal']>;
  quotaRemainingAmount?: Maybe<Scalars['BigDecimal']>;
  quotaState?: Maybe<Scalars['Int']>;
  quotaUseLimit?: Maybe<Scalars['BigDecimal']>;
};

export type OaOfficeSuppliesQuotaOrderBy = {
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  quotaName?: Maybe<OrderBy>;
  quotaQuantity?: Maybe<OrderBy>;
  quotaRemainingAmount?: Maybe<OrderBy>;
  quotaState?: Maybe<OrderBy>;
  quotaUseLimit?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesStockBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesStockBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesStockBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  stockLevel?: Maybe<StringComparisonExp>;
  stockMaterialObject?: Maybe<StringComparisonExp>;
  stockName?: Maybe<StringComparisonExp>;
  stockNumber?: Maybe<IntegerComparisonExp>;
  stockParameter?: Maybe<StringComparisonExp>;
  stockPrice?: Maybe<BigDecimalComparisonExp>;
  stockState?: Maybe<IntegerComparisonExp>;
  stockSupplier?: Maybe<StringComparisonExp>;
  stockTotal?: Maybe<BigDecimalComparisonExp>;
};

export type OaOfficeSuppliesStockInput = {
  id?: Maybe<Scalars['Long']>;
  stockLevel?: Maybe<Scalars['String']>;
  stockMaterialObject?: Maybe<Scalars['String']>;
  stockName?: Maybe<Scalars['String']>;
  stockNumber?: Maybe<Scalars['Int']>;
  stockParameter?: Maybe<Scalars['String']>;
  stockPrice?: Maybe<Scalars['BigDecimal']>;
  stockState?: Maybe<Scalars['Int']>;
  stockSupplier?: Maybe<Scalars['String']>;
  stockTotal?: Maybe<Scalars['BigDecimal']>;
};

export type OaOfficeSuppliesStockOrderBy = {
  id?: Maybe<OrderBy>;
  stockLevel?: Maybe<OrderBy>;
  stockMaterialObject?: Maybe<OrderBy>;
  stockName?: Maybe<OrderBy>;
  stockNumber?: Maybe<OrderBy>;
  stockParameter?: Maybe<OrderBy>;
  stockPrice?: Maybe<OrderBy>;
  stockState?: Maybe<OrderBy>;
  stockSupplier?: Maybe<OrderBy>;
  stockTotal?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesWarehousingBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesWarehousingBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesWarehousingBoolExp>>>;
  amendId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  stockId?: Maybe<LongComparisonExp>;
  warehousingBasis?: Maybe<StringComparisonExp>;
  warehousingDate?: Maybe<StringComparisonExp>;
  warehousingPersonnel?: Maybe<StringComparisonExp>;
};

export type OaOfficeSuppliesWarehousingInput = {
  amendId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  stockId?: Maybe<Scalars['Long']>;
  warehousingBasis?: Maybe<Scalars['String']>;
  warehousingDate?: Maybe<Scalars['String']>;
  warehousingPersonnel?: Maybe<Scalars['String']>;
};

export type OaOfficeSuppliesWarehousingOrderBy = {
  amendId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  stockId?: Maybe<OrderBy>;
  warehousingBasis?: Maybe<OrderBy>;
  warehousingDate?: Maybe<OrderBy>;
  warehousingPersonnel?: Maybe<OrderBy>;
};

export type OaOfficeSuppliesWarehousingUniteBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfficeSuppliesWarehousingUniteBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfficeSuppliesWarehousingUniteBoolExp>>>;
  amendId?: Maybe<OaOfficeSuppliesStockBoolExp>;
  id?: Maybe<LongComparisonExp>;
  stockId?: Maybe<LongComparisonExp>;
  warehousingBasis?: Maybe<StringComparisonExp>;
  warehousingDate?: Maybe<StringComparisonExp>;
  warehousingPersonnel?: Maybe<StringComparisonExp>;
};

export type OaOfficeSuppliesWarehousingUniteInput = {
  amendId?: Maybe<OaOfficeSuppliesStockInput>;
  id?: Maybe<Scalars['Long']>;
  stockId?: Maybe<Scalars['Long']>;
  warehousingBasis?: Maybe<Scalars['String']>;
  warehousingDate?: Maybe<Scalars['String']>;
  warehousingPersonnel?: Maybe<Scalars['String']>;
};

export type OaOfficeSuppliesWarehousingUniteOrderBy = {
  amendId?: Maybe<OaOfficeSuppliesStockOrderBy>;
  id?: Maybe<OrderBy>;
  stockId?: Maybe<OrderBy>;
  warehousingBasis?: Maybe<OrderBy>;
  warehousingDate?: Maybe<OrderBy>;
  warehousingPersonnel?: Maybe<OrderBy>;
};

export type OaOfflineFilesArchivesStatusBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfflineFilesArchivesStatusBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfflineFilesArchivesStatusBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  types?: Maybe<StringComparisonExp>;
};

export type OaOfflineFilesArchivesStatusInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  types?: Maybe<Scalars['String']>;
};

export type OaOfflineFilesArchivesStatusOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  types?: Maybe<OrderBy>;
};

export type OaOfflineFilesClassifyBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfflineFilesClassifyBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfflineFilesClassifyBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  names?: Maybe<StringComparisonExp>;
};

export type OaOfflineFilesClassifyInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  names?: Maybe<Scalars['String']>;
};

export type OaOfflineFilesClassifyOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  names?: Maybe<OrderBy>;
};

export type OaOfflineFilesListBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfflineFilesListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfflineFilesListBoolExp>>>;
  archivesStatus?: Maybe<OaOfflineFilesArchivesStatusBoolExp>;
  author?: Maybe<StringComparisonExp>;
  boxNumber?: Maybe<OaOfflineFilesClassifyBoolExp>;
  date?: Maybe<DateComparisonExp>;
  documentNumber?: Maybe<LongComparisonExp>;
  filename?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  number?: Maybe<LongComparisonExp>;
  pagination?: Maybe<LongComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  tradeName?: Maybe<OaOfflineTradeNameTypeBoolExp>;
};

export type OaOfflineFilesListInput = {
  archivesStatus?: Maybe<OaOfflineFilesArchivesStatusInput>;
  author?: Maybe<Scalars['String']>;
  boxNumber?: Maybe<OaOfflineFilesClassifyInput>;
  date?: Maybe<Scalars['Date']>;
  documentNumber?: Maybe<Scalars['Long']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  number?: Maybe<Scalars['Long']>;
  pagination?: Maybe<Scalars['Long']>;
  remarks?: Maybe<Scalars['String']>;
  tradeName?: Maybe<OaOfflineTradeNameTypeInput>;
};

export type OaOfflineFilesListOrderBy = {
  archivesStatus?: Maybe<OaOfflineFilesArchivesStatusOrderBy>;
  author?: Maybe<OrderBy>;
  boxNumber?: Maybe<OaOfflineFilesClassifyOrderBy>;
  date?: Maybe<OrderBy>;
  documentNumber?: Maybe<OrderBy>;
  filename?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  number?: Maybe<OrderBy>;
  pagination?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  tradeName?: Maybe<OaOfflineTradeNameTypeOrderBy>;
};

export type OaOfflineTradeNameTypeBoolExp = {
  _and?: Maybe<Array<Maybe<OaOfflineTradeNameTypeBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOfflineTradeNameTypeBoolExp>>>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  names?: Maybe<StringComparisonExp>;
};

export type OaOfflineTradeNameTypeInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  names?: Maybe<Scalars['String']>;
};

export type OaOfflineTradeNameTypeOrderBy = {
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  names?: Maybe<OrderBy>;
};

export type OaOnlineArchivesListBoolExp = {
  _and?: Maybe<Array<Maybe<OaOnlineArchivesListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOnlineArchivesListBoolExp>>>;
  archivePersonnel?: Maybe<StringComparisonExp>;
  archivesClassification?: Maybe<OaOnlineClassifyBoolExp>;
  competentDepartment?: Maybe<StringComparisonExp>;
  fileName?: Maybe<StringComparisonExp>;
  fileNumber?: Maybe<StringComparisonExp>;
  filingTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  subjectTerm?: Maybe<StringComparisonExp>;
  whetherTransfer?: Maybe<StringComparisonExp>;
};

export type OaOnlineArchivesListInput = {
  archivePersonnel?: Maybe<Scalars['String']>;
  archivesClassification?: Maybe<OaOnlineClassifyInput>;
  competentDepartment?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  fileNumber?: Maybe<Scalars['String']>;
  filingTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  remarks?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subjectTerm?: Maybe<Scalars['String']>;
  whetherTransfer?: Maybe<Scalars['String']>;
};

export type OaOnlineArchivesListOrderBy = {
  archivePersonnel?: Maybe<OrderBy>;
  archivesClassification?: Maybe<OaOnlineClassifyOrderBy>;
  competentDepartment?: Maybe<OrderBy>;
  fileName?: Maybe<OrderBy>;
  fileNumber?: Maybe<OrderBy>;
  filingTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  subjectTerm?: Maybe<OrderBy>;
  whetherTransfer?: Maybe<OrderBy>;
};

export type OaOnlineClassifyBoolExp = {
  _and?: Maybe<Array<Maybe<OaOnlineClassifyBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOnlineClassifyBoolExp>>>;
  descs?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  names?: Maybe<StringComparisonExp>;
};

export type OaOnlineClassifyInput = {
  descs?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  names?: Maybe<Scalars['String']>;
};

export type OaOnlineClassifyOrderBy = {
  descs?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  names?: Maybe<OrderBy>;
};

export type OaOnlineFileBoolExp = {
  _and?: Maybe<Array<Maybe<OaOnlineFileBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaOnlineFileBoolExp>>>;
  fileName?: Maybe<StringComparisonExp>;
  fileSize?: Maybe<LongComparisonExp>;
  fileUrl?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  uplodeTime?: Maybe<DateComparisonExp>;
};

export type OaOnlineFileInput = {
  fileName?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Long']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  uplodeTime?: Maybe<Scalars['Date']>;
};

export type OaOnlineFileOrderBy = {
  fileName?: Maybe<OrderBy>;
  fileSize?: Maybe<OrderBy>;
  fileUrl?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  uplodeTime?: Maybe<OrderBy>;
};

export type OaPersonalAgendaBoolExp = {
  _and?: Maybe<Array<Maybe<OaPersonalAgendaBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaPersonalAgendaBoolExp>>>;
  end?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  start?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
};

export type OaPersonalAgendaInput = {
  end?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  start?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Long']>;
};

export type OaPersonalAgendaOrderBy = {
  end?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  start?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

export type OaPersonalFolderBoolExp = {
  _and?: Maybe<Array<Maybe<OaPersonalFolderBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaPersonalFolderBoolExp>>>;
  enclosure?: Maybe<OaFileBoolExp>;
  fileName?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  uploadeTime?: Maybe<DateComparisonExp>;
  uploader?: Maybe<StringComparisonExp>;
};

export type OaPersonalFolderInput = {
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  fileName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
  type?: Maybe<Scalars['String']>;
  uploadeTime?: Maybe<Scalars['Date']>;
  uploader?: Maybe<Scalars['String']>;
};

export type OaPersonalFolderOrderBy = {
  fileName?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  uploadeTime?: Maybe<OrderBy>;
  uploader?: Maybe<OrderBy>;
};

export type OaProposalsForTheShareholdersMeetingBoolExp = {
  _and?: Maybe<Array<Maybe<OaProposalsForTheShareholdersMeetingBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaProposalsForTheShareholdersMeetingBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  agentName?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<StringComparisonExp>;
  assign?: Maybe<StringComparisonExp>;
  attendDepartment?: Maybe<StringComparisonExp>;
  auditStatus?: Maybe<StringComparisonExp>;
  chairmanOpinionCheck?: Maybe<StringComparisonExp>;
  countersignatureOfLeadersInChargeCheck?: Maybe<StringComparisonExp>;
  countersignedByOtherDepartmentHeadsCheck?: Maybe<StringComparisonExp>;
  enclosure?: Maybe<OaFileBoolExp>;
  generalManagementSecretaryPostCheck?: Maybe<StringComparisonExp>;
  generalManagerOpinionCheck?: Maybe<StringComparisonExp>;
  headOfGeneralAffairsDepartmentCheck?: Maybe<StringComparisonExp>;
  headline?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  meetingMinutes?: Maybe<StringComparisonExp>;
  nameOfTheMotion?: Maybe<StringComparisonExp>;
  opinionsOfDepartmentHeadCheck?: Maybe<StringComparisonExp>;
  opinionsOfDepartmentLeadersInChargeCheck?: Maybe<StringComparisonExp>;
  opinionsOfDeputyGeneralManageCheck?: Maybe<StringComparisonExp>;
  personInChargeOfThePartyMassWorkDepartmentCheck?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  proposedMeeting?: Maybe<StringComparisonExp>;
  secretRelated?: Maybe<StringComparisonExp>;
  text?: Maybe<StringComparisonExp>;
  theTripleLarge?: Maybe<StringComparisonExp>;
  toSubmitForApproval?: Maybe<StringComparisonExp>;
};

export type OaProposalsForTheShareholdersMeetingInput = {
  agent?: Maybe<Scalars['Int']>;
  agentDepartment?: Maybe<Scalars['String']>;
  agentName?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['String']>;
  assign?: Maybe<Scalars['String']>;
  attendDepartment?: Maybe<Scalars['String']>;
  auditStatus?: Maybe<Scalars['String']>;
  chairmanOpinionCheck?: Maybe<Scalars['String']>;
  countersignatureOfLeadersInChargeCheck?: Maybe<Scalars['String']>;
  countersignedByOtherDepartmentHeadsCheck?: Maybe<Scalars['String']>;
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  generalManagementSecretaryPostCheck?: Maybe<Scalars['String']>;
  generalManagerOpinionCheck?: Maybe<Scalars['String']>;
  headOfGeneralAffairsDepartmentCheck?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  meetingMinutes?: Maybe<Scalars['String']>;
  nameOfTheMotion?: Maybe<Scalars['String']>;
  opinionsOfDepartmentHeadCheck?: Maybe<Scalars['String']>;
  opinionsOfDepartmentLeadersInChargeCheck?: Maybe<Scalars['String']>;
  opinionsOfDeputyGeneralManageCheck?: Maybe<Scalars['String']>;
  personInChargeOfThePartyMassWorkDepartmentCheck?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  proposedMeeting?: Maybe<Scalars['String']>;
  secretRelated?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  theTripleLarge?: Maybe<Scalars['String']>;
  toSubmitForApproval?: Maybe<Scalars['String']>;
};

export type OaProposalsForTheShareholdersMeetingOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  agentName?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  assign?: Maybe<OrderBy>;
  attendDepartment?: Maybe<OrderBy>;
  auditStatus?: Maybe<OrderBy>;
  chairmanOpinionCheck?: Maybe<OrderBy>;
  countersignatureOfLeadersInChargeCheck?: Maybe<OrderBy>;
  countersignedByOtherDepartmentHeadsCheck?: Maybe<OrderBy>;
  generalManagementSecretaryPostCheck?: Maybe<OrderBy>;
  generalManagerOpinionCheck?: Maybe<OrderBy>;
  headOfGeneralAffairsDepartmentCheck?: Maybe<OrderBy>;
  headline?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meetingMinutes?: Maybe<OrderBy>;
  nameOfTheMotion?: Maybe<OrderBy>;
  opinionsOfDepartmentHeadCheck?: Maybe<OrderBy>;
  opinionsOfDepartmentLeadersInChargeCheck?: Maybe<OrderBy>;
  opinionsOfDeputyGeneralManageCheck?: Maybe<OrderBy>;
  personInChargeOfThePartyMassWorkDepartmentCheck?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  proposedMeeting?: Maybe<OrderBy>;
  secretRelated?: Maybe<OrderBy>;
  text?: Maybe<OrderBy>;
  theTripleLarge?: Maybe<OrderBy>;
  toSubmitForApproval?: Maybe<OrderBy>;
};

export type OaQuestionnaireKpiBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireKpiBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireKpiBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isQuantify?: Maybe<IntegerComparisonExp>;
  kpiDetails?: Maybe<OaQuestionnaireKpiDetailBoolExp>;
  name?: Maybe<StringComparisonExp>;
  quantifyUnit?: Maybe<StringComparisonExp>;
  quantifyValue?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
  weight?: Maybe<BigDecimalComparisonExp>;
};

export type OaQuestionnaireKpiDetailBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireKpiDetailBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireKpiDetailBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<OaQuestionnaireKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaQuestionnaireKpiDetailInput = {
  content?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<OaQuestionnaireKpiInput>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaQuestionnaireKpiDetailOrderBy = {
  content?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<OaQuestionnaireKpiOrderBy>;
  name?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaQuestionnaireKpiInput = {
  createTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isQuantify?: Maybe<Scalars['Int']>;
  kpiDetails?: Maybe<Array<Maybe<OaQuestionnaireKpiDetailInput>>>;
  name?: Maybe<Scalars['String']>;
  quantifyUnit?: Maybe<Scalars['String']>;
  quantifyValue?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['BigDecimal']>;
};

export type OaQuestionnaireKpiOrderBy = {
  createTime?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isQuantify?: Maybe<OrderBy>;
  kpiDetails?: Maybe<OaQuestionnaireKpiDetailOrderBy>;
  name?: Maybe<OrderBy>;
  quantifyUnit?: Maybe<OrderBy>;
  quantifyValue?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type OaQuestionnairePlanBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnairePlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnairePlanBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  planName?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreEndTime?: Maybe<DateComparisonExp>;
  scoreStartTime?: Maybe<DateComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyStaffs?: Maybe<OaQuestionnaireSurveyStaffBoolExp>;
  template?: Maybe<OaQuestionnaireTaskTemplateBoolExp>;
};

export type OaQuestionnairePlanInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  planName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreEndTime?: Maybe<Scalars['Date']>;
  scoreStartTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyStaffs?: Maybe<Array<Maybe<OaQuestionnaireSurveyStaffInput>>>;
  template?: Maybe<OaQuestionnaireTaskTemplateInput>;
};

export type OaQuestionnairePlanOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  planName?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreEndTime?: Maybe<OrderBy>;
  scoreStartTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyStaffs?: Maybe<OaQuestionnaireSurveyStaffOrderBy>;
  template?: Maybe<OaQuestionnaireTaskTemplateOrderBy>;
};

export type OaQuestionnaireResultBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireResultBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireResultBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<OaQuestionnaireSurveyStaffBoolExp>;
};

export type OaQuestionnaireResultInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<OaQuestionnaireSurveyStaffInput>;
};

export type OaQuestionnaireResultOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<OaQuestionnaireSurveyStaffOrderBy>;
};

export type OaQuestionnaireResultSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireResultSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireResultSaveDtoBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<OaQuestionnaireSaveDtoBoolExp>;
};

export type OaQuestionnaireResultSaveDtoInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<OaQuestionnaireSaveDtoInput>;
};

export type OaQuestionnaireResultSaveDtoOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<OaQuestionnaireSaveDtoOrderBy>;
};

export type OaQuestionnaireSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireSaveDtoBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  questionnaireResults?: Maybe<OaQuestionnaireResultSaveDtoBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<LocalDateTimeComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
};

export type OaQuestionnaireSaveDtoInput = {
  id?: Maybe<Scalars['Long']>;
  questionnaireResults?: Maybe<Array<Maybe<OaQuestionnaireResultSaveDtoInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type OaQuestionnaireSaveDtoOrderBy = {
  id?: Maybe<OrderBy>;
  questionnaireResults?: Maybe<OaQuestionnaireResultSaveDtoOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type OaQuestionnaireSurveyStaffBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireSurveyStaffBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireSurveyStaffBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  questionnairePlan?: Maybe<OaQuestionnairePlanBoolExp>;
  questionnaireResults?: Maybe<OaQuestionnaireResultBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<LocalDateTimeComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyDepartmentId?: Maybe<IntegerComparisonExp>;
  surveyDepartmentName?: Maybe<StringComparisonExp>;
  surveyJobId?: Maybe<IntegerComparisonExp>;
  surveyJobName?: Maybe<StringComparisonExp>;
  surveyUserId?: Maybe<IntegerComparisonExp>;
  surveyUsername?: Maybe<StringComparisonExp>;
  updateState?: Maybe<IntegerComparisonExp>;
};

export type OaQuestionnaireSurveyStaffInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  questionnairePlan?: Maybe<OaQuestionnairePlanInput>;
  questionnaireResults?: Maybe<Array<Maybe<OaQuestionnaireResultInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyDepartmentId?: Maybe<Scalars['Int']>;
  surveyDepartmentName?: Maybe<Scalars['String']>;
  surveyJobId?: Maybe<Scalars['Int']>;
  surveyJobName?: Maybe<Scalars['String']>;
  surveyUserId?: Maybe<Scalars['Int']>;
  surveyUsername?: Maybe<Scalars['String']>;
  updateState?: Maybe<Scalars['Int']>;
};

export type OaQuestionnaireSurveyStaffOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  questionnairePlan?: Maybe<OaQuestionnairePlanOrderBy>;
  questionnaireResults?: Maybe<OaQuestionnaireResultOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyDepartmentId?: Maybe<OrderBy>;
  surveyDepartmentName?: Maybe<OrderBy>;
  surveyJobId?: Maybe<OrderBy>;
  surveyJobName?: Maybe<OrderBy>;
  surveyUserId?: Maybe<OrderBy>;
  surveyUsername?: Maybe<OrderBy>;
  updateState?: Maybe<OrderBy>;
};

export type OaQuestionnaireTaskTemplateBoolExp = {
  _and?: Maybe<Array<Maybe<OaQuestionnaireTaskTemplateBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaQuestionnaireTaskTemplateBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpis?: Maybe<OaQuestionnaireKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  period?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaQuestionnaireTaskTemplateInput = {
  createTime?: Maybe<Scalars['Date']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpis?: Maybe<Array<Maybe<OaQuestionnaireKpiInput>>>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaQuestionnaireTaskTemplateOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  period?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaReportManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaReportManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaReportManagementListBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  personId?: Maybe<StringComparisonExp>;
  replyMessage?: Maybe<StringComparisonExp>;
  reportContent?: Maybe<StringComparisonExp>;
  reportDepartment?: Maybe<StringComparisonExp>;
  reportDepartmentName?: Maybe<StringComparisonExp>;
  reportPersonnel?: Maybe<StringComparisonExp>;
  reportingPeriod?: Maybe<StringComparisonExp>;
  state?: Maybe<LongComparisonExp>;
  submissionDate?: Maybe<DateComparisonExp>;
};

export type OaReportManagementListInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  id?: Maybe<Scalars['Long']>;
  personId?: Maybe<Scalars['String']>;
  replyMessage?: Maybe<Scalars['String']>;
  reportContent?: Maybe<Scalars['String']>;
  reportDepartment?: Maybe<Scalars['String']>;
  reportDepartmentName?: Maybe<Scalars['String']>;
  reportPersonnel?: Maybe<Scalars['String']>;
  reportingPeriod?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Long']>;
  submissionDate?: Maybe<Scalars['Date']>;
};

export type OaReportManagementListOrderBy = {
  id?: Maybe<OrderBy>;
  personId?: Maybe<OrderBy>;
  replyMessage?: Maybe<OrderBy>;
  reportContent?: Maybe<OrderBy>;
  reportDepartment?: Maybe<OrderBy>;
  reportDepartmentName?: Maybe<OrderBy>;
  reportPersonnel?: Maybe<OrderBy>;
  reportingPeriod?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  submissionDate?: Maybe<OrderBy>;
};

export type OaReportManagementSubmitBoolExp = {
  _and?: Maybe<Array<Maybe<OaReportManagementSubmitBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaReportManagementSubmitBoolExp>>>;
  accessory?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  reportContent?: Maybe<StringComparisonExp>;
  reportDepartment?: Maybe<StringComparisonExp>;
  reportPersonnel?: Maybe<StringComparisonExp>;
  reportingPeriod?: Maybe<StringComparisonExp>;
  submissionDate?: Maybe<DateComparisonExp>;
};

export type OaReportManagementSubmitInput = {
  accessory?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  reportContent?: Maybe<Scalars['String']>;
  reportDepartment?: Maybe<Scalars['String']>;
  reportPersonnel?: Maybe<Scalars['String']>;
  reportingPeriod?: Maybe<Scalars['String']>;
  submissionDate?: Maybe<Scalars['Date']>;
};

export type OaReportManagementSubmitOrderBy = {
  accessory?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reportContent?: Maybe<OrderBy>;
  reportDepartment?: Maybe<OrderBy>;
  reportPersonnel?: Maybe<OrderBy>;
  reportingPeriod?: Maybe<OrderBy>;
  submissionDate?: Maybe<OrderBy>;
};

export type OaScheduleSurveyListBoolExp = {
  _and?: Maybe<Array<Maybe<OaScheduleSurveyListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaScheduleSurveyListBoolExp>>>;
  date?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  issuer?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type OaScheduleSurveyListInput = {
  date?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  issuer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type OaScheduleSurveyListOrderBy = {
  date?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  issuer?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type OaSealForLetterOfIntroductionBoolExp = {
  _and?: Maybe<Array<Maybe<OaSealForLetterOfIntroductionBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaSealForLetterOfIntroductionBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  annex?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  departmentheadCheck?: Maybe<StringComparisonExp>;
  generalaffairsdepartmentCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  reasons?: Maybe<StringComparisonExp>;
};

export type OaSealForLetterOfIntroductionInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  annex?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  departmentheadCheck?: Maybe<Scalars['String']>;
  generalaffairsdepartmentCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  reasons?: Maybe<Scalars['String']>;
};

export type OaSealForLetterOfIntroductionOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  annex?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  departmentheadCheck?: Maybe<OrderBy>;
  generalaffairsdepartmentCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  reasons?: Maybe<OrderBy>;
};

export type OaSharedFoldersBoolExp = {
  _and?: Maybe<Array<Maybe<OaSharedFoldersBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaSharedFoldersBoolExp>>>;
  enclosure?: Maybe<OaFileBoolExp>;
  fileName?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  uploadeTime?: Maybe<DateComparisonExp>;
  uploader?: Maybe<StringComparisonExp>;
};

export type OaSharedFoldersInput = {
  enclosure?: Maybe<Array<Maybe<OaFileInput>>>;
  fileName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
  type?: Maybe<Scalars['String']>;
  uploadeTime?: Maybe<Scalars['Date']>;
  uploader?: Maybe<Scalars['String']>;
};

export type OaSharedFoldersOrderBy = {
  fileName?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  uploadeTime?: Maybe<OrderBy>;
  uploader?: Maybe<OrderBy>;
};

export type OaStampUseBoolExp = {
  _and?: Maybe<Array<Maybe<OaStampUseBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaStampUseBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  annexUrl?: Maybe<StringComparisonExp>;
  applyReasons?: Maybe<StringComparisonExp>;
  applyTime?: Maybe<DateComparisonExp>;
  applyType?: Maybe<StringComparisonExp>;
  applyUser?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sealType?: Maybe<StringComparisonExp>;
  sealUseNumber?: Maybe<IntegerComparisonExp>;
  sealUseTime?: Maybe<DateComparisonExp>;
  sealUser?: Maybe<LongComparisonExp>;
  state?: Maybe<StringComparisonExp>;
};

export type OaStampUseInput = {
  annex?: Maybe<Scalars['String']>;
  annexUrl?: Maybe<Scalars['String']>;
  applyReasons?: Maybe<Scalars['String']>;
  applyTime?: Maybe<Scalars['Date']>;
  applyType?: Maybe<Scalars['String']>;
  applyUser?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  remark?: Maybe<Scalars['String']>;
  sealType?: Maybe<Scalars['String']>;
  sealUseNumber?: Maybe<Scalars['Int']>;
  sealUseTime?: Maybe<Scalars['Date']>;
  sealUser?: Maybe<Scalars['Long']>;
  state?: Maybe<Scalars['String']>;
};

export type OaStampUseOrderBy = {
  annex?: Maybe<OrderBy>;
  annexUrl?: Maybe<OrderBy>;
  applyReasons?: Maybe<OrderBy>;
  applyTime?: Maybe<OrderBy>;
  applyType?: Maybe<OrderBy>;
  applyUser?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sealType?: Maybe<OrderBy>;
  sealUseNumber?: Maybe<OrderBy>;
  sealUseTime?: Maybe<OrderBy>;
  sealUser?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaStamplendBoolExp = {
  _and?: Maybe<Array<Maybe<OaStamplendBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaStamplendBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  annex?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  departmentheadCheck?: Maybe<StringComparisonExp>;
  generalaffairsdepartmentCheck?: Maybe<StringComparisonExp>;
  generalmanagerCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaderinchargeCheck?: Maybe<StringComparisonExp>;
  lendingTime?: Maybe<DateComparisonExp>;
  presidenteCheck?: Maybe<StringComparisonExp>;
  reasons?: Maybe<StringComparisonExp>;
  returnTime?: Maybe<DateComparisonExp>;
};

export type OaStamplendInput = {
  agent?: Maybe<Scalars['Int']>;
  agentDepartment?: Maybe<Scalars['String']>;
  annex?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  departmentheadCheck?: Maybe<Scalars['String']>;
  generalaffairsdepartmentCheck?: Maybe<Scalars['String']>;
  generalmanagerCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  leaderinchargeCheck?: Maybe<Scalars['String']>;
  lendingTime?: Maybe<Scalars['Date']>;
  presidenteCheck?: Maybe<Scalars['String']>;
  reasons?: Maybe<Scalars['String']>;
  returnTime?: Maybe<Scalars['Date']>;
};

export type OaStamplendOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  annex?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  departmentheadCheck?: Maybe<OrderBy>;
  generalaffairsdepartmentCheck?: Maybe<OrderBy>;
  generalmanagerCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaderinchargeCheck?: Maybe<OrderBy>;
  lendingTime?: Maybe<OrderBy>;
  presidenteCheck?: Maybe<OrderBy>;
  reasons?: Maybe<OrderBy>;
  returnTime?: Maybe<OrderBy>;
};

export type OaSuperviseAndExamineListBoolExp = {
  _and?: Maybe<Array<Maybe<OaSuperviseAndExamineListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaSuperviseAndExamineListBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  assignAccording?: Maybe<StringComparisonExp>;
  coOrganizer?: Maybe<StringComparisonExp>;
  examinationReport?: Maybe<StringComparisonExp>;
  feedbackTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leadPerson?: Maybe<StringComparisonExp>;
  leadingUnit?: Maybe<StringComparisonExp>;
  principal?: Maybe<StringComparisonExp>;
  superviseName?: Maybe<StringComparisonExp>;
  transferredToBasis?: Maybe<StringComparisonExp>;
  transferredToContent?: Maybe<StringComparisonExp>;
  transferredToDeadline?: Maybe<StringComparisonExp>;
  whether?: Maybe<StringComparisonExp>;
};

export type OaSuperviseAndExamineListInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  assignAccording?: Maybe<Scalars['String']>;
  coOrganizer?: Maybe<Scalars['String']>;
  examinationReport?: Maybe<Scalars['String']>;
  feedbackTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  leadPerson?: Maybe<Scalars['String']>;
  leadingUnit?: Maybe<Scalars['String']>;
  principal?: Maybe<Scalars['String']>;
  superviseName?: Maybe<Scalars['String']>;
  transferredToBasis?: Maybe<Scalars['String']>;
  transferredToContent?: Maybe<Scalars['String']>;
  transferredToDeadline?: Maybe<Scalars['String']>;
  whether?: Maybe<Scalars['String']>;
};

export type OaSuperviseAndExamineListOrderBy = {
  assignAccording?: Maybe<OrderBy>;
  coOrganizer?: Maybe<OrderBy>;
  examinationReport?: Maybe<OrderBy>;
  feedbackTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leadPerson?: Maybe<OrderBy>;
  leadingUnit?: Maybe<OrderBy>;
  principal?: Maybe<OrderBy>;
  superviseName?: Maybe<OrderBy>;
  transferredToBasis?: Maybe<OrderBy>;
  transferredToContent?: Maybe<OrderBy>;
  transferredToDeadline?: Maybe<OrderBy>;
  whether?: Maybe<OrderBy>;
};

export type OaSurveillanceVideoBoolExp = {
  _and?: Maybe<Array<Maybe<OaSurveillanceVideoBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaSurveillanceVideoBoolExp>>>;
  annex?: Maybe<OaFileBoolExp>;
  applyContent?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  replay?: Maybe<StringComparisonExp>;
  replayTime?: Maybe<DateComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  watchRegion?: Maybe<StringComparisonExp>;
  watchTime?: Maybe<DateComparisonExp>;
};

export type OaSurveillanceVideoInput = {
  annex?: Maybe<Array<Maybe<OaFileInput>>>;
  applyContent?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  replay?: Maybe<Scalars['String']>;
  replayTime?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Long']>;
  watchRegion?: Maybe<Scalars['String']>;
  watchTime?: Maybe<Scalars['Date']>;
};

export type OaSurveillanceVideoOrderBy = {
  applyContent?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  replay?: Maybe<OrderBy>;
  replayTime?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  watchRegion?: Maybe<OrderBy>;
  watchTime?: Maybe<OrderBy>;
};

export type OaUserBoolExp = {
  _and?: Maybe<Array<Maybe<OaUserBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaUserBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  password?: Maybe<StringComparisonExp>;
  roles?: Maybe<StringComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

export type OaUserInput = {
  id?: Maybe<Scalars['Long']>;
  password?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type OaUserOrderBy = {
  id?: Maybe<OrderBy>;
  password?: Maybe<OrderBy>;
  roles?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

export type OaVehicleApplicationApplyBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleApplicationApplyBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleApplicationApplyBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  applicationDepartureTime?: Maybe<DateComparisonExp>;
  applicationDestination?: Maybe<StringComparisonExp>;
  applicationEntourage?: Maybe<StringComparisonExp>;
  applicationEstimatedMileage?: Maybe<DoubleComparisonExp>;
  applicationEstimatedReturnTime?: Maybe<DateComparisonExp>;
  applicationRemarks?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  applicationVehicleUser?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaVehicleApplicationApplyInput = {
  agent?: Maybe<Scalars['Int']>;
  applicationDepartureTime?: Maybe<Scalars['Date']>;
  applicationDestination?: Maybe<Scalars['String']>;
  applicationEntourage?: Maybe<Scalars['String']>;
  applicationEstimatedMileage?: Maybe<Scalars['Float']>;
  applicationEstimatedReturnTime?: Maybe<Scalars['Date']>;
  applicationRemarks?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  applicationVehicleUser?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaVehicleApplicationApplyOrderBy = {
  agent?: Maybe<OrderBy>;
  applicationDepartureTime?: Maybe<OrderBy>;
  applicationDestination?: Maybe<OrderBy>;
  applicationEntourage?: Maybe<OrderBy>;
  applicationEstimatedMileage?: Maybe<OrderBy>;
  applicationEstimatedReturnTime?: Maybe<OrderBy>;
  applicationRemarks?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  applicationVehicleUser?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaVehicleApplicationBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleApplicationBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleApplicationBoolExp>>>;
  agent?: Maybe<IntegerComparisonExp>;
  applicationCollectionMileage?: Maybe<DoubleComparisonExp>;
  applicationDepartureTime?: Maybe<DateComparisonExp>;
  applicationDestination?: Maybe<StringComparisonExp>;
  applicationDriver?: Maybe<StringComparisonExp>;
  applicationDriverId?: Maybe<IntegerComparisonExp>;
  applicationEntourage?: Maybe<StringComparisonExp>;
  applicationEstimatedMileage?: Maybe<DoubleComparisonExp>;
  applicationEstimatedReturnTime?: Maybe<DateComparisonExp>;
  applicationMileage?: Maybe<DoubleComparisonExp>;
  applicationRemarks?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  applicationVehicleUser?: Maybe<StringComparisonExp>;
  carId?: Maybe<OaVehicleDetailsBoolExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaVehicleApplicationEndBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleApplicationEndBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleApplicationEndBoolExp>>>;
  applicationCollectionMileage?: Maybe<DoubleComparisonExp>;
  applicationMileage?: Maybe<DoubleComparisonExp>;
  applicationRemarks?: Maybe<StringComparisonExp>;
  carId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  path?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  state?: Maybe<IntegerComparisonExp>;
};

export type OaVehicleApplicationEndInput = {
  applicationCollectionMileage?: Maybe<Scalars['Float']>;
  applicationMileage?: Maybe<Scalars['Float']>;
  applicationRemarks?: Maybe<Scalars['String']>;
  carId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaVehicleApplicationEndOrderBy = {
  applicationCollectionMileage?: Maybe<OrderBy>;
  applicationMileage?: Maybe<OrderBy>;
  applicationRemarks?: Maybe<OrderBy>;
  carId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaVehicleApplicationInput = {
  agent?: Maybe<Scalars['Int']>;
  applicationCollectionMileage?: Maybe<Scalars['Float']>;
  applicationDepartureTime?: Maybe<Scalars['Date']>;
  applicationDestination?: Maybe<Scalars['String']>;
  applicationDriver?: Maybe<Scalars['String']>;
  applicationDriverId?: Maybe<Scalars['Int']>;
  applicationEntourage?: Maybe<Scalars['String']>;
  applicationEstimatedMileage?: Maybe<Scalars['Float']>;
  applicationEstimatedReturnTime?: Maybe<Scalars['Date']>;
  applicationMileage?: Maybe<Scalars['Float']>;
  applicationRemarks?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  applicationVehicleUser?: Maybe<Scalars['String']>;
  carId?: Maybe<OaVehicleDetailsInput>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['Int']>;
};

export type OaVehicleApplicationOrderBy = {
  agent?: Maybe<OrderBy>;
  applicationCollectionMileage?: Maybe<OrderBy>;
  applicationDepartureTime?: Maybe<OrderBy>;
  applicationDestination?: Maybe<OrderBy>;
  applicationDriver?: Maybe<OrderBy>;
  applicationDriverId?: Maybe<OrderBy>;
  applicationEntourage?: Maybe<OrderBy>;
  applicationEstimatedMileage?: Maybe<OrderBy>;
  applicationEstimatedReturnTime?: Maybe<OrderBy>;
  applicationMileage?: Maybe<OrderBy>;
  applicationRemarks?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  applicationVehicleUser?: Maybe<OrderBy>;
  carId?: Maybe<OaVehicleDetailsOrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaVehicleAutomobileInsuranceBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleAutomobileInsuranceBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleAutomobileInsuranceBoolExp>>>;
  applicant?: Maybe<StringComparisonExp>;
  beneficiary?: Maybe<StringComparisonExp>;
  dateDue?: Maybe<DateComparisonExp>;
  details?: Maybe<OaVehicleDetailsBoolExp>;
  id?: Maybe<LongComparisonExp>;
  insuranceCompany?: Maybe<StringComparisonExp>;
  insuranceCosts?: Maybe<BigDecimalComparisonExp>;
  insuranceType?: Maybe<StringComparisonExp>;
  insuredDate?: Maybe<DateComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
};

export type OaVehicleAutomobileInsuranceInput = {
  applicant?: Maybe<Scalars['String']>;
  beneficiary?: Maybe<Scalars['String']>;
  dateDue?: Maybe<Scalars['Date']>;
  details?: Maybe<OaVehicleDetailsInput>;
  id?: Maybe<Scalars['Long']>;
  insuranceCompany?: Maybe<Scalars['String']>;
  insuranceCosts?: Maybe<Scalars['BigDecimal']>;
  insuranceType?: Maybe<Scalars['String']>;
  insuredDate?: Maybe<Scalars['Date']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
};

export type OaVehicleAutomobileInsuranceOrderBy = {
  applicant?: Maybe<OrderBy>;
  beneficiary?: Maybe<OrderBy>;
  dateDue?: Maybe<OrderBy>;
  details?: Maybe<OaVehicleDetailsOrderBy>;
  id?: Maybe<OrderBy>;
  insuranceCompany?: Maybe<OrderBy>;
  insuranceCosts?: Maybe<OrderBy>;
  insuranceType?: Maybe<OrderBy>;
  insuredDate?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
};

export type OaVehicleDetailsBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleDetailsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleDetailsBoolExp>>>;
  capacity?: Maybe<StringComparisonExp>;
  etcCost?: Maybe<OaVehicleEtcCostBoolExp>;
  id?: Maybe<LongComparisonExp>;
  insuranceCosts?: Maybe<OaVehicleAutomobileInsuranceBoolExp>;
  kilometres?: Maybe<BigDecimalComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  maintenanceCosts?: Maybe<OaVehicleMaintenanceCostsBoolExp>;
  motorcycleType?: Maybe<StringComparisonExp>;
  oilCardExtra?: Maybe<OaVehicleOilCardExtraBoolExp>;
  state?: Maybe<StringComparisonExp>;
  totalMoney?: Maybe<BigDecimalComparisonExp>;
  upkeepCost?: Maybe<OaVehicleUpkeepCostBoolExp>;
};

export type OaVehicleDetailsInput = {
  capacity?: Maybe<Scalars['String']>;
  etcCost?: Maybe<Array<Maybe<OaVehicleEtcCostInput>>>;
  id?: Maybe<Scalars['Long']>;
  insuranceCosts?: Maybe<Array<Maybe<OaVehicleAutomobileInsuranceInput>>>;
  kilometres?: Maybe<Scalars['BigDecimal']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  maintenanceCosts?: Maybe<Array<Maybe<OaVehicleMaintenanceCostsInput>>>;
  motorcycleType?: Maybe<Scalars['String']>;
  oilCardExtra?: Maybe<Array<Maybe<OaVehicleOilCardExtraInput>>>;
  state?: Maybe<Scalars['String']>;
  totalMoney?: Maybe<Scalars['BigDecimal']>;
  upkeepCost?: Maybe<Array<Maybe<OaVehicleUpkeepCostInput>>>;
};

export type OaVehicleDetailsOrderBy = {
  capacity?: Maybe<OrderBy>;
  etcCost?: Maybe<OaVehicleEtcCostOrderBy>;
  id?: Maybe<OrderBy>;
  insuranceCosts?: Maybe<OaVehicleAutomobileInsuranceOrderBy>;
  kilometres?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  maintenanceCosts?: Maybe<OaVehicleMaintenanceCostsOrderBy>;
  motorcycleType?: Maybe<OrderBy>;
  oilCardExtra?: Maybe<OaVehicleOilCardExtraOrderBy>;
  state?: Maybe<OrderBy>;
  totalMoney?: Maybe<OrderBy>;
  upkeepCost?: Maybe<OaVehicleUpkeepCostOrderBy>;
};

export type OaVehicleEtcCostBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleEtcCostBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleEtcCostBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  date?: Maybe<DateComparisonExp>;
  destination?: Maybe<StringComparisonExp>;
  details?: Maybe<OaVehicleDetailsBoolExp>;
  driver?: Maybe<StringComparisonExp>;
  etcCost?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  particularsOfMatter?: Maybe<StringComparisonExp>;
  placeOfDeparture?: Maybe<StringComparisonExp>;
};

export type OaVehicleEtcCostInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  date?: Maybe<Scalars['Date']>;
  destination?: Maybe<Scalars['String']>;
  details?: Maybe<OaVehicleDetailsInput>;
  driver?: Maybe<Scalars['String']>;
  etcCost?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  particularsOfMatter?: Maybe<Scalars['String']>;
  placeOfDeparture?: Maybe<Scalars['String']>;
};

export type OaVehicleEtcCostOrderBy = {
  date?: Maybe<OrderBy>;
  destination?: Maybe<OrderBy>;
  details?: Maybe<OaVehicleDetailsOrderBy>;
  driver?: Maybe<OrderBy>;
  etcCost?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  particularsOfMatter?: Maybe<OrderBy>;
  placeOfDeparture?: Maybe<OrderBy>;
};

export type OaVehicleInformationBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleInformationBoolExp>>>;
  annualInspectionTime?: Maybe<DateComparisonExp>;
  buyMoney?: Maybe<BigDecimalComparisonExp>;
  buyTime?: Maybe<DateComparisonExp>;
  capacity?: Maybe<IntegerComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  insuranceTime?: Maybe<DateComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  motorcycleType?: Maybe<StringComparisonExp>;
  oilCardId?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  state?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaVehicleInformationInput = {
  annualInspectionTime?: Maybe<Scalars['Date']>;
  buyMoney?: Maybe<Scalars['BigDecimal']>;
  buyTime?: Maybe<Scalars['Date']>;
  capacity?: Maybe<Scalars['Int']>;
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  insuranceTime?: Maybe<Scalars['Date']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  motorcycleType?: Maybe<Scalars['String']>;
  oilCardId?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaVehicleInformationOrderBy = {
  annualInspectionTime?: Maybe<OrderBy>;
  buyMoney?: Maybe<OrderBy>;
  buyTime?: Maybe<OrderBy>;
  capacity?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  insuranceTime?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  motorcycleType?: Maybe<OrderBy>;
  oilCardId?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaVehicleMaintenanceBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleMaintenanceBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleMaintenanceBoolExp>>>;
  accessory?: Maybe<StringComparisonExp>;
  captainCheck?: Maybe<StringComparisonExp>;
  carId?: Maybe<OaVehicleInformationBoolExp>;
  createTime?: Maybe<DateComparisonExp>;
  departmentCheck?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  driverId?: Maybe<OaDriverInformationBoolExp>;
  estimatedAmount?: Maybe<BigDecimalComparisonExp>;
  generalDepartmentCheck?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  receiptMoney?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type OaVehicleMaintenanceCostsBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleMaintenanceCostsBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleMaintenanceCostsBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  date?: Maybe<DateComparisonExp>;
  details?: Maybe<OaVehicleDetailsBoolExp>;
  driver?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  maintenanceCost?: Maybe<BigDecimalComparisonExp>;
  particularsOfMatter?: Maybe<StringComparisonExp>;
};

export type OaVehicleMaintenanceCostsInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  date?: Maybe<Scalars['Date']>;
  details?: Maybe<OaVehicleDetailsInput>;
  driver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  maintenanceCost?: Maybe<Scalars['BigDecimal']>;
  particularsOfMatter?: Maybe<Scalars['String']>;
};

export type OaVehicleMaintenanceCostsOrderBy = {
  date?: Maybe<OrderBy>;
  details?: Maybe<OaVehicleDetailsOrderBy>;
  driver?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  maintenanceCost?: Maybe<OrderBy>;
  particularsOfMatter?: Maybe<OrderBy>;
};

export type OaVehicleMaintenanceInput = {
  accessory?: Maybe<Scalars['String']>;
  captainCheck?: Maybe<Scalars['String']>;
  carId?: Maybe<OaVehicleInformationInput>;
  createTime?: Maybe<Scalars['Date']>;
  departmentCheck?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  driverId?: Maybe<OaDriverInformationInput>;
  estimatedAmount?: Maybe<Scalars['BigDecimal']>;
  generalDepartmentCheck?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  receiptMoney?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type OaVehicleMaintenanceOrderBy = {
  accessory?: Maybe<OrderBy>;
  captainCheck?: Maybe<OrderBy>;
  carId?: Maybe<OaVehicleInformationOrderBy>;
  createTime?: Maybe<OrderBy>;
  departmentCheck?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  driverId?: Maybe<OaDriverInformationOrderBy>;
  estimatedAmount?: Maybe<OrderBy>;
  generalDepartmentCheck?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  receiptMoney?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type OaVehicleManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleManagementListBoolExp>>>;
  capacity?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  licensePlateNumber?: Maybe<IntegerComparisonExp>;
  motorcycleType?: Maybe<StringComparisonExp>;
  state?: Maybe<StringComparisonExp>;
};

export type OaVehicleManagementListInput = {
  capacity?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  licensePlateNumber?: Maybe<Scalars['Int']>;
  motorcycleType?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type OaVehicleManagementListOrderBy = {
  capacity?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  motorcycleType?: Maybe<OrderBy>;
  state?: Maybe<OrderBy>;
};

export type OaVehicleOilCardExtraBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleOilCardExtraBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleOilCardExtraBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  date?: Maybe<DateComparisonExp>;
  details?: Maybe<OaVehicleDetailsBoolExp>;
  driver?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  oilCardExtra?: Maybe<BigDecimalComparisonExp>;
  particularsOfMatter?: Maybe<StringComparisonExp>;
};

export type OaVehicleOilCardExtraInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  date?: Maybe<Scalars['Date']>;
  details?: Maybe<OaVehicleDetailsInput>;
  driver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  oilCardExtra?: Maybe<Scalars['BigDecimal']>;
  particularsOfMatter?: Maybe<Scalars['String']>;
};

export type OaVehicleOilCardExtraOrderBy = {
  date?: Maybe<OrderBy>;
  details?: Maybe<OaVehicleDetailsOrderBy>;
  driver?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  oilCardExtra?: Maybe<OrderBy>;
  particularsOfMatter?: Maybe<OrderBy>;
};

export type OaVehicleUpkeepCostBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleUpkeepCostBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleUpkeepCostBoolExp>>>;
  accessory?: Maybe<OaFileBoolExp>;
  date?: Maybe<DateComparisonExp>;
  details?: Maybe<OaVehicleDetailsBoolExp>;
  driver?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  particularsOfMatter?: Maybe<StringComparisonExp>;
  upkeepCost?: Maybe<BigDecimalComparisonExp>;
};

export type OaVehicleUpkeepCostInput = {
  accessory?: Maybe<Array<Maybe<OaFileInput>>>;
  date?: Maybe<Scalars['Date']>;
  details?: Maybe<OaVehicleDetailsInput>;
  driver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  particularsOfMatter?: Maybe<Scalars['String']>;
  upkeepCost?: Maybe<Scalars['BigDecimal']>;
};

export type OaVehicleUpkeepCostOrderBy = {
  date?: Maybe<OrderBy>;
  details?: Maybe<OaVehicleDetailsOrderBy>;
  driver?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  particularsOfMatter?: Maybe<OrderBy>;
  upkeepCost?: Maybe<OrderBy>;
};

export type OaVehicleUseListBoolExp = {
  _and?: Maybe<Array<Maybe<OaVehicleUseListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaVehicleUseListBoolExp>>>;
  date?: Maybe<DateComparisonExp>;
  driver?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kilometres?: Maybe<BigDecimalComparisonExp>;
  licensePlateNumber?: Maybe<StringComparisonExp>;
  proposer?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  totalKilometers?: Maybe<BigDecimalComparisonExp>;
  userDepartment?: Maybe<StringComparisonExp>;
};

export type OaVehicleUseListInput = {
  date?: Maybe<Scalars['Date']>;
  driver?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kilometres?: Maybe<Scalars['BigDecimal']>;
  licensePlateNumber?: Maybe<Scalars['String']>;
  proposer?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  totalKilometers?: Maybe<Scalars['BigDecimal']>;
  userDepartment?: Maybe<Scalars['String']>;
};

export type OaVehicleUseListOrderBy = {
  date?: Maybe<OrderBy>;
  driver?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kilometres?: Maybe<OrderBy>;
  licensePlateNumber?: Maybe<OrderBy>;
  proposer?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  totalKilometers?: Maybe<OrderBy>;
  userDepartment?: Maybe<OrderBy>;
};

export type OaWeeklyManagementListBoolExp = {
  _and?: Maybe<Array<Maybe<OaWeeklyManagementListBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaWeeklyManagementListBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  personnel?: Maybe<StringComparisonExp>;
  personnelId?: Maybe<LongComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  week?: Maybe<StringComparisonExp>;
  weeklyContent?: Maybe<StringComparisonExp>;
};

export type OaWeeklyManagementListInput = {
  department?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  personnel?: Maybe<Scalars['String']>;
  personnelId?: Maybe<Scalars['Long']>;
  startTime?: Maybe<Scalars['Date']>;
  week?: Maybe<Scalars['String']>;
  weeklyContent?: Maybe<Scalars['String']>;
};

export type OaWeeklyManagementListOrderBy = {
  department?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  personnel?: Maybe<OrderBy>;
  personnelId?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  week?: Maybe<OrderBy>;
  weeklyContent?: Maybe<OrderBy>;
};

export type OaWeeklyManagementSubmitBoolExp = {
  _and?: Maybe<Array<Maybe<OaWeeklyManagementSubmitBoolExp>>>;
  _or?: Maybe<Array<Maybe<OaWeeklyManagementSubmitBoolExp>>>;
  dateParagraph?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  personnel?: Maybe<StringComparisonExp>;
  week?: Maybe<StringComparisonExp>;
  weeklyContent?: Maybe<StringComparisonExp>;
};

export type OaWeeklyManagementSubmitInput = {
  dateParagraph?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  personnel?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['String']>;
  weeklyContent?: Maybe<Scalars['String']>;
};

export type OaWeeklyManagementSubmitOrderBy = {
  dateParagraph?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  personnel?: Maybe<OrderBy>;
  week?: Maybe<OrderBy>;
  weeklyContent?: Maybe<OrderBy>;
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrgSysDashboardCardBoolExp = {
  _and?: Maybe<Array<Maybe<OrgSysDashboardCardBoolExp>>>;
  _or?: Maybe<Array<Maybe<OrgSysDashboardCardBoolExp>>>;
  appId?: Maybe<IntegerComparisonExp>;
  cardKey?: Maybe<StringComparisonExp>;
  deleted?: Maybe<BooleanComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isAllVisible?: Maybe<BooleanComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type OrgSysDashboardCardOrderBy = {
  appId?: Maybe<OrderBy>;
  cardKey?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isAllVisible?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type OrgSysUserLayoutBoolExp = {
  _and?: Maybe<Array<Maybe<OrgSysUserLayoutBoolExp>>>;
  _or?: Maybe<Array<Maybe<OrgSysUserLayoutBoolExp>>>;
  createdDate?: Maybe<LocalDateTimeComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExp>;
  layout?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  userId?: Maybe<LongComparisonExp>;
  widgetList?: Maybe<OrgSysUserLayoutCardBoolExp>;
};

export type OrgSysUserLayoutCardBoolExp = {
  _and?: Maybe<Array<Maybe<OrgSysUserLayoutCardBoolExp>>>;
  _or?: Maybe<Array<Maybe<OrgSysUserLayoutCardBoolExp>>>;
  card?: Maybe<OrgSysDashboardCardBoolExp>;
  id?: Maybe<LongComparisonExp>;
  layout?: Maybe<OrgSysUserLayoutBoolExp>;
  type?: Maybe<IntegerComparisonExp>;
};

export type OrgSysUserLayoutCardMutationInput = {
  cardId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  layout?: Maybe<OrgSysUserLayoutMutationInput>;
  type?: Maybe<Scalars['Int']>;
};

export type OrgSysUserLayoutCardOrderBy = {
  id?: Maybe<OrderBy>;
  layout?: Maybe<OrgSysUserLayoutOrderBy>;
  type?: Maybe<OrderBy>;
};

export type OrgSysUserLayoutMutationInput = {
  createdDate?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  layout?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Long']>;
  widgetList?: Maybe<Array<Maybe<OrgSysUserLayoutCardMutationInput>>>;
};

export type OrgSysUserLayoutOrderBy = {
  createdDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  layout?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  widgetList?: Maybe<OrgSysUserLayoutCardOrderBy>;
};

export type PartyBoolExpInput = {
  _and?: Maybe<Array<PartyBoolExpInput>>;
  _or?: Maybe<Array<PartyBoolExpInput>>;
  addr?: Maybe<StringComparisonExpInput>;
  children?: Maybe<PartyBoolExpInput>;
  contact?: Maybe<StringComparisonExpInput>;
  contactNo?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  fundDate?: Maybe<LocalDateTimeComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  parent?: Maybe<PartyBoolExpInput>;
  partyOrgType?: Maybe<IntegerComparisonExpInput>;
  staffParty?: Maybe<StaffPartyBoolExpInput>;
};

export type PartyInput = {
  addr?: Maybe<Scalars['String']>;
  children?: Maybe<Array<PartyInput>>;
  contact?: Maybe<Scalars['String']>;
  contactNo?: Maybe<Scalars['String']>;
  department?: Maybe<DepartmentInput>;
  fundDate?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<PartyInput>;
  partyOrgType?: Maybe<Scalars['Int']>;
  staffParty?: Maybe<Array<StaffPartyInput>>;
};

export type PartyOrderByInput = {
  addr?: Maybe<OrderBy>;
  children?: Maybe<PartyOrderByInput>;
  contact?: Maybe<OrderBy>;
  contactNo?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  fundDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent?: Maybe<PartyOrderByInput>;
  partyOrgType?: Maybe<OrderBy>;
  staffParty?: Maybe<StaffPartyOrderByInput>;
};

export type PmActivistMeetingBoolExp = {
  _and?: Maybe<Array<Maybe<PmActivistMeetingBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmActivistMeetingBoolExp>>>;
  abstrac?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  conferenceTitle?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  meetingPlace?: Maybe<StringComparisonExp>;
  meetingTime?: Maybe<DateComparisonExp>;
  presente?: Maybe<StringComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
};

export type PmActivistMeetingInput = {
  abstrac?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  conferenceTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  meetingPlace?: Maybe<Scalars['String']>;
  meetingTime?: Maybe<Scalars['Date']>;
  presente?: Maybe<Scalars['String']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
};

export type PmActivistMeetingOrderBy = {
  abstrac?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  conferenceTitle?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meetingPlace?: Maybe<OrderBy>;
  meetingTime?: Maybe<OrderBy>;
  presente?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
};

export type PmActivistsAutobiographyBoolExp = {
  _and?: Maybe<Array<Maybe<PmActivistsAutobiographyBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmActivistsAutobiographyBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  uploadingDate?: Maybe<DateComparisonExp>;
};

export type PmActivistsAutobiographyInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  uploadingDate?: Maybe<Scalars['Date']>;
};

export type PmActivistsAutobiographyOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  uploadingDate?: Maybe<OrderBy>;
};

export type PmActivistsThinkingReportBoolExp = {
  _and?: Maybe<Array<Maybe<PmActivistsThinkingReportBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmActivistsThinkingReportBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  uploadingDate?: Maybe<DateComparisonExp>;
};

export type PmActivistsThinkingReportInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  uploadingDate?: Maybe<Scalars['Date']>;
};

export type PmActivistsThinkingReportOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  uploadingDate?: Maybe<OrderBy>;
};

export type PmApplicantMemconListBoolExp = {
  _and?: Maybe<Array<Maybe<PmApplicantMemconListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmApplicantMemconListBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applicationDate?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrgainzationName?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  talker?: Maybe<StringComparisonExp>;
};

export type PmApplicantMemconListInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applicationDate?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrgainzationName?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  talker?: Maybe<Scalars['String']>;
};

export type PmApplicantMemconListOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applicationDate?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrgainzationName?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  talker?: Maybe<OrderBy>;
};

export type PmApplicationStageBoolExp = {
  _and?: Maybe<Array<Maybe<PmApplicationStageBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmApplicationStageBoolExp>>>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  stageFiveDate?: Maybe<DateComparisonExp>;
  stageFourDate?: Maybe<DateComparisonExp>;
  stageOneDate?: Maybe<DateComparisonExp>;
  stageThreeDate?: Maybe<DateComparisonExp>;
  stageTwoDate?: Maybe<DateComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  steps?: Maybe<IntegerComparisonExp>;
};

export type PmApplicationStageInput = {
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['String']>;
  stageFiveDate?: Maybe<Scalars['Date']>;
  stageFourDate?: Maybe<Scalars['Date']>;
  stageOneDate?: Maybe<Scalars['Date']>;
  stageThreeDate?: Maybe<Scalars['Date']>;
  stageTwoDate?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  steps?: Maybe<Scalars['Int']>;
};

export type PmApplicationStageOrderBy = {
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  stageFiveDate?: Maybe<OrderBy>;
  stageFourDate?: Maybe<OrderBy>;
  stageOneDate?: Maybe<OrderBy>;
  stageThreeDate?: Maybe<OrderBy>;
  stageTwoDate?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  steps?: Maybe<OrderBy>;
};

export type PmBasicInformationOfCadresBoolExp = {
  _and?: Maybe<Array<Maybe<PmBasicInformationOfCadresBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmBasicInformationOfCadresBoolExp>>>;
  dateOfBirth?: Maybe<DateComparisonExp>;
  degrees?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  employmentPeriod?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobDegrees?: Maybe<StringComparisonExp>;
  joinTime?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  nation?: Maybe<StringComparisonExp>;
  nativePlace?: Maybe<StringComparisonExp>;
  partyBranch?: Maybe<StringComparisonExp>;
  partyPosts?: Maybe<StringComparisonExp>;
  partyTime?: Maybe<DateComparisonExp>;
  politicsStatus?: Maybe<StringComparisonExp>;
  presentOccupation?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  technicalTitles?: Maybe<StringComparisonExp>;
  telNumber?: Maybe<LongComparisonExp>;
  timeSameLevel?: Maybe<DateComparisonExp>;
  workTime?: Maybe<DateComparisonExp>;
};

export type PmBasicInformationOfCadresInput = {
  dateOfBirth?: Maybe<Scalars['Date']>;
  degrees?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  employmentPeriod?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  jobDegrees?: Maybe<Scalars['String']>;
  joinTime?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  nation?: Maybe<Scalars['String']>;
  nativePlace?: Maybe<Scalars['String']>;
  partyBranch?: Maybe<Scalars['String']>;
  partyPosts?: Maybe<Scalars['String']>;
  partyTime?: Maybe<Scalars['Date']>;
  politicsStatus?: Maybe<Scalars['String']>;
  presentOccupation?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  technicalTitles?: Maybe<Scalars['String']>;
  telNumber?: Maybe<Scalars['Long']>;
  timeSameLevel?: Maybe<Scalars['Date']>;
  workTime?: Maybe<Scalars['Date']>;
};

export type PmBasicInformationOfCadresOrderBy = {
  dateOfBirth?: Maybe<OrderBy>;
  degrees?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  employmentPeriod?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobDegrees?: Maybe<OrderBy>;
  joinTime?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  nation?: Maybe<OrderBy>;
  nativePlace?: Maybe<OrderBy>;
  partyBranch?: Maybe<OrderBy>;
  partyPosts?: Maybe<OrderBy>;
  partyTime?: Maybe<OrderBy>;
  politicsStatus?: Maybe<OrderBy>;
  presentOccupation?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  technicalTitles?: Maybe<OrderBy>;
  telNumber?: Maybe<OrderBy>;
  timeSameLevel?: Maybe<OrderBy>;
  workTime?: Maybe<OrderBy>;
};

export type PmBranchPartyDuesPaidBoolExp = {
  _and?: Maybe<Array<Maybe<PmBranchPartyDuesPaidBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmBranchPartyDuesPaidBoolExp>>>;
  actualPaymentAmount?: Maybe<BigDecimalComparisonExp>;
  amountPayable?: Maybe<BigDecimalComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  reportDate?: Maybe<DateComparisonExp>;
};

export type PmBranchPartyDuesPaidInput = {
  actualPaymentAmount?: Maybe<Scalars['BigDecimal']>;
  amountPayable?: Maybe<Scalars['BigDecimal']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  reportDate?: Maybe<Scalars['Date']>;
};

export type PmBranchPartyDuesPaidOrderBy = {
  actualPaymentAmount?: Maybe<OrderBy>;
  amountPayable?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  reportDate?: Maybe<OrderBy>;
};

export type PmBranchPlanBoolExp = {
  _and?: Maybe<Array<Maybe<PmBranchPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmBranchPlanBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  aprilPlanAnnex?: Maybe<StringComparisonExp>;
  aprilPlanImplementation?: Maybe<StringComparisonExp>;
  aprilPlanRemakes?: Maybe<StringComparisonExp>;
  aprilPlanTheme?: Maybe<StringComparisonExp>;
  augustPlanAnnex?: Maybe<StringComparisonExp>;
  augustPlanImplementation?: Maybe<StringComparisonExp>;
  augustPlanRemakes?: Maybe<StringComparisonExp>;
  augustPlanTheme?: Maybe<StringComparisonExp>;
  decemberPlanAnnex?: Maybe<StringComparisonExp>;
  decemberPlanImplementation?: Maybe<StringComparisonExp>;
  decemberPlanRemakes?: Maybe<StringComparisonExp>;
  decemberPlanTheme?: Maybe<StringComparisonExp>;
  februaryPlanAnnex?: Maybe<StringComparisonExp>;
  februaryPlanImplementation?: Maybe<StringComparisonExp>;
  februaryPlanRemakes?: Maybe<StringComparisonExp>;
  februaryPlanTheme?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  januaryPlanAnnex?: Maybe<StringComparisonExp>;
  januaryPlanImplementation?: Maybe<StringComparisonExp>;
  januaryPlanRemakes?: Maybe<StringComparisonExp>;
  januaryPlanTheme?: Maybe<StringComparisonExp>;
  julyPlanAnnex?: Maybe<StringComparisonExp>;
  julyPlanImplementation?: Maybe<StringComparisonExp>;
  julyPlanRemakes?: Maybe<StringComparisonExp>;
  julyPlanTheme?: Maybe<StringComparisonExp>;
  junePlanAnnex?: Maybe<StringComparisonExp>;
  junePlanImplementation?: Maybe<StringComparisonExp>;
  junePlanRemakes?: Maybe<StringComparisonExp>;
  junePlanTheme?: Maybe<StringComparisonExp>;
  marchPlanAnnex?: Maybe<StringComparisonExp>;
  marchPlanImplementation?: Maybe<StringComparisonExp>;
  marchPlanRemakes?: Maybe<StringComparisonExp>;
  marchPlanTheme?: Maybe<StringComparisonExp>;
  mayPlanAnnex?: Maybe<StringComparisonExp>;
  mayPlanImplementation?: Maybe<StringComparisonExp>;
  mayPlanRemakes?: Maybe<StringComparisonExp>;
  mayPlanTheme?: Maybe<StringComparisonExp>;
  novemberPlanAnnex?: Maybe<StringComparisonExp>;
  novemberPlanImplementation?: Maybe<StringComparisonExp>;
  novemberPlanRemakes?: Maybe<StringComparisonExp>;
  novemberPlanTheme?: Maybe<StringComparisonExp>;
  octoberPlanAnnex?: Maybe<StringComparisonExp>;
  octoberPlanImplementation?: Maybe<StringComparisonExp>;
  octoberPlanRemakes?: Maybe<StringComparisonExp>;
  octoberPlanTheme?: Maybe<StringComparisonExp>;
  proposalTime?: Maybe<DateComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  septemberPlanAnnex?: Maybe<StringComparisonExp>;
  septemberPlanImplementation?: Maybe<StringComparisonExp>;
  septemberPlanRemakes?: Maybe<StringComparisonExp>;
  septemberPlanTheme?: Maybe<StringComparisonExp>;
  sponsor?: Maybe<StringComparisonExp>;
  theme?: Maybe<StringComparisonExp>;
  year?: Maybe<StringComparisonExp>;
};

export type PmBranchPlanInput = {
  annex?: Maybe<Scalars['String']>;
  aprilPlanAnnex?: Maybe<Scalars['String']>;
  aprilPlanImplementation?: Maybe<Scalars['String']>;
  aprilPlanRemakes?: Maybe<Scalars['String']>;
  aprilPlanTheme?: Maybe<Scalars['String']>;
  augustPlanAnnex?: Maybe<Scalars['String']>;
  augustPlanImplementation?: Maybe<Scalars['String']>;
  augustPlanRemakes?: Maybe<Scalars['String']>;
  augustPlanTheme?: Maybe<Scalars['String']>;
  decemberPlanAnnex?: Maybe<Scalars['String']>;
  decemberPlanImplementation?: Maybe<Scalars['String']>;
  decemberPlanRemakes?: Maybe<Scalars['String']>;
  decemberPlanTheme?: Maybe<Scalars['String']>;
  februaryPlanAnnex?: Maybe<Scalars['String']>;
  februaryPlanImplementation?: Maybe<Scalars['String']>;
  februaryPlanRemakes?: Maybe<Scalars['String']>;
  februaryPlanTheme?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  januaryPlanAnnex?: Maybe<Scalars['String']>;
  januaryPlanImplementation?: Maybe<Scalars['String']>;
  januaryPlanRemakes?: Maybe<Scalars['String']>;
  januaryPlanTheme?: Maybe<Scalars['String']>;
  julyPlanAnnex?: Maybe<Scalars['String']>;
  julyPlanImplementation?: Maybe<Scalars['String']>;
  julyPlanRemakes?: Maybe<Scalars['String']>;
  julyPlanTheme?: Maybe<Scalars['String']>;
  junePlanAnnex?: Maybe<Scalars['String']>;
  junePlanImplementation?: Maybe<Scalars['String']>;
  junePlanRemakes?: Maybe<Scalars['String']>;
  junePlanTheme?: Maybe<Scalars['String']>;
  marchPlanAnnex?: Maybe<Scalars['String']>;
  marchPlanImplementation?: Maybe<Scalars['String']>;
  marchPlanRemakes?: Maybe<Scalars['String']>;
  marchPlanTheme?: Maybe<Scalars['String']>;
  mayPlanAnnex?: Maybe<Scalars['String']>;
  mayPlanImplementation?: Maybe<Scalars['String']>;
  mayPlanRemakes?: Maybe<Scalars['String']>;
  mayPlanTheme?: Maybe<Scalars['String']>;
  novemberPlanAnnex?: Maybe<Scalars['String']>;
  novemberPlanImplementation?: Maybe<Scalars['String']>;
  novemberPlanRemakes?: Maybe<Scalars['String']>;
  novemberPlanTheme?: Maybe<Scalars['String']>;
  octoberPlanAnnex?: Maybe<Scalars['String']>;
  octoberPlanImplementation?: Maybe<Scalars['String']>;
  octoberPlanRemakes?: Maybe<Scalars['String']>;
  octoberPlanTheme?: Maybe<Scalars['String']>;
  proposalTime?: Maybe<Scalars['Date']>;
  remarks?: Maybe<Scalars['String']>;
  septemberPlanAnnex?: Maybe<Scalars['String']>;
  septemberPlanImplementation?: Maybe<Scalars['String']>;
  septemberPlanRemakes?: Maybe<Scalars['String']>;
  septemberPlanTheme?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type PmBranchPlanOrderBy = {
  annex?: Maybe<OrderBy>;
  aprilPlanAnnex?: Maybe<OrderBy>;
  aprilPlanImplementation?: Maybe<OrderBy>;
  aprilPlanRemakes?: Maybe<OrderBy>;
  aprilPlanTheme?: Maybe<OrderBy>;
  augustPlanAnnex?: Maybe<OrderBy>;
  augustPlanImplementation?: Maybe<OrderBy>;
  augustPlanRemakes?: Maybe<OrderBy>;
  augustPlanTheme?: Maybe<OrderBy>;
  decemberPlanAnnex?: Maybe<OrderBy>;
  decemberPlanImplementation?: Maybe<OrderBy>;
  decemberPlanRemakes?: Maybe<OrderBy>;
  decemberPlanTheme?: Maybe<OrderBy>;
  februaryPlanAnnex?: Maybe<OrderBy>;
  februaryPlanImplementation?: Maybe<OrderBy>;
  februaryPlanRemakes?: Maybe<OrderBy>;
  februaryPlanTheme?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  januaryPlanAnnex?: Maybe<OrderBy>;
  januaryPlanImplementation?: Maybe<OrderBy>;
  januaryPlanRemakes?: Maybe<OrderBy>;
  januaryPlanTheme?: Maybe<OrderBy>;
  julyPlanAnnex?: Maybe<OrderBy>;
  julyPlanImplementation?: Maybe<OrderBy>;
  julyPlanRemakes?: Maybe<OrderBy>;
  julyPlanTheme?: Maybe<OrderBy>;
  junePlanAnnex?: Maybe<OrderBy>;
  junePlanImplementation?: Maybe<OrderBy>;
  junePlanRemakes?: Maybe<OrderBy>;
  junePlanTheme?: Maybe<OrderBy>;
  marchPlanAnnex?: Maybe<OrderBy>;
  marchPlanImplementation?: Maybe<OrderBy>;
  marchPlanRemakes?: Maybe<OrderBy>;
  marchPlanTheme?: Maybe<OrderBy>;
  mayPlanAnnex?: Maybe<OrderBy>;
  mayPlanImplementation?: Maybe<OrderBy>;
  mayPlanRemakes?: Maybe<OrderBy>;
  mayPlanTheme?: Maybe<OrderBy>;
  novemberPlanAnnex?: Maybe<OrderBy>;
  novemberPlanImplementation?: Maybe<OrderBy>;
  novemberPlanRemakes?: Maybe<OrderBy>;
  novemberPlanTheme?: Maybe<OrderBy>;
  octoberPlanAnnex?: Maybe<OrderBy>;
  octoberPlanImplementation?: Maybe<OrderBy>;
  octoberPlanRemakes?: Maybe<OrderBy>;
  octoberPlanTheme?: Maybe<OrderBy>;
  proposalTime?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  septemberPlanAnnex?: Maybe<OrderBy>;
  septemberPlanImplementation?: Maybe<OrderBy>;
  septemberPlanRemakes?: Maybe<OrderBy>;
  septemberPlanTheme?: Maybe<OrderBy>;
  sponsor?: Maybe<OrderBy>;
  theme?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type PmCentralizedTrainingListBoolExp = {
  _and?: Maybe<Array<Maybe<PmCentralizedTrainingListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmCentralizedTrainingListBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  inputDate?: Maybe<DateComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  trainDate?: Maybe<DateComparisonExp>;
  trainTheme?: Maybe<StringComparisonExp>;
};

export type PmCentralizedTrainingListInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['Date']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  trainDate?: Maybe<Scalars['Date']>;
  trainTheme?: Maybe<Scalars['String']>;
};

export type PmCentralizedTrainingListOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  inputDate?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  trainDate?: Maybe<OrderBy>;
  trainTheme?: Maybe<OrderBy>;
};

export type PmDemocraticAppraisalBoolExp = {
  _and?: Maybe<Array<Maybe<PmDemocraticAppraisalBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDemocraticAppraisalBoolExp>>>;
  appraisalDate?: Maybe<DateComparisonExp>;
  appraisalGroup?: Maybe<StringComparisonExp>;
  deliberateResult?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
};

export type PmDemocraticAppraisalInput = {
  appraisalDate?: Maybe<Scalars['Date']>;
  appraisalGroup?: Maybe<Scalars['String']>;
  deliberateResult?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type PmDemocraticAppraisalOrderBy = {
  appraisalDate?: Maybe<OrderBy>;
  appraisalGroup?: Maybe<OrderBy>;
  deliberateResult?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
};

export type PmDevelopeOathOfJoiningThePartyBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopeOathOfJoiningThePartyBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopeOathOfJoiningThePartyBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  oathTime?: Maybe<DateComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
};

export type PmDevelopeOathOfJoiningThePartyInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  oathTime?: Maybe<Scalars['Date']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type PmDevelopeOathOfJoiningThePartyOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  oathTime?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
};

export type PmDevelopeStageFiveApproveBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopeStageFiveApproveBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopeStageFiveApproveBoolExp>>>;
  actualNumber?: Maybe<IntegerComparisonExp>;
  address?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  host?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  result?: Maybe<StringComparisonExp>;
  shouldAttend?: Maybe<IntegerComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmDevelopeStageFiveApproveInput = {
  actualNumber?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  shouldAttend?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type PmDevelopeStageFiveApproveOrderBy = {
  actualNumber?: Maybe<OrderBy>;
  address?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  host?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  result?: Maybe<OrderBy>;
  shouldAttend?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmDevelopeStageFiveContinuingEducationBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopeStageFiveContinuingEducationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopeStageFiveContinuingEducationBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  joinTime?: Maybe<DateComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmDevelopeStageFiveContinuingEducationInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  joinTime?: Maybe<Scalars['Date']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmDevelopeStageFiveContinuingEducationOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  joinTime?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmDevelopeStageFiveMeetingDiscussionBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopeStageFiveMeetingDiscussionBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopeStageFiveMeetingDiscussionBoolExp>>>;
  actualNumber?: Maybe<IntegerComparisonExp>;
  address?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  host?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  result?: Maybe<StringComparisonExp>;
  shouldAttend?: Maybe<IntegerComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmDevelopeStageFiveMeetingDiscussionInput = {
  actualNumber?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  shouldAttend?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type PmDevelopeStageFiveMeetingDiscussionOrderBy = {
  actualNumber?: Maybe<OrderBy>;
  address?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  host?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  result?: Maybe<OrderBy>;
  shouldAttend?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmDevelopeStageFiveTurnPositiveApplicationBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopeStageFiveTurnPositiveApplicationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopeStageFiveTurnPositiveApplicationBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  joinTime?: Maybe<DateComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
};

export type PmDevelopeStageFiveTurnPositiveApplicationInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  joinTime?: Maybe<Scalars['Date']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
};

export type PmDevelopeStageFiveTurnPositiveApplicationOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  joinTime?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
};

export type PmDevelopmentObjectReportListBoolExp = {
  _and?: Maybe<Array<Maybe<PmDevelopmentObjectReportListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmDevelopmentObjectReportListBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  stampTime?: Maybe<DateComparisonExp>;
};

export type PmDevelopmentObjectReportListInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  stampTime?: Maybe<Scalars['Date']>;
};

export type PmDevelopmentObjectReportListOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  stampTime?: Maybe<OrderBy>;
};

export type PmEntryExitApplicationInformationBoolExp = {
  _and?: Maybe<Array<Maybe<PmEntryExitApplicationInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmEntryExitApplicationInformationBoolExp>>>;
  approvalOpinion?: Maybe<StringComparisonExp>;
  approver?: Maybe<StringComparisonExp>;
  birthday?: Maybe<DateComparisonExp>;
  dateOfDeparture?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  destination?: Maybe<StringComparisonExp>;
  householdRegistration?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idCard?: Maybe<StringComparisonExp>;
  jobs?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  people?: Maybe<StringComparisonExp>;
  politicsStatus?: Maybe<StringComparisonExp>;
  returnDate?: Maybe<DateComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  time?: Maybe<DateComparisonExp>;
  totalDays?: Maybe<LongComparisonExp>;
  tripReason?: Maybe<StringComparisonExp>;
  workUnit?: Maybe<StringComparisonExp>;
};

export type PmEntryExitApplicationInformationInput = {
  approvalOpinion?: Maybe<Scalars['String']>;
  approver?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  dateOfDeparture?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  destination?: Maybe<Scalars['String']>;
  householdRegistration?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  jobs?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  people?: Maybe<Scalars['String']>;
  politicsStatus?: Maybe<Scalars['String']>;
  returnDate?: Maybe<Scalars['Date']>;
  sex?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Date']>;
  totalDays?: Maybe<Scalars['Long']>;
  tripReason?: Maybe<Scalars['String']>;
  workUnit?: Maybe<Scalars['String']>;
};

export type PmEntryExitApplicationInformationOrderBy = {
  approvalOpinion?: Maybe<OrderBy>;
  approver?: Maybe<OrderBy>;
  birthday?: Maybe<OrderBy>;
  dateOfDeparture?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  destination?: Maybe<OrderBy>;
  householdRegistration?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idCard?: Maybe<OrderBy>;
  jobs?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  people?: Maybe<OrderBy>;
  politicsStatus?: Maybe<OrderBy>;
  returnDate?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  totalDays?: Maybe<OrderBy>;
  tripReason?: Maybe<OrderBy>;
  workUnit?: Maybe<OrderBy>;
};

export type PmFileBoolExp = {
  _and?: Maybe<Array<Maybe<PmFileBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmFileBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  fileName?: Maybe<StringComparisonExp>;
  filePath?: Maybe<StringComparisonExp>;
  fileUrl?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  tableId?: Maybe<LongComparisonExp>;
};

export type PmFileInput = {
  createTime?: Maybe<Scalars['Date']>;
  fileName?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  fileUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  tableId?: Maybe<Scalars['Long']>;
};

export type PmFileOrderBy = {
  createTime?: Maybe<OrderBy>;
  fileName?: Maybe<OrderBy>;
  filePath?: Maybe<OrderBy>;
  fileUrl?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  tableId?: Maybe<OrderBy>;
};

export type PmInformationOfPartyMembersListBoolExp = {
  _and?: Maybe<Array<Maybe<PmInformationOfPartyMembersListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmInformationOfPartyMembersListBoolExp>>>;
  dateOfBirth?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  nativePlace?: Maybe<StringComparisonExp>;
  sayToTheParty?: Maybe<StringComparisonExp>;
  selfEvaluation?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  specialHobby?: Maybe<StringComparisonExp>;
  winningRecord?: Maybe<StringComparisonExp>;
};

export type PmInformationOfPartyMembersListInput = {
  dateOfBirth?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  nativePlace?: Maybe<Scalars['String']>;
  sayToTheParty?: Maybe<Scalars['String']>;
  selfEvaluation?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  specialHobby?: Maybe<Scalars['String']>;
  winningRecord?: Maybe<Scalars['String']>;
};

export type PmInformationOfPartyMembersListOrderBy = {
  dateOfBirth?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  nativePlace?: Maybe<OrderBy>;
  sayToTheParty?: Maybe<OrderBy>;
  selfEvaluation?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  specialHobby?: Maybe<OrderBy>;
  winningRecord?: Maybe<OrderBy>;
};

export type PmLearningColumnCurriculumBoolExp = {
  _and?: Maybe<Array<Maybe<PmLearningColumnCurriculumBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmLearningColumnCurriculumBoolExp>>>;
  content?: Maybe<PmLearningColumnCurriculumContentBoolExp>;
  contentAssociateMemberList?: Maybe<PmLearningColunmContentAssociateMemberBoolExp>;
  credit?: Maybe<IntegerComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  fileCover?: Maybe<PmFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  learningMethod?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  questionPaperId?: Maybe<LongComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  status?: Maybe<StringComparisonExp>;
};

export type PmLearningColumnCurriculumContentBoolExp = {
  _and?: Maybe<Array<Maybe<PmLearningColumnCurriculumContentBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmLearningColumnCurriculumContentBoolExp>>>;
  databaseId?: Maybe<LongComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  introduction?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type PmLearningColumnCurriculumContentInput = {
  databaseId?: Maybe<Scalars['Long']>;
  id?: Maybe<Scalars['Long']>;
  introduction?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PmLearningColumnCurriculumContentOrderBy = {
  databaseId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  introduction?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type PmLearningColumnCurriculumInput = {
  content?: Maybe<PmLearningColumnCurriculumContentInput>;
  contentAssociateMemberList?: Maybe<Array<Maybe<PmLearningColunmContentAssociateMemberInput>>>;
  credit?: Maybe<Scalars['Int']>;
  endTime?: Maybe<Scalars['Date']>;
  fileCover?: Maybe<PmFileInput>;
  id?: Maybe<Scalars['Long']>;
  learningMethod?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  questionPaperId?: Maybe<Scalars['Long']>;
  startTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
};

export type PmLearningColumnCurriculumOrderBy = {
  contentAssociateMemberList?: Maybe<PmLearningColunmContentAssociateMemberOrderBy>;
  credit?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  learningMethod?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  questionPaperId?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type PmLearningColumnDatabaseBoolExp = {
  _and?: Maybe<Array<Maybe<PmLearningColumnDatabaseBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmLearningColumnDatabaseBoolExp>>>;
  fileAnnex?: Maybe<PmFileBoolExp>;
  fileAnnexName?: Maybe<StringComparisonExp>;
  fileAnnexPath?: Maybe<StringComparisonExp>;
  fileImage?: Maybe<PmFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  imageAnnexName?: Maybe<StringComparisonExp>;
  imageAnnexPath?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  type?: Maybe<StringComparisonExp>;
};

export type PmLearningColumnDatabaseInput = {
  fileAnnex?: Maybe<PmFileInput>;
  fileAnnexName?: Maybe<Scalars['String']>;
  fileAnnexPath?: Maybe<Scalars['String']>;
  fileImage?: Maybe<PmFileInput>;
  id?: Maybe<Scalars['Long']>;
  imageAnnexName?: Maybe<Scalars['String']>;
  imageAnnexPath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PmLearningColumnDatabaseOrderBy = {
  fileAnnexName?: Maybe<OrderBy>;
  fileAnnexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  imageAnnexName?: Maybe<OrderBy>;
  imageAnnexPath?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
};

export type PmLearningColunmContentAssociateMemberBoolExp = {
  _and?: Maybe<Array<Maybe<PmLearningColunmContentAssociateMemberBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmLearningColunmContentAssociateMemberBoolExp>>>;
  curriculum?: Maybe<PmLearningColumnCurriculumBoolExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<LongComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
};

export type PmLearningColunmContentAssociateMemberInput = {
  curriculum?: Maybe<PmLearningColumnCurriculumInput>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Long']>;
  memberName?: Maybe<Scalars['String']>;
};

export type PmLearningColunmContentAssociateMemberOrderBy = {
  curriculum?: Maybe<PmLearningColumnCurriculumOrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
};

export type PmMeetingMinutesBoolExp = {
  _and?: Maybe<Array<Maybe<PmMeetingMinutesBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMeetingMinutesBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applyTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  partyMemberId?: Maybe<IntegerComparisonExp>;
  partyMemberName?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmMeetingMinutesInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applyTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  partyMemberId?: Maybe<Scalars['Int']>;
  partyMemberName?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmMeetingMinutesOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applyTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  partyMemberId?: Maybe<OrderBy>;
  partyMemberName?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmMemberInTrainPeopleBoolExp = {
  _and?: Maybe<Array<Maybe<PmMemberInTrainPeopleBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMemberInTrainPeopleBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  inputDate?: Maybe<DateComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  trainPeopleId?: Maybe<IntegerComparisonExp>;
  trainPeopleName?: Maybe<StringComparisonExp>;
  trainPeopleParty?: Maybe<StringComparisonExp>;
  trainPeopleTel?: Maybe<StringComparisonExp>;
};

export type PmMemberInTrainPeopleInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  inputDate?: Maybe<Scalars['Date']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  trainPeopleId?: Maybe<Scalars['Int']>;
  trainPeopleName?: Maybe<Scalars['String']>;
  trainPeopleParty?: Maybe<Scalars['String']>;
  trainPeopleTel?: Maybe<Scalars['String']>;
};

export type PmMemberInTrainPeopleOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  inputDate?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  trainPeopleId?: Maybe<OrderBy>;
  trainPeopleName?: Maybe<OrderBy>;
  trainPeopleParty?: Maybe<OrderBy>;
  trainPeopleTel?: Maybe<OrderBy>;
};

export type PmMyNoticeBoolExp = {
  _and?: Maybe<Array<Maybe<PmMyNoticeBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMyNoticeBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  issuer?: Maybe<StringComparisonExp>;
  referTime?: Maybe<DateComparisonExp>;
  time?: Maybe<DateComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmMyNoticeInput = {
  id?: Maybe<Scalars['Long']>;
  issuer?: Maybe<Scalars['String']>;
  referTime?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type PmMyNoticeOrderBy = {
  id?: Maybe<OrderBy>;
  issuer?: Maybe<OrderBy>;
  referTime?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmMyOrganizationActivityBoolExp = {
  _and?: Maybe<Array<Maybe<PmMyOrganizationActivityBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMyOrganizationActivityBoolExp>>>;
  activityName?: Maybe<StringComparisonExp>;
  activityOrganization?: Maybe<StringComparisonExp>;
  activityStatus?: Maybe<StringComparisonExp>;
  activityType?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
};

export type PmMyOrganizationActivityInput = {
  activityName?: Maybe<Scalars['String']>;
  activityOrganization?: Maybe<Scalars['String']>;
  activityStatus?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  startTime?: Maybe<Scalars['Date']>;
};

export type PmMyOrganizationActivityOrderBy = {
  activityName?: Maybe<OrderBy>;
  activityOrganization?: Maybe<OrderBy>;
  activityStatus?: Maybe<OrderBy>;
  activityType?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
};

export type PmMyProgressPartyMemberBoolExp = {
  _and?: Maybe<Array<Maybe<PmMyProgressPartyMemberBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMyProgressPartyMemberBoolExp>>>;
  applicationDate?: Maybe<DateComparisonExp>;
  currentApprovalOrganization?: Maybe<StringComparisonExp>;
  developmentSteps?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
};

export type PmMyProgressPartyMemberInput = {
  applicationDate?: Maybe<Scalars['Date']>;
  currentApprovalOrganization?: Maybe<Scalars['String']>;
  developmentSteps?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
};

export type PmMyProgressPartyMemberOrderBy = {
  applicationDate?: Maybe<OrderBy>;
  currentApprovalOrganization?: Maybe<OrderBy>;
  developmentSteps?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PmMyStudyBoolExp = {
  _and?: Maybe<Array<Maybe<PmMyStudyBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMyStudyBoolExp>>>;
  courseTitle?: Maybe<StringComparisonExp>;
  courseType?: Maybe<StringComparisonExp>;
  credit?: Maybe<LongComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  learningStyle?: Maybe<StringComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  status?: Maybe<StringComparisonExp>;
};

export type PmMyStudyInput = {
  courseTitle?: Maybe<Scalars['String']>;
  courseType?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['Long']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  learningStyle?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
};

export type PmMyStudyOrderBy = {
  courseTitle?: Maybe<OrderBy>;
  courseType?: Maybe<OrderBy>;
  credit?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  learningStyle?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type PmMyTaskBoolExp = {
  _and?: Maybe<Array<Maybe<PmMyTaskBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmMyTaskBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  issuer?: Maybe<StringComparisonExp>;
  queryStatus?: Maybe<StringComparisonExp>;
  referTime?: Maybe<DateComparisonExp>;
  time?: Maybe<DateComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmMyTaskInput = {
  id?: Maybe<Scalars['Long']>;
  issuer?: Maybe<Scalars['String']>;
  queryStatus?: Maybe<Scalars['String']>;
  referTime?: Maybe<Scalars['Date']>;
  time?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type PmMyTaskOrderBy = {
  id?: Maybe<OrderBy>;
  issuer?: Maybe<OrderBy>;
  queryStatus?: Maybe<OrderBy>;
  referTime?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmNotificationBoolExp = {
  _and?: Maybe<Array<Maybe<PmNotificationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmNotificationBoolExp>>>;
  accessory?: Maybe<PmFileBoolExp>;
  content?: Maybe<StringComparisonExp>;
  drafter?: Maybe<StringComparisonExp>;
  draftingTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmNotificationInput = {
  accessory?: Maybe<Array<Maybe<PmFileInput>>>;
  content?: Maybe<Scalars['String']>;
  drafter?: Maybe<Scalars['String']>;
  draftingTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmNotificationOrderBy = {
  content?: Maybe<OrderBy>;
  drafter?: Maybe<OrderBy>;
  draftingTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmOpinionSuggestBoolExp = {
  _and?: Maybe<Array<Maybe<PmOpinionSuggestBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmOpinionSuggestBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  ideaAnnexName?: Maybe<StringComparisonExp>;
  ideaAnnexPath?: Maybe<StringComparisonExp>;
  ideaContent?: Maybe<StringComparisonExp>;
  ideaTitle?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  replyAnnexName?: Maybe<StringComparisonExp>;
  replyAnnexPath?: Maybe<StringComparisonExp>;
  replyContent?: Maybe<StringComparisonExp>;
  replyDate?: Maybe<DateComparisonExp>;
  submitDate?: Maybe<DateComparisonExp>;
};

export type PmOpinionSuggestInput = {
  id?: Maybe<Scalars['Long']>;
  ideaAnnexName?: Maybe<Scalars['String']>;
  ideaAnnexPath?: Maybe<Scalars['String']>;
  ideaContent?: Maybe<Scalars['String']>;
  ideaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  replyAnnexName?: Maybe<Scalars['String']>;
  replyAnnexPath?: Maybe<Scalars['String']>;
  replyContent?: Maybe<Scalars['String']>;
  replyDate?: Maybe<Scalars['Date']>;
  submitDate?: Maybe<Scalars['Date']>;
};

export type PmOpinionSuggestOrderBy = {
  id?: Maybe<OrderBy>;
  ideaAnnexName?: Maybe<OrderBy>;
  ideaAnnexPath?: Maybe<OrderBy>;
  ideaContent?: Maybe<OrderBy>;
  ideaTitle?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  replyAnnexName?: Maybe<OrderBy>;
  replyAnnexPath?: Maybe<OrderBy>;
  replyContent?: Maybe<OrderBy>;
  replyDate?: Maybe<OrderBy>;
  submitDate?: Maybe<OrderBy>;
};

export type PmOrganizationActivityBoolExp = {
  _and?: Maybe<Array<Maybe<PmOrganizationActivityBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmOrganizationActivityBoolExp>>>;
  accessory?: Maybe<PmFileBoolExp>;
  activityName?: Maybe<StringComparisonExp>;
  activityOrganization?: Maybe<StringComparisonExp>;
  activityStatus?: Maybe<StringComparisonExp>;
  activityType?: Maybe<StringComparisonExp>;
  endTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
};

export type PmOrganizationActivityInput = {
  accessory?: Maybe<Array<Maybe<PmFileInput>>>;
  activityName?: Maybe<Scalars['String']>;
  activityOrganization?: Maybe<Scalars['String']>;
  activityStatus?: Maybe<Scalars['String']>;
  activityType?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  startTime?: Maybe<Scalars['Date']>;
};

export type PmOrganizationActivityOrderBy = {
  activityName?: Maybe<OrderBy>;
  activityOrganization?: Maybe<OrderBy>;
  activityStatus?: Maybe<OrderBy>;
  activityType?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
};

export type PmPartyDuesInfoBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyDuesInfoBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyDuesInfoBoolExp>>>;
  balance?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
};

export type PmPartyDuesInfoInput = {
  balance?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
};

export type PmPartyDuesInfoOrderBy = {
  balance?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
};

export type PmPartyFeeRatioSettingBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyFeeRatioSettingBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyFeeRatioSettingBoolExp>>>;
  end?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  proportion?: Maybe<BigDecimalComparisonExp>;
  start?: Maybe<IntegerComparisonExp>;
};

export type PmPartyFeeRatioSettingInput = {
  end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  proportion?: Maybe<Scalars['BigDecimal']>;
  start?: Maybe<Scalars['Int']>;
};

export type PmPartyFeeRatioSettingOrderBy = {
  end?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  proportion?: Maybe<OrderBy>;
  start?: Maybe<OrderBy>;
};

export type PmPartyInAndOutBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyInAndOutBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyInAndOutBoolExp>>>;
  actionType?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idCard?: Maybe<StringComparisonExp>;
  letterOfIntroductionNumber?: Maybe<StringComparisonExp>;
  manager?: Maybe<StringComparisonExp>;
  managerId?: Maybe<IntegerComparisonExp>;
  memberType?: Maybe<StringComparisonExp>;
  newOrganization?: Maybe<StringComparisonExp>;
  oldOrganization?: Maybe<StringComparisonExp>;
  pay?: Maybe<StringComparisonExp>;
  phone?: Maybe<StringComparisonExp>;
  processingDate?: Maybe<DateComparisonExp>;
  userId?: Maybe<IntegerComparisonExp>;
  userName?: Maybe<StringComparisonExp>;
};

export type PmPartyInAndOutInput = {
  actionType?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  letterOfIntroductionNumber?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  managerId?: Maybe<Scalars['Int']>;
  memberType?: Maybe<Scalars['String']>;
  newOrganization?: Maybe<Scalars['String']>;
  oldOrganization?: Maybe<Scalars['String']>;
  pay?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  processingDate?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['Int']>;
  userName?: Maybe<Scalars['String']>;
};

export type PmPartyInAndOutOrderBy = {
  actionType?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idCard?: Maybe<OrderBy>;
  letterOfIntroductionNumber?: Maybe<OrderBy>;
  manager?: Maybe<OrderBy>;
  managerId?: Maybe<OrderBy>;
  memberType?: Maybe<OrderBy>;
  newOrganization?: Maybe<OrderBy>;
  oldOrganization?: Maybe<OrderBy>;
  pay?: Maybe<OrderBy>;
  phone?: Maybe<OrderBy>;
  processingDate?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
};

export type PmPartyJobTitleBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyJobTitleBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyJobTitleBoolExp>>>;
  desc?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
};

export type PmPartyJobTitleInput = {
  desc?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
};

export type PmPartyJobTitleOrderBy = {
  desc?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PmPartyMemberCategoryBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberCategoryBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberCategoryBoolExp>>>;
  desc?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
};

export type PmPartyMemberCategoryInput = {
  desc?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
};

export type PmPartyMemberCategoryOrderBy = {
  desc?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type PmPartyMemberDuesFinancingBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberDuesFinancingBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberDuesFinancingBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  duesBalance?: Maybe<BigDecimalComparisonExp>;
  duesFinancing?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  reportTime?: Maybe<DateComparisonExp>;
};

export type PmPartyMemberDuesFinancingInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  duesBalance?: Maybe<Scalars['BigDecimal']>;
  duesFinancing?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
  reportTime?: Maybe<Scalars['Date']>;
};

export type PmPartyMemberDuesFinancingOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  duesBalance?: Maybe<OrderBy>;
  duesFinancing?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  reportTime?: Maybe<OrderBy>;
};

export type PmPartyMemberDuesMaintainBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberDuesMaintainBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberDuesMaintainBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  paymentMethod?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  sum?: Maybe<BigDecimalComparisonExp>;
  year?: Maybe<StringComparisonExp>;
};

export type PmPartyMemberDuesMaintainInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  sum?: Maybe<Scalars['BigDecimal']>;
  year?: Maybe<Scalars['String']>;
};

export type PmPartyMemberDuesMaintainOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  paymentMethod?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  sum?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type PmPartyMemberDuesRemindBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberDuesRemindBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberDuesRemindBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  month?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  paymentMethod?: Maybe<StringComparisonExp>;
  remindContent?: Maybe<StringComparisonExp>;
  remindTime?: Maybe<DateComparisonExp>;
  taxPayableDues?: Maybe<BigDecimalComparisonExp>;
  year?: Maybe<StringComparisonExp>;
};

export type PmPartyMemberDuesRemindInput = {
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  remindContent?: Maybe<Scalars['String']>;
  remindTime?: Maybe<Scalars['Date']>;
  taxPayableDues?: Maybe<Scalars['BigDecimal']>;
  year?: Maybe<Scalars['String']>;
};

export type PmPartyMemberDuesRemindOrderBy = {
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  month?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  paymentMethod?: Maybe<OrderBy>;
  remindContent?: Maybe<OrderBy>;
  remindTime?: Maybe<OrderBy>;
  taxPayableDues?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type PmPartyMemberExpenditureMaintainBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberExpenditureMaintainBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberExpenditureMaintainBoolExp>>>;
  amountOfPayout?: Maybe<BigDecimalComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  expenditureTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmPartyMemberExpenditureMaintainInput = {
  amountOfPayout?: Maybe<Scalars['BigDecimal']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  expenditureTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remarks?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmPartyMemberExpenditureMaintainOrderBy = {
  amountOfPayout?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  expenditureTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmPartyMemberManagementBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberManagementBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberManagementBoolExp>>>;
  activistsDate?: Maybe<DateComparisonExp>;
  applyDate?: Maybe<DateComparisonExp>;
  arrangeDate?: Maybe<DateComparisonExp>;
  categoryDesc?: Maybe<StringComparisonExp>;
  categoryId?: Maybe<IntegerComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  departmentName?: Maybe<StringComparisonExp>;
  developmentDate?: Maybe<DateComparisonExp>;
  genderKey?: Maybe<IntegerComparisonExp>;
  genderValue?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  image?: Maybe<StringComparisonExp>;
  isCandidate?: Maybe<IntegerComparisonExp>;
  isDelete?: Maybe<IntegerComparisonExp>;
  isLeague?: Maybe<IntegerComparisonExp>;
  joinPartDate?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  organizationId?: Maybe<IntegerComparisonExp>;
  organizationName?: Maybe<StringComparisonExp>;
  partyPositionDesc?: Maybe<StringComparisonExp>;
  partyPositionId?: Maybe<IntegerComparisonExp>;
  partyStanding?: Maybe<StringComparisonExp>;
  payMonthlyDues?: Maybe<BigDecimalComparisonExp>;
  phone?: Maybe<StringComparisonExp>;
  politicalStatusKey?: Maybe<StringComparisonExp>;
  politicalStatusValue?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  userId?: Maybe<IntegerComparisonExp>;
};

export type PmPartyMemberManagementInput = {
  activistsDate?: Maybe<Scalars['Date']>;
  applyDate?: Maybe<Scalars['Date']>;
  arrangeDate?: Maybe<Scalars['Date']>;
  categoryDesc?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  departmentId?: Maybe<Scalars['Int']>;
  departmentName?: Maybe<Scalars['String']>;
  developmentDate?: Maybe<Scalars['Date']>;
  genderKey?: Maybe<Scalars['Int']>;
  genderValue?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  image?: Maybe<Scalars['String']>;
  isCandidate?: Maybe<Scalars['Int']>;
  isDelete?: Maybe<Scalars['Int']>;
  isLeague?: Maybe<Scalars['Int']>;
  joinPartDate?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
  partyPositionDesc?: Maybe<Scalars['String']>;
  partyPositionId?: Maybe<Scalars['Int']>;
  partyStanding?: Maybe<Scalars['String']>;
  payMonthlyDues?: Maybe<Scalars['BigDecimal']>;
  phone?: Maybe<Scalars['String']>;
  politicalStatusKey?: Maybe<Scalars['String']>;
  politicalStatusValue?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type PmPartyMemberManagementOrderBy = {
  activistsDate?: Maybe<OrderBy>;
  applyDate?: Maybe<OrderBy>;
  arrangeDate?: Maybe<OrderBy>;
  categoryDesc?: Maybe<OrderBy>;
  categoryId?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  departmentName?: Maybe<OrderBy>;
  developmentDate?: Maybe<OrderBy>;
  genderKey?: Maybe<OrderBy>;
  genderValue?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  image?: Maybe<OrderBy>;
  isCandidate?: Maybe<OrderBy>;
  isDelete?: Maybe<OrderBy>;
  isLeague?: Maybe<OrderBy>;
  joinPartDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationName?: Maybe<OrderBy>;
  partyPositionDesc?: Maybe<OrderBy>;
  partyPositionId?: Maybe<OrderBy>;
  partyStanding?: Maybe<OrderBy>;
  payMonthlyDues?: Maybe<OrderBy>;
  phone?: Maybe<OrderBy>;
  politicalStatusKey?: Maybe<OrderBy>;
  politicalStatusValue?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

export type PmPartyMemberPayDuesMaintainBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberPayDuesMaintainBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberPayDuesMaintainBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  month?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  paidInDues?: Maybe<BigDecimalComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  paymentMethod?: Maybe<StringComparisonExp>;
  paymentTime?: Maybe<DateComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  taxPayableDues?: Maybe<BigDecimalComparisonExp>;
  year?: Maybe<StringComparisonExp>;
};

export type PmPartyMemberPayDuesMaintainInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  paidInDues?: Maybe<Scalars['BigDecimal']>;
  partyOrganization?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentTime?: Maybe<Scalars['Date']>;
  remarks?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  taxPayableDues?: Maybe<Scalars['BigDecimal']>;
  year?: Maybe<Scalars['String']>;
};

export type PmPartyMemberPayDuesMaintainOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  month?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  paidInDues?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  paymentMethod?: Maybe<OrderBy>;
  paymentTime?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  taxPayableDues?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type PmPartyMemberStyleBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMemberStyleBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMemberStyleBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  isShow?: Maybe<IntegerComparisonExp>;
  memberDesc?: Maybe<StringComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberImage?: Maybe<StringComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  releaseDate?: Maybe<StringComparisonExp>;
  theme?: Maybe<StringComparisonExp>;
};

export type PmPartyMemberStyleInput = {
  id?: Maybe<Scalars['Long']>;
  isShow?: Maybe<Scalars['Int']>;
  memberDesc?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['Int']>;
  memberImage?: Maybe<Scalars['String']>;
  memberName?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

export type PmPartyMemberStyleOrderBy = {
  id?: Maybe<OrderBy>;
  isShow?: Maybe<OrderBy>;
  memberDesc?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberImage?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  releaseDate?: Maybe<OrderBy>;
  theme?: Maybe<OrderBy>;
};

export type PmPartyMembersRewardPunishmentBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMembersRewardPunishmentBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMembersRewardPunishmentBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  approvedDate?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  memberName?: Maybe<StringComparisonExp>;
  nameOfRewardsPunishments?: Maybe<StringComparisonExp>;
  organization?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  typesOfRewardsPunishments?: Maybe<StringComparisonExp>;
};

export type PmPartyMembersRewardPunishmentInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  approvedDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  memberName?: Maybe<Scalars['String']>;
  nameOfRewardsPunishments?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  typesOfRewardsPunishments?: Maybe<Scalars['String']>;
};

export type PmPartyMembersRewardPunishmentOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  approvedDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  memberName?: Maybe<OrderBy>;
  nameOfRewardsPunishments?: Maybe<OrderBy>;
  organization?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  typesOfRewardsPunishments?: Maybe<OrderBy>;
};

export type PmPartyMembershipIntroducerBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyMembershipIntroducerBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyMembershipIntroducerBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  identityCard?: Maybe<StringComparisonExp>;
  inputDate?: Maybe<DateComparisonExp>;
  objectName?: Maybe<StringComparisonExp>;
  referenceName?: Maybe<StringComparisonExp>;
  referenceNumber?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  trainPeopleParty?: Maybe<StringComparisonExp>;
};

export type PmPartyMembershipIntroducerInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  identityCard?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['Date']>;
  objectName?: Maybe<Scalars['String']>;
  referenceName?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  trainPeopleParty?: Maybe<Scalars['String']>;
};

export type PmPartyMembershipIntroducerOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  identityCard?: Maybe<OrderBy>;
  inputDate?: Maybe<OrderBy>;
  objectName?: Maybe<OrderBy>;
  referenceName?: Maybe<OrderBy>;
  referenceNumber?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  trainPeopleParty?: Maybe<OrderBy>;
};

export type PmPartyOrganizationJobTitleBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyOrganizationJobTitleBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyOrganizationJobTitleBoolExp>>>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobDesc?: Maybe<StringComparisonExp>;
  jobId?: Maybe<IntegerComparisonExp>;
  jobPerson?: Maybe<StringComparisonExp>;
  jobPersonId?: Maybe<IntegerComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remakes?: Maybe<StringComparisonExp>;
  structure?: Maybe<PmPartyStructureBoolExp>;
};

export type PmPartyOrganizationJobTitleInput = {
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  jobDesc?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['Int']>;
  jobPerson?: Maybe<Scalars['String']>;
  jobPersonId?: Maybe<Scalars['Int']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remakes?: Maybe<Scalars['String']>;
  structure?: Maybe<PmPartyStructureInput>;
};

export type PmPartyOrganizationJobTitleOrderBy = {
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobDesc?: Maybe<OrderBy>;
  jobId?: Maybe<OrderBy>;
  jobPerson?: Maybe<OrderBy>;
  jobPersonId?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remakes?: Maybe<OrderBy>;
  structure?: Maybe<PmPartyStructureOrderBy>;
};

export type PmPartyOrganizationPlanBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyOrganizationPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyOrganizationPlanBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  aprilPlanAnnex?: Maybe<StringComparisonExp>;
  aprilPlanImplementation?: Maybe<StringComparisonExp>;
  aprilPlanRemakes?: Maybe<StringComparisonExp>;
  aprilPlanTheme?: Maybe<StringComparisonExp>;
  augustPlanAnnex?: Maybe<StringComparisonExp>;
  augustPlanImplementation?: Maybe<StringComparisonExp>;
  augustPlanRemakes?: Maybe<StringComparisonExp>;
  augustPlanTheme?: Maybe<StringComparisonExp>;
  decemberPlanAnnex?: Maybe<StringComparisonExp>;
  decemberPlanImplementation?: Maybe<StringComparisonExp>;
  decemberPlanRemakes?: Maybe<StringComparisonExp>;
  decemberPlanTheme?: Maybe<StringComparisonExp>;
  februaryPlanAnnex?: Maybe<StringComparisonExp>;
  februaryPlanImplementation?: Maybe<StringComparisonExp>;
  februaryPlanRemakes?: Maybe<StringComparisonExp>;
  februaryPlanTheme?: Maybe<StringComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  januaryPlanAnnex?: Maybe<StringComparisonExp>;
  januaryPlanImplementation?: Maybe<StringComparisonExp>;
  januaryPlanRemakes?: Maybe<StringComparisonExp>;
  januaryPlanTheme?: Maybe<StringComparisonExp>;
  julyPlanAnnex?: Maybe<StringComparisonExp>;
  julyPlanImplementation?: Maybe<StringComparisonExp>;
  julyPlanRemakes?: Maybe<StringComparisonExp>;
  julyPlanTheme?: Maybe<StringComparisonExp>;
  junePlanAnnex?: Maybe<StringComparisonExp>;
  junePlanImplementation?: Maybe<StringComparisonExp>;
  junePlanRemakes?: Maybe<StringComparisonExp>;
  junePlanTheme?: Maybe<StringComparisonExp>;
  marchPlanAnnex?: Maybe<StringComparisonExp>;
  marchPlanImplementation?: Maybe<StringComparisonExp>;
  marchPlanRemakes?: Maybe<StringComparisonExp>;
  marchPlanTheme?: Maybe<StringComparisonExp>;
  mayPlanAnnex?: Maybe<StringComparisonExp>;
  mayPlanImplementation?: Maybe<StringComparisonExp>;
  mayPlanRemakes?: Maybe<StringComparisonExp>;
  mayPlanTheme?: Maybe<StringComparisonExp>;
  novemberPlanAnnex?: Maybe<StringComparisonExp>;
  novemberPlanImplementation?: Maybe<StringComparisonExp>;
  novemberPlanRemakes?: Maybe<StringComparisonExp>;
  novemberPlanTheme?: Maybe<StringComparisonExp>;
  octoberPlanAnnex?: Maybe<StringComparisonExp>;
  octoberPlanImplementation?: Maybe<StringComparisonExp>;
  octoberPlanRemakes?: Maybe<StringComparisonExp>;
  octoberPlanTheme?: Maybe<StringComparisonExp>;
  proposalTime?: Maybe<DateComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  septemberPlanAnnex?: Maybe<StringComparisonExp>;
  septemberPlanImplementation?: Maybe<StringComparisonExp>;
  septemberPlanRemakes?: Maybe<StringComparisonExp>;
  septemberPlanTheme?: Maybe<StringComparisonExp>;
  sponsor?: Maybe<StringComparisonExp>;
  theme?: Maybe<StringComparisonExp>;
  year?: Maybe<StringComparisonExp>;
};

export type PmPartyOrganizationPlanInput = {
  annex?: Maybe<Scalars['String']>;
  aprilPlanAnnex?: Maybe<Scalars['String']>;
  aprilPlanImplementation?: Maybe<Scalars['String']>;
  aprilPlanRemakes?: Maybe<Scalars['String']>;
  aprilPlanTheme?: Maybe<Scalars['String']>;
  augustPlanAnnex?: Maybe<Scalars['String']>;
  augustPlanImplementation?: Maybe<Scalars['String']>;
  augustPlanRemakes?: Maybe<Scalars['String']>;
  augustPlanTheme?: Maybe<Scalars['String']>;
  decemberPlanAnnex?: Maybe<Scalars['String']>;
  decemberPlanImplementation?: Maybe<Scalars['String']>;
  decemberPlanRemakes?: Maybe<Scalars['String']>;
  decemberPlanTheme?: Maybe<Scalars['String']>;
  februaryPlanAnnex?: Maybe<Scalars['String']>;
  februaryPlanImplementation?: Maybe<Scalars['String']>;
  februaryPlanRemakes?: Maybe<Scalars['String']>;
  februaryPlanTheme?: Maybe<Scalars['String']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  januaryPlanAnnex?: Maybe<Scalars['String']>;
  januaryPlanImplementation?: Maybe<Scalars['String']>;
  januaryPlanRemakes?: Maybe<Scalars['String']>;
  januaryPlanTheme?: Maybe<Scalars['String']>;
  julyPlanAnnex?: Maybe<Scalars['String']>;
  julyPlanImplementation?: Maybe<Scalars['String']>;
  julyPlanRemakes?: Maybe<Scalars['String']>;
  julyPlanTheme?: Maybe<Scalars['String']>;
  junePlanAnnex?: Maybe<Scalars['String']>;
  junePlanImplementation?: Maybe<Scalars['String']>;
  junePlanRemakes?: Maybe<Scalars['String']>;
  junePlanTheme?: Maybe<Scalars['String']>;
  marchPlanAnnex?: Maybe<Scalars['String']>;
  marchPlanImplementation?: Maybe<Scalars['String']>;
  marchPlanRemakes?: Maybe<Scalars['String']>;
  marchPlanTheme?: Maybe<Scalars['String']>;
  mayPlanAnnex?: Maybe<Scalars['String']>;
  mayPlanImplementation?: Maybe<Scalars['String']>;
  mayPlanRemakes?: Maybe<Scalars['String']>;
  mayPlanTheme?: Maybe<Scalars['String']>;
  novemberPlanAnnex?: Maybe<Scalars['String']>;
  novemberPlanImplementation?: Maybe<Scalars['String']>;
  novemberPlanRemakes?: Maybe<Scalars['String']>;
  novemberPlanTheme?: Maybe<Scalars['String']>;
  octoberPlanAnnex?: Maybe<Scalars['String']>;
  octoberPlanImplementation?: Maybe<Scalars['String']>;
  octoberPlanRemakes?: Maybe<Scalars['String']>;
  octoberPlanTheme?: Maybe<Scalars['String']>;
  proposalTime?: Maybe<Scalars['Date']>;
  remarks?: Maybe<Scalars['String']>;
  septemberPlanAnnex?: Maybe<Scalars['String']>;
  septemberPlanImplementation?: Maybe<Scalars['String']>;
  septemberPlanRemakes?: Maybe<Scalars['String']>;
  septemberPlanTheme?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type PmPartyOrganizationPlanOrderBy = {
  annex?: Maybe<OrderBy>;
  aprilPlanAnnex?: Maybe<OrderBy>;
  aprilPlanImplementation?: Maybe<OrderBy>;
  aprilPlanRemakes?: Maybe<OrderBy>;
  aprilPlanTheme?: Maybe<OrderBy>;
  augustPlanAnnex?: Maybe<OrderBy>;
  augustPlanImplementation?: Maybe<OrderBy>;
  augustPlanRemakes?: Maybe<OrderBy>;
  augustPlanTheme?: Maybe<OrderBy>;
  decemberPlanAnnex?: Maybe<OrderBy>;
  decemberPlanImplementation?: Maybe<OrderBy>;
  decemberPlanRemakes?: Maybe<OrderBy>;
  decemberPlanTheme?: Maybe<OrderBy>;
  februaryPlanAnnex?: Maybe<OrderBy>;
  februaryPlanImplementation?: Maybe<OrderBy>;
  februaryPlanRemakes?: Maybe<OrderBy>;
  februaryPlanTheme?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  januaryPlanAnnex?: Maybe<OrderBy>;
  januaryPlanImplementation?: Maybe<OrderBy>;
  januaryPlanRemakes?: Maybe<OrderBy>;
  januaryPlanTheme?: Maybe<OrderBy>;
  julyPlanAnnex?: Maybe<OrderBy>;
  julyPlanImplementation?: Maybe<OrderBy>;
  julyPlanRemakes?: Maybe<OrderBy>;
  julyPlanTheme?: Maybe<OrderBy>;
  junePlanAnnex?: Maybe<OrderBy>;
  junePlanImplementation?: Maybe<OrderBy>;
  junePlanRemakes?: Maybe<OrderBy>;
  junePlanTheme?: Maybe<OrderBy>;
  marchPlanAnnex?: Maybe<OrderBy>;
  marchPlanImplementation?: Maybe<OrderBy>;
  marchPlanRemakes?: Maybe<OrderBy>;
  marchPlanTheme?: Maybe<OrderBy>;
  mayPlanAnnex?: Maybe<OrderBy>;
  mayPlanImplementation?: Maybe<OrderBy>;
  mayPlanRemakes?: Maybe<OrderBy>;
  mayPlanTheme?: Maybe<OrderBy>;
  novemberPlanAnnex?: Maybe<OrderBy>;
  novemberPlanImplementation?: Maybe<OrderBy>;
  novemberPlanRemakes?: Maybe<OrderBy>;
  novemberPlanTheme?: Maybe<OrderBy>;
  octoberPlanAnnex?: Maybe<OrderBy>;
  octoberPlanImplementation?: Maybe<OrderBy>;
  octoberPlanRemakes?: Maybe<OrderBy>;
  octoberPlanTheme?: Maybe<OrderBy>;
  proposalTime?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  septemberPlanAnnex?: Maybe<OrderBy>;
  septemberPlanImplementation?: Maybe<OrderBy>;
  septemberPlanRemakes?: Maybe<OrderBy>;
  septemberPlanTheme?: Maybe<OrderBy>;
  sponsor?: Maybe<OrderBy>;
  theme?: Maybe<OrderBy>;
  year?: Maybe<OrderBy>;
};

export type PmPartyOrganiztionChangeOfTermInfoBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyOrganiztionChangeOfTermInfoBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyOrganiztionChangeOfTermInfoBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  changeTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  jobDwfsjPersion?: Maybe<StringComparisonExp>;
  jobDwsjPersion?: Maybe<StringComparisonExp>;
  jobDwwyPersion?: Maybe<StringComparisonExp>;
  jobJjwyPersion?: Maybe<StringComparisonExp>;
  jobXcwyPersion?: Maybe<StringComparisonExp>;
  jobZbsjPersion?: Maybe<StringComparisonExp>;
  jobZwwyPersion?: Maybe<StringComparisonExp>;
  jobZzwyPersion?: Maybe<StringComparisonExp>;
  organizationId?: Maybe<IntegerComparisonExp>;
  organizationName?: Maybe<StringComparisonExp>;
};

export type PmPartyOrganiztionChangeOfTermInfoInput = {
  annex?: Maybe<Scalars['String']>;
  changeTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  jobDwfsjPersion?: Maybe<Scalars['String']>;
  jobDwsjPersion?: Maybe<Scalars['String']>;
  jobDwwyPersion?: Maybe<Scalars['String']>;
  jobJjwyPersion?: Maybe<Scalars['String']>;
  jobXcwyPersion?: Maybe<Scalars['String']>;
  jobZbsjPersion?: Maybe<Scalars['String']>;
  jobZwwyPersion?: Maybe<Scalars['String']>;
  jobZzwyPersion?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
};

export type PmPartyOrganiztionChangeOfTermInfoOrderBy = {
  annex?: Maybe<OrderBy>;
  changeTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobDwfsjPersion?: Maybe<OrderBy>;
  jobDwsjPersion?: Maybe<OrderBy>;
  jobDwwyPersion?: Maybe<OrderBy>;
  jobJjwyPersion?: Maybe<OrderBy>;
  jobXcwyPersion?: Maybe<OrderBy>;
  jobZbsjPersion?: Maybe<OrderBy>;
  jobZwwyPersion?: Maybe<OrderBy>;
  jobZzwyPersion?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationName?: Maybe<OrderBy>;
};

export type PmPartyOrganiztionRemindBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyOrganiztionRemindBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyOrganiztionRemindBoolExp>>>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isRevoke?: Maybe<IntegerComparisonExp>;
  lastChangeTime?: Maybe<DateComparisonExp>;
  organizationId?: Maybe<IntegerComparisonExp>;
  organizationName?: Maybe<StringComparisonExp>;
  remindTime?: Maybe<DateComparisonExp>;
  termOfOffice?: Maybe<StringComparisonExp>;
  termOfOfficeExpiresTime?: Maybe<DateComparisonExp>;
};

export type PmPartyOrganiztionRemindInput = {
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  isRevoke?: Maybe<Scalars['Int']>;
  lastChangeTime?: Maybe<Scalars['Date']>;
  organizationId?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
  remindTime?: Maybe<Scalars['Date']>;
  termOfOffice?: Maybe<Scalars['String']>;
  termOfOfficeExpiresTime?: Maybe<Scalars['Date']>;
};

export type PmPartyOrganiztionRemindOrderBy = {
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isRevoke?: Maybe<OrderBy>;
  lastChangeTime?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationName?: Maybe<OrderBy>;
  remindTime?: Maybe<OrderBy>;
  termOfOffice?: Maybe<OrderBy>;
  termOfOfficeExpiresTime?: Maybe<OrderBy>;
};

export type PmPartyStructureBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyStructureBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyStructureBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  contactPerson?: Maybe<StringComparisonExp>;
  contactPersonId?: Maybe<IntegerComparisonExp>;
  dateOfEstablishment?: Maybe<DateComparisonExp>;
  gmtCreate?: Maybe<DateComparisonExp>;
  gmtModified?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  introduction?: Maybe<StringComparisonExp>;
  isRevoke?: Maybe<IntegerComparisonExp>;
  jobTitleList?: Maybe<PmPartyOrganizationJobTitleBoolExp>;
  name?: Maybe<StringComparisonExp>;
  pid?: Maybe<IntegerComparisonExp>;
  tel?: Maybe<StringComparisonExp>;
};

export type PmPartyStructureInput = {
  annex?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  contactPersonId?: Maybe<Scalars['Int']>;
  dateOfEstablishment?: Maybe<Scalars['Date']>;
  gmtCreate?: Maybe<Scalars['Date']>;
  gmtModified?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  introduction?: Maybe<Scalars['String']>;
  isRevoke?: Maybe<Scalars['Int']>;
  jobTitleList?: Maybe<Array<Maybe<PmPartyOrganizationJobTitleInput>>>;
  name?: Maybe<Scalars['String']>;
  pid?: Maybe<Scalars['Int']>;
  tel?: Maybe<Scalars['String']>;
};

export type PmPartyStructureOrderBy = {
  annex?: Maybe<OrderBy>;
  contactPerson?: Maybe<OrderBy>;
  contactPersonId?: Maybe<OrderBy>;
  dateOfEstablishment?: Maybe<OrderBy>;
  gmtCreate?: Maybe<OrderBy>;
  gmtModified?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  introduction?: Maybe<OrderBy>;
  isRevoke?: Maybe<OrderBy>;
  jobTitleList?: Maybe<PmPartyOrganizationJobTitleOrderBy>;
  name?: Maybe<OrderBy>;
  pid?: Maybe<OrderBy>;
  tel?: Maybe<OrderBy>;
};

export type PmPartyWorkOpenBoolExp = {
  _and?: Maybe<Array<Maybe<PmPartyWorkOpenBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPartyWorkOpenBoolExp>>>;
  accessory?: Maybe<PmFileBoolExp>;
  content?: Maybe<StringComparisonExp>;
  drafter?: Maybe<StringComparisonExp>;
  draftingTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  staffId?: Maybe<LongComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmPartyWorkOpenInput = {
  accessory?: Maybe<Array<Maybe<PmFileInput>>>;
  content?: Maybe<Scalars['String']>;
  drafter?: Maybe<Scalars['String']>;
  draftingTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmPartyWorkOpenOrderBy = {
  content?: Maybe<OrderBy>;
  drafter?: Maybe<OrderBy>;
  draftingTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  staffId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmPassportInformationListBoolExp = {
  _and?: Maybe<Array<Maybe<PmPassportInformationListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPassportInformationListBoolExp>>>;
  actualReturnTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idCard?: Maybe<StringComparisonExp>;
  jobs?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  outTime?: Maybe<DateComparisonExp>;
  predictReturnTime?: Maybe<DateComparisonExp>;
  preserver?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  savePlace?: Maybe<StringComparisonExp>;
  status?: Maybe<StringComparisonExp>;
};

export type PmPassportInformationListInput = {
  actualReturnTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  idCard?: Maybe<Scalars['String']>;
  jobs?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  outTime?: Maybe<Scalars['Date']>;
  predictReturnTime?: Maybe<Scalars['Date']>;
  preserver?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  savePlace?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type PmPassportInformationListOrderBy = {
  actualReturnTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idCard?: Maybe<OrderBy>;
  jobs?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  outTime?: Maybe<OrderBy>;
  predictReturnTime?: Maybe<OrderBy>;
  preserver?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  savePlace?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type PmPersonalDuesInformationBoolExp = {
  _and?: Maybe<Array<Maybe<PmPersonalDuesInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPersonalDuesInformationBoolExp>>>;
  actualCosts?: Maybe<BigDecimalComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  payableDues?: Maybe<BigDecimalComparisonExp>;
  paymentMethod?: Maybe<StringComparisonExp>;
  paymentStatus?: Maybe<StringComparisonExp>;
  responsiblePerson?: Maybe<StringComparisonExp>;
  time?: Maybe<DateComparisonExp>;
};

export type PmPersonalDuesInformationInput = {
  actualCosts?: Maybe<Scalars['BigDecimal']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  payableDues?: Maybe<Scalars['BigDecimal']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  responsiblePerson?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Date']>;
};

export type PmPersonalDuesInformationOrderBy = {
  actualCosts?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  payableDues?: Maybe<OrderBy>;
  paymentMethod?: Maybe<OrderBy>;
  paymentStatus?: Maybe<OrderBy>;
  responsiblePerson?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
};

export type PmPoliticalBirthdayMaintenanceBoolExp = {
  _and?: Maybe<Array<Maybe<PmPoliticalBirthdayMaintenanceBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPoliticalBirthdayMaintenanceBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyStanding?: Maybe<LongComparisonExp>;
  politicalBirthday?: Maybe<DateComparisonExp>;
  subject?: Maybe<StringComparisonExp>;
};

export type PmPoliticalBirthdayMaintenanceInput = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyStanding?: Maybe<Scalars['Long']>;
  politicalBirthday?: Maybe<Scalars['Date']>;
  subject?: Maybe<Scalars['String']>;
};

export type PmPoliticalBirthdayMaintenanceOrderBy = {
  content?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyStanding?: Maybe<OrderBy>;
  politicalBirthday?: Maybe<OrderBy>;
  subject?: Maybe<OrderBy>;
};

export type PmPoliticalBirthdayTemplateBoolExp = {
  _and?: Maybe<Array<Maybe<PmPoliticalBirthdayTemplateBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPoliticalBirthdayTemplateBoolExp>>>;
  accessory?: Maybe<PmFileBoolExp>;
  birthdayBlessingContent?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  politicalBirthday?: Maybe<DateComparisonExp>;
  titles?: Maybe<StringComparisonExp>;
};

export type PmPoliticalBirthdayTemplateInput = {
  accessory?: Maybe<Array<Maybe<PmFileInput>>>;
  birthdayBlessingContent?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  politicalBirthday?: Maybe<Scalars['Date']>;
  titles?: Maybe<Scalars['String']>;
};

export type PmPoliticalBirthdayTemplateOrderBy = {
  birthdayBlessingContent?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  politicalBirthday?: Maybe<OrderBy>;
  titles?: Maybe<OrderBy>;
};

export type PmPrepareAbsorbInstructionsBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareAbsorbInstructionsBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareAbsorbInstructionsBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applyDate?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmPrepareAbsorbInstructionsInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applyDate?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmPrepareAbsorbInstructionsOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applyDate?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmPrepareApplicationsAreAcceptedBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareApplicationsAreAcceptedBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareApplicationsAreAcceptedBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  organization?: Maybe<StringComparisonExp>;
  organizationId?: Maybe<IntegerComparisonExp>;
  phoneNumber?: Maybe<StringComparisonExp>;
  receiptTime?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
};

export type PmPrepareApplicationsAreAcceptedInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  receiptTime?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type PmPrepareApplicationsAreAcceptedOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organization?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  phoneNumber?: Maybe<OrderBy>;
  receiptTime?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
};

export type PmPrepareAssimilateRecordBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareAssimilateRecordBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareAssimilateRecordBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  soakDate?: Maybe<DateComparisonExp>;
};

export type PmPrepareAssimilateRecordInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  soakDate?: Maybe<Scalars['Date']>;
};

export type PmPrepareAssimilateRecordOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  soakDate?: Maybe<OrderBy>;
};

export type PmPrepareInquiryInstructionsBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareInquiryInstructionsBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareInquiryInstructionsBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applyDate?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmPrepareInquiryInstructionsInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applyDate?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PmPrepareInquiryInstructionsOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applyDate?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmPrepareMeetingMinutesBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareMeetingMinutesBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareMeetingMinutesBoolExp>>>;
  abstrac?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  conferenceTitle?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  meetingPlace?: Maybe<StringComparisonExp>;
  meetingTime?: Maybe<DateComparisonExp>;
  presente?: Maybe<StringComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
};

export type PmPrepareMeetingMinutesInput = {
  abstrac?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  conferenceTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  meetingPlace?: Maybe<Scalars['String']>;
  meetingTime?: Maybe<Scalars['Date']>;
  presente?: Maybe<Scalars['String']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
};

export type PmPrepareMeetingMinutesOrderBy = {
  abstrac?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  conferenceTitle?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meetingPlace?: Maybe<OrderBy>;
  meetingTime?: Maybe<OrderBy>;
  presente?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
};

export type PmPreparePartySpeakBoolExp = {
  _and?: Maybe<Array<Maybe<PmPreparePartySpeakBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPreparePartySpeakBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applicationDate?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  inputDate?: Maybe<DateComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  talker?: Maybe<StringComparisonExp>;
};

export type PmPreparePartySpeakInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applicationDate?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  inputDate?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  talker?: Maybe<Scalars['String']>;
};

export type PmPreparePartySpeakOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applicationDate?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  inputDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  talker?: Maybe<OrderBy>;
};

export type PmPreparePublicityResultBoolExp = {
  _and?: Maybe<Array<Maybe<PmPreparePublicityResultBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPreparePublicityResultBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  opinion?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  publicityDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
};

export type PmPreparePublicityResultInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  opinion?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  publicityDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type PmPreparePublicityResultOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  opinion?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  publicityDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
};

export type PmPrepareThinkingReportBoolExp = {
  _and?: Maybe<Array<Maybe<PmPrepareThinkingReportBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmPrepareThinkingReportBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  submitDate?: Maybe<DateComparisonExp>;
};

export type PmPrepareThinkingReportInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  submitDate?: Maybe<Scalars['Date']>;
};

export type PmPrepareThinkingReportOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  submitDate?: Maybe<OrderBy>;
};

export type PmProcessDevelopeStageFiveMeetingDiscussionBoolExp = {
  _and?: Maybe<Array<Maybe<PmProcessDevelopeStageFiveMeetingDiscussionBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmProcessDevelopeStageFiveMeetingDiscussionBoolExp>>>;
  address?: Maybe<StringComparisonExp>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  agentName?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  host?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  startTime?: Maybe<DateComparisonExp>;
  title?: Maybe<StringComparisonExp>;
};

export type PmProcessDevelopeStageFiveMeetingDiscussionInput = {
  address?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  agentName?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  processInstanceId?: Maybe<Scalars['String']>;
  remarks?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['Date']>;
  title?: Maybe<Scalars['String']>;
};

export type PmProcessDevelopeStageFiveMeetingDiscussionOrderBy = {
  address?: Maybe<OrderBy>;
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  agentName?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  host?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type PmProcessPartyOrganizationAnnualPlanBoolExp = {
  _and?: Maybe<Array<Maybe<PmProcessPartyOrganizationAnnualPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmProcessPartyOrganizationAnnualPlanBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  annex?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  partyCommitteeLeadershipCheck?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  proposalTime?: Maybe<DateComparisonExp>;
  remarks?: Maybe<StringComparisonExp>;
  sponsor?: Maybe<StringComparisonExp>;
  theme?: Maybe<StringComparisonExp>;
  years?: Maybe<StringComparisonExp>;
};

export type PmProcessPartyOrganizationAnnualPlanInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  annex?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  partyCommitteeLeadershipCheck?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  proposalTime?: Maybe<Scalars['Date']>;
  remarks?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  years?: Maybe<Scalars['String']>;
};

export type PmProcessPartyOrganizationAnnualPlanOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  annex?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  partyCommitteeLeadershipCheck?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  proposalTime?: Maybe<OrderBy>;
  remarks?: Maybe<OrderBy>;
  sponsor?: Maybe<OrderBy>;
  theme?: Maybe<OrderBy>;
  years?: Maybe<OrderBy>;
};

export type PmProcessPartyOrganizationChangeOfTermBoolExp = {
  _and?: Maybe<Array<Maybe<PmProcessPartyOrganizationChangeOfTermBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmProcessPartyOrganizationChangeOfTermBoolExp>>>;
  agent?: Maybe<StringComparisonExp>;
  agentDepartment?: Maybe<StringComparisonExp>;
  agentName?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  askForInstructions?: Maybe<StringComparisonExp>;
  changeTime?: Maybe<DateComparisonExp>;
  departmentHeads?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  leaderinCharge?: Maybe<StringComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  processInstanceId?: Maybe<StringComparisonExp>;
  remakes?: Maybe<StringComparisonExp>;
};

export type PmProcessPartyOrganizationChangeOfTermInput = {
  agent?: Maybe<Scalars['String']>;
  agentDepartment?: Maybe<Scalars['String']>;
  agentName?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  askForInstructions?: Maybe<Scalars['String']>;
  changeTime?: Maybe<Scalars['Date']>;
  departmentHeads?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  leaderinCharge?: Maybe<Scalars['String']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  processInstanceId?: Maybe<Scalars['String']>;
  remakes?: Maybe<Scalars['String']>;
};

export type PmProcessPartyOrganizationChangeOfTermOrderBy = {
  agent?: Maybe<OrderBy>;
  agentDepartment?: Maybe<OrderBy>;
  agentName?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  askForInstructions?: Maybe<OrderBy>;
  changeTime?: Maybe<OrderBy>;
  departmentHeads?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  leaderinCharge?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  processInstanceId?: Maybe<OrderBy>;
  remakes?: Maybe<OrderBy>;
};

export type PmProgressThinkingReportBoolExp = {
  _and?: Maybe<Array<Maybe<PmProgressThinkingReportBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmProgressThinkingReportBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  submitDate?: Maybe<DateComparisonExp>;
};

export type PmProgressThinkingReportInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  submitDate?: Maybe<Scalars['Date']>;
};

export type PmProgressThinkingReportOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  submitDate?: Maybe<OrderBy>;
};

export type PmQuestionKpiBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionKpiBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionKpiBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  isQuantify?: Maybe<IntegerComparisonExp>;
  kpiDetails?: Maybe<PmQuestionKpiDetailBoolExp>;
  name?: Maybe<StringComparisonExp>;
  quantifyUnit?: Maybe<StringComparisonExp>;
  quantifyValue?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
  weight?: Maybe<BigDecimalComparisonExp>;
};

export type PmQuestionKpiDetailBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionKpiDetailBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionKpiDetailBoolExp>>>;
  content?: Maybe<StringComparisonExp>;
  createTime?: Maybe<DateComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpi?: Maybe<PmQuestionKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type PmQuestionKpiDetailInput = {
  content?: Maybe<Scalars['String']>;
  createTime?: Maybe<Scalars['Date']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpi?: Maybe<PmQuestionKpiInput>;
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type PmQuestionKpiDetailOrderBy = {
  content?: Maybe<OrderBy>;
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpi?: Maybe<PmQuestionKpiOrderBy>;
  name?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type PmQuestionKpiInput = {
  createTime?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isQuantify?: Maybe<Scalars['Int']>;
  kpiDetails?: Maybe<Array<Maybe<PmQuestionKpiDetailInput>>>;
  name?: Maybe<Scalars['String']>;
  quantifyUnit?: Maybe<Scalars['String']>;
  quantifyValue?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['BigDecimal']>;
};

export type PmQuestionKpiOrderBy = {
  createTime?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isQuantify?: Maybe<OrderBy>;
  kpiDetails?: Maybe<PmQuestionKpiDetailOrderBy>;
  name?: Maybe<OrderBy>;
  quantifyUnit?: Maybe<OrderBy>;
  quantifyValue?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
  weight?: Maybe<OrderBy>;
};

export type PmQuestionPlanBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionPlanBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionPlanBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  planName?: Maybe<StringComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreEndTime?: Maybe<DateComparisonExp>;
  scoreStartTime?: Maybe<DateComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyStaffs?: Maybe<PmQuestionSurveyStaffBoolExp>;
  template?: Maybe<PmQuestionTaskTemplateBoolExp>;
};

export type PmQuestionPlanInput = {
  createTime?: Maybe<Scalars['Date']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  planName?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreEndTime?: Maybe<Scalars['Date']>;
  scoreStartTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyStaffs?: Maybe<Array<Maybe<PmQuestionSurveyStaffInput>>>;
  template?: Maybe<PmQuestionTaskTemplateInput>;
};

export type PmQuestionPlanOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  planName?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreEndTime?: Maybe<OrderBy>;
  scoreStartTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyStaffs?: Maybe<PmQuestionSurveyStaffOrderBy>;
  template?: Maybe<PmQuestionTaskTemplateOrderBy>;
};

export type PmQuestionResultBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionResultBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionResultBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<PmQuestionSurveyStaffBoolExp>;
};

export type PmQuestionResultInput = {
  createTime?: Maybe<Scalars['Date']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<PmQuestionSurveyStaffInput>;
};

export type PmQuestionResultOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<PmQuestionSurveyStaffOrderBy>;
};

export type PmQuestionResultSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionResultSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionResultSaveDtoBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  grade?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpiDetailId?: Maybe<LongComparisonExp>;
  kpiId?: Maybe<LongComparisonExp>;
  modifiedTime?: Maybe<DateComparisonExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  surveyStaffId?: Maybe<PmQuestionSaveDtoBoolExp>;
};

export type PmQuestionResultSaveDtoInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpiDetailId?: Maybe<Scalars['Long']>;
  kpiId?: Maybe<Scalars['Long']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  score?: Maybe<Scalars['BigDecimal']>;
  surveyStaffId?: Maybe<PmQuestionSaveDtoInput>;
};

export type PmQuestionResultSaveDtoOrderBy = {
  createTime?: Maybe<OrderBy>;
  grade?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  kpiDetailId?: Maybe<OrderBy>;
  kpiId?: Maybe<OrderBy>;
  modifiedTime?: Maybe<OrderBy>;
  score?: Maybe<OrderBy>;
  surveyStaffId?: Maybe<PmQuestionSaveDtoOrderBy>;
};

export type PmQuestionSaveDtoBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionSaveDtoBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionSaveDtoBoolExp>>>;
  id?: Maybe<LongComparisonExp>;
  questionnaireResults?: Maybe<PmQuestionResultSaveDtoBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<LocalDateTimeComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
};

export type PmQuestionSaveDtoInput = {
  id?: Maybe<Scalars['Long']>;
  questionnaireResults?: Maybe<Array<Maybe<PmQuestionResultSaveDtoInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['LocalDateTime']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type PmQuestionSaveDtoOrderBy = {
  id?: Maybe<OrderBy>;
  questionnaireResults?: Maybe<PmQuestionResultSaveDtoOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type PmQuestionSurveyStaffBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionSurveyStaffBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionSurveyStaffBoolExp>>>;
  createTime?: Maybe<DateComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  questionnairePlan?: Maybe<PmQuestionPlanBoolExp>;
  questionnaireResults?: Maybe<PmQuestionResultBoolExp>;
  score?: Maybe<BigDecimalComparisonExp>;
  scoreCount?: Maybe<IntegerComparisonExp>;
  scoreTime?: Maybe<DateComparisonExp>;
  status?: Maybe<BooleanComparisonExp>;
  surveyDepartmentId?: Maybe<IntegerComparisonExp>;
  surveyDepartmentName?: Maybe<StringComparisonExp>;
  surveyJobId?: Maybe<IntegerComparisonExp>;
  surveyJobName?: Maybe<StringComparisonExp>;
  surveyUserId?: Maybe<IntegerComparisonExp>;
  surveyUsername?: Maybe<StringComparisonExp>;
  updateState?: Maybe<IntegerComparisonExp>;
};

export type PmQuestionSurveyStaffInput = {
  createTime?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Long']>;
  questionnairePlan?: Maybe<PmQuestionPlanInput>;
  questionnaireResults?: Maybe<Array<Maybe<PmQuestionResultInput>>>;
  score?: Maybe<Scalars['BigDecimal']>;
  scoreCount?: Maybe<Scalars['Int']>;
  scoreTime?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['Boolean']>;
  surveyDepartmentId?: Maybe<Scalars['Int']>;
  surveyDepartmentName?: Maybe<Scalars['String']>;
  surveyJobId?: Maybe<Scalars['Int']>;
  surveyJobName?: Maybe<Scalars['String']>;
  surveyUserId?: Maybe<Scalars['Int']>;
  surveyUsername?: Maybe<Scalars['String']>;
  updateState?: Maybe<Scalars['Int']>;
};

export type PmQuestionSurveyStaffOrderBy = {
  createTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  questionnairePlan?: Maybe<PmQuestionPlanOrderBy>;
  questionnaireResults?: Maybe<PmQuestionResultOrderBy>;
  score?: Maybe<OrderBy>;
  scoreCount?: Maybe<OrderBy>;
  scoreTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  surveyDepartmentId?: Maybe<OrderBy>;
  surveyDepartmentName?: Maybe<OrderBy>;
  surveyJobId?: Maybe<OrderBy>;
  surveyJobName?: Maybe<OrderBy>;
  surveyUserId?: Maybe<OrderBy>;
  surveyUsername?: Maybe<OrderBy>;
  updateState?: Maybe<OrderBy>;
};

export type PmQuestionTaskTemplateBoolExp = {
  _and?: Maybe<Array<Maybe<PmQuestionTaskTemplateBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmQuestionTaskTemplateBoolExp>>>;
  createTime?: Maybe<LocalDateTimeComparisonExp>;
  createUserId?: Maybe<LongComparisonExp>;
  createUsername?: Maybe<StringComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  kpis?: Maybe<PmQuestionKpiBoolExp>;
  name?: Maybe<StringComparisonExp>;
  period?: Maybe<IntegerComparisonExp>;
  updateTime?: Maybe<DateComparisonExp>;
};

export type PmQuestionTaskTemplateInput = {
  createTime?: Maybe<Scalars['LocalDateTime']>;
  createUserId?: Maybe<Scalars['Long']>;
  createUsername?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  kpis?: Maybe<Array<Maybe<PmQuestionKpiInput>>>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
  updateTime?: Maybe<Scalars['Date']>;
};

export type PmQuestionTaskTemplateOrderBy = {
  createTime?: Maybe<OrderBy>;
  createUserId?: Maybe<OrderBy>;
  createUsername?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  period?: Maybe<OrderBy>;
  updateTime?: Maybe<OrderBy>;
};

export type PmReceptionPartyMembershipApplicationManagementBoolExp = {
  _and?: Maybe<Array<Maybe<PmReceptionPartyMembershipApplicationManagementBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmReceptionPartyMembershipApplicationManagementBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applicationTime?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
};

export type PmReceptionPartyMembershipApplicationManagementInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applicationTime?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  memberId?: Maybe<Scalars['Int']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type PmReceptionPartyMembershipApplicationManagementOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applicationTime?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
};

export type PmReviewInformationBoolExp = {
  _and?: Maybe<Array<Maybe<PmReviewInformationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmReviewInformationBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  inspectDate?: Maybe<DateComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
};

export type PmReviewInformationInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  inspectDate?: Maybe<Scalars['Date']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type PmReviewInformationOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  inspectDate?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
};

export type PmTargetGroupMeetingBoolExp = {
  _and?: Maybe<Array<Maybe<PmTargetGroupMeetingBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmTargetGroupMeetingBoolExp>>>;
  abstrac?: Maybe<StringComparisonExp>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  conferenceTitle?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  meetingPlace?: Maybe<StringComparisonExp>;
  meetingTime?: Maybe<DateComparisonExp>;
  presente?: Maybe<StringComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
};

export type PmTargetGroupMeetingInput = {
  abstrac?: Maybe<Scalars['String']>;
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  conferenceTitle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  meetingPlace?: Maybe<Scalars['String']>;
  meetingTime?: Maybe<Scalars['Date']>;
  presente?: Maybe<Scalars['String']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
};

export type PmTargetGroupMeetingOrderBy = {
  abstrac?: Maybe<OrderBy>;
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  conferenceTitle?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  meetingPlace?: Maybe<OrderBy>;
  meetingTime?: Maybe<OrderBy>;
  presente?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
};

export type PmTemplateDownloadBoolExp = {
  _and?: Maybe<Array<Maybe<PmTemplateDownloadBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmTemplateDownloadBoolExp>>>;
  fileId?: Maybe<PmFileBoolExp>;
  id?: Maybe<LongComparisonExp>;
  templateName?: Maybe<StringComparisonExp>;
};

export type PmTemplateDownloadInput = {
  fileId?: Maybe<PmFileInput>;
  id?: Maybe<Scalars['Long']>;
  templateName?: Maybe<Scalars['String']>;
};

export type PmTemplateDownloadOrderBy = {
  id?: Maybe<OrderBy>;
  templateName?: Maybe<OrderBy>;
};

export type PmThinkingReportListBoolExp = {
  _and?: Maybe<Array<Maybe<PmThinkingReportListBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmThinkingReportListBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  partyOrganizationName?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  submitDate?: Maybe<DateComparisonExp>;
};

export type PmThinkingReportListInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  partyOrganizationName?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  submitDate?: Maybe<Scalars['Date']>;
};

export type PmThinkingReportListMaintainBoolExp = {
  _and?: Maybe<Array<Maybe<PmThinkingReportListMaintainBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmThinkingReportListMaintainBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applyDepartment?: Maybe<StringComparisonExp>;
  applyDepartmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
  submitDate?: Maybe<DateComparisonExp>;
};

export type PmThinkingReportListMaintainInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applyDepartment?: Maybe<Scalars['String']>;
  applyDepartmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  submitDate?: Maybe<Scalars['Date']>;
};

export type PmThinkingReportListMaintainOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applyDepartment?: Maybe<OrderBy>;
  applyDepartmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  submitDate?: Maybe<OrderBy>;
};

export type PmThinkingReportListOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  partyOrganizationName?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
  submitDate?: Maybe<OrderBy>;
};

export type PmThoughtReportBoolExp = {
  _and?: Maybe<Array<Maybe<PmThoughtReportBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmThoughtReportBoolExp>>>;
  annex?: Maybe<StringComparisonExp>;
  content?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  organizationId?: Maybe<IntegerComparisonExp>;
  organizationName?: Maybe<StringComparisonExp>;
  partyMemberId?: Maybe<IntegerComparisonExp>;
  partyMemberName?: Maybe<StringComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  reportDate?: Maybe<StringComparisonExp>;
  theme?: Maybe<StringComparisonExp>;
};

export type PmThoughtReportInput = {
  annex?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  organizationId?: Maybe<Scalars['Int']>;
  organizationName?: Maybe<Scalars['String']>;
  partyMemberId?: Maybe<Scalars['Int']>;
  partyMemberName?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  reportDate?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

export type PmThoughtReportOrderBy = {
  annex?: Maybe<OrderBy>;
  content?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationName?: Maybe<OrderBy>;
  partyMemberId?: Maybe<OrderBy>;
  partyMemberName?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  reportDate?: Maybe<OrderBy>;
  theme?: Maybe<OrderBy>;
};

export type PmTrainPeopleBoolExp = {
  _and?: Maybe<Array<Maybe<PmTrainPeopleBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmTrainPeopleBoolExp>>>;
  developmentPersonId?: Maybe<IntegerComparisonExp>;
  developmentPersonName?: Maybe<StringComparisonExp>;
  developmentPersonParty?: Maybe<StringComparisonExp>;
  developmentPersonTel?: Maybe<StringComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  memberId?: Maybe<IntegerComparisonExp>;
  name?: Maybe<StringComparisonExp>;
};

export type PmTrainPeopleInput = {
  developmentPersonId?: Maybe<Scalars['Int']>;
  developmentPersonName?: Maybe<Scalars['String']>;
  developmentPersonParty?: Maybe<Scalars['String']>;
  developmentPersonTel?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  memberId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type PmTrainPeopleOrderBy = {
  developmentPersonId?: Maybe<OrderBy>;
  developmentPersonName?: Maybe<OrderBy>;
  developmentPersonParty?: Maybe<OrderBy>;
  developmentPersonTel?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  memberId?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
};

export type PmViewApplicationBoolExp = {
  _and?: Maybe<Array<Maybe<PmViewApplicationBoolExp>>>;
  _or?: Maybe<Array<Maybe<PmViewApplicationBoolExp>>>;
  annexName?: Maybe<StringComparisonExp>;
  annexPath?: Maybe<StringComparisonExp>;
  applicationDate?: Maybe<DateComparisonExp>;
  department?: Maybe<StringComparisonExp>;
  departmentId?: Maybe<IntegerComparisonExp>;
  id?: Maybe<LongComparisonExp>;
  idNumber?: Maybe<StringComparisonExp>;
  mobileNumber?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  partyOrganization?: Maybe<StringComparisonExp>;
  partyOrganizationId?: Maybe<IntegerComparisonExp>;
  recordDate?: Maybe<DateComparisonExp>;
  remark?: Maybe<StringComparisonExp>;
  sex?: Maybe<StringComparisonExp>;
};

export type PmViewApplicationInput = {
  annexName?: Maybe<Scalars['String']>;
  annexPath?: Maybe<Scalars['String']>;
  applicationDate?: Maybe<Scalars['Date']>;
  department?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Long']>;
  idNumber?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partyOrganization?: Maybe<Scalars['String']>;
  partyOrganizationId?: Maybe<Scalars['Int']>;
  recordDate?: Maybe<Scalars['Date']>;
  remark?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
};

export type PmViewApplicationOrderBy = {
  annexName?: Maybe<OrderBy>;
  annexPath?: Maybe<OrderBy>;
  applicationDate?: Maybe<OrderBy>;
  department?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  idNumber?: Maybe<OrderBy>;
  mobileNumber?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  partyOrganization?: Maybe<OrderBy>;
  partyOrganizationId?: Maybe<OrderBy>;
  recordDate?: Maybe<OrderBy>;
  remark?: Maybe<OrderBy>;
  sex?: Maybe<OrderBy>;
};

export type ProbationStaffBoolExpInput = {
  _and?: Maybe<Array<ProbationStaffBoolExpInput>>;
  _or?: Maybe<Array<ProbationStaffBoolExpInput>>;
  address?: Maybe<StringComparisonExpInput>;
  age?: Maybe<IntegerComparisonExpInput>;
  company?: Maybe<CompanyBoolExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  department?: Maybe<DepartmentBoolExpInput>;
  education?: Maybe<IntegerComparisonExpInput>;
  gender?: Maybe<IntegerComparisonExpInput>;
  hometown?: Maybe<StringComparisonExpInput>;
  hometownAddr?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  phone?: Maybe<StringComparisonExpInput>;
  probationType?: Maybe<IntegerComparisonExpInput>;
  user?: Maybe<UserBoolExpInput>;
};

export type ProbationStaffInput = {
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  company?: Maybe<CompanyInput>;
  department?: Maybe<DepartmentInput>;
  education?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  hometown?: Maybe<Scalars['String']>;
  hometownAddr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  probationType?: Maybe<Scalars['Int']>;
  user?: Maybe<UserInput>;
};

export type ProbationStaffOrderByInput = {
  address?: Maybe<OrderBy>;
  age?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  education?: Maybe<OrderBy>;
  gender?: Maybe<OrderBy>;
  hometown?: Maybe<OrderBy>;
  hometownAddr?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  phone?: Maybe<OrderBy>;
  probationType?: Maybe<OrderBy>;
};

export type ProjectApprovalInfoBoolExpInput = {
  _and?: Maybe<Array<ProjectApprovalInfoBoolExpInput>>;
  _or?: Maybe<Array<ProjectApprovalInfoBoolExpInput>>;
  farm?: Maybe<BooleanComparisonExpInput>;
  farmLoanInvest?: Maybe<IntegerComparisonExpInput>;
  farmType?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  isFirstLoan?: Maybe<BooleanComparisonExpInput>;
  isGreen?: Maybe<BooleanComparisonExpInput>;
  isMilitaryCivilian?: Maybe<BooleanComparisonExpInput>;
  isOtherPoliticalBiz?: Maybe<BooleanComparisonExpInput>;
  isStrategicEmerging?: Maybe<BooleanComparisonExpInput>;
  isSupportCYEconomicCircle?: Maybe<BooleanComparisonExpInput>;
  isSupportDoubleCreationEntity?: Maybe<BooleanComparisonExpInput>;
  newAssignment?: Maybe<BooleanComparisonExpInput>;
  poverty?: Maybe<BooleanComparisonExpInput>;
  realEconomy?: Maybe<BooleanComparisonExpInput>;
  threePowers?: Maybe<BooleanComparisonExpInput>;
  threePowersCharacter?: Maybe<IntegerComparisonExpInput>;
  threePowersLoanInvest?: Maybe<IntegerComparisonExpInput>;
  threePowersLoaner?: Maybe<IntegerComparisonExpInput>;
};

export type ProjectBoolExpInput = {
  _and?: Maybe<Array<ProjectBoolExpInput>>;
  _or?: Maybe<Array<ProjectBoolExpInput>>;
  approvalInfo?: Maybe<ProjectApprovalInfoBoolExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  customers?: Maybe<ProjectCustomerBoolExpInput>;
  departmentName?: Maybe<StringComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  disabled?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  isOldProject?: Maybe<IntegerComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  owners?: Maybe<ProjectOwnerBoolExpInput>;
  purposedBanks?: Maybe<ProjectFundingBoolExpInput>;
  refinanceSourceProjectId?: Maybe<LongComparisonExpInput>;
  status?: Maybe<IntegerComparisonExpInput>;
  totalJointlyGuaranteeAmount?: Maybe<BigDecimalComparisonExpInput>;
  totalUnionGuaranteeAmount?: Maybe<BigDecimalComparisonExpInput>;
  varietyCategory?: Maybe<StringComparisonExpInput>;
};

export type ProjectCustomerBoolExpInput = {
  _and?: Maybe<Array<ProjectCustomerBoolExpInput>>;
  _or?: Maybe<Array<ProjectCustomerBoolExpInput>>;
  contact?: Maybe<StringComparisonExpInput>;
  contactPhone?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  customerId?: Maybe<LongComparisonExpInput>;
  customerRev?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  project?: Maybe<ProjectBoolExpInput>;
  shortName?: Maybe<StringComparisonExpInput>;
  type?: Maybe<IntegerComparisonExpInput>;
};

export type ProjectCustomerOrderByInput = {
  contact?: Maybe<OrderBy>;
  contactPhone?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  customerId?: Maybe<OrderBy>;
  customerRev?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  project?: Maybe<ProjectOrderByInput>;
  shortName?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
};

export type ProjectFundingBoolExpInput = {
  _and?: Maybe<Array<ProjectFundingBoolExpInput>>;
  _or?: Maybe<Array<ProjectFundingBoolExpInput>>;
  charge?: Maybe<IntegerComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  instituteId?: Maybe<LongComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  outRate?: Maybe<DoubleComparisonExpInput>;
  parentId?: Maybe<LongComparisonExpInput>;
  project?: Maybe<ProjectBoolExpInput>;
  shortName?: Maybe<StringComparisonExpInput>;
  type?: Maybe<StringComparisonExpInput>;
};

export type ProjectFundingOrderByInput = {
  charge?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  instituteId?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  outRate?: Maybe<OrderBy>;
  parentId?: Maybe<OrderBy>;
  project?: Maybe<ProjectOrderByInput>;
  shortName?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
};

export type ProjectOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  customers?: Maybe<ProjectCustomerOrderByInput>;
  departmentName?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  disabled?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isOldProject?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  owners?: Maybe<ProjectOwnerOrderByInput>;
  purposedBanks?: Maybe<ProjectFundingOrderByInput>;
  refinanceSourceProjectId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  totalJointlyGuaranteeAmount?: Maybe<OrderBy>;
  totalUnionGuaranteeAmount?: Maybe<OrderBy>;
  varietyCategory?: Maybe<OrderBy>;
};

export type ProjectOwnerBoolExpInput = {
  _and?: Maybe<Array<ProjectOwnerBoolExpInput>>;
  _or?: Maybe<Array<ProjectOwnerBoolExpInput>>;
  companyId?: Maybe<LongComparisonExpInput>;
  departmentId?: Maybe<LongComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  project?: Maybe<ProjectBoolExpInput>;
  userId?: Maybe<LongComparisonExpInput>;
  userName?: Maybe<StringComparisonExpInput>;
};

export type ProjectOwnerOrderByInput = {
  companyId?: Maybe<OrderBy>;
  departmentId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  project?: Maybe<ProjectOrderByInput>;
  userId?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
};

export type RoleInput = {
  id?: Maybe<Scalars['Long']>;
};

export type StaffEducationHisBoolExpInput = {
  _and?: Maybe<Array<StaffEducationHisBoolExpInput>>;
  _or?: Maybe<Array<StaffEducationHisBoolExpInput>>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  degreeCertFile?: Maybe<StringComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  educationType?: Maybe<IntegerComparisonExpInput>;
  endDate?: Maybe<LocalDateTimeComparisonExpInput>;
  graduationCertFile?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  isGetDegreeCert?: Maybe<BooleanComparisonExpInput>;
  isGetGraduationCert?: Maybe<BooleanComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  major?: Maybe<StringComparisonExpInput>;
  schoolName?: Maybe<StringComparisonExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
  startDate?: Maybe<LocalDateTimeComparisonExpInput>;
};

export type StaffEducationHisInput = {
  degreeCertFile?: Maybe<Scalars['String']>;
  eduType?: Maybe<Scalars['Int']>;
  educationType?: Maybe<Scalars['Int']>;
  endDate?: Maybe<Scalars['LocalDateTime']>;
  graduationCertFile?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  isGetDegreeCert?: Maybe<Scalars['Boolean']>;
  isGetGraduationCert?: Maybe<Scalars['Boolean']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  major?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  staff?: Maybe<BaseStaffInput>;
  startDate?: Maybe<Scalars['LocalDateTime']>;
};

export type StaffEducationHisOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  degreeCertFile?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  educationType?: Maybe<OrderBy>;
  endDate?: Maybe<OrderBy>;
  graduationCertFile?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isGetDegreeCert?: Maybe<OrderBy>;
  isGetGraduationCert?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  major?: Maybe<OrderBy>;
  schoolName?: Maybe<OrderBy>;
  staff?: Maybe<BaseStaffOrderByInput>;
  startDate?: Maybe<OrderBy>;
};

export type StaffFamilyMemberBoolExpInput = {
  _and?: Maybe<Array<StaffFamilyMemberBoolExpInput>>;
  _or?: Maybe<Array<StaffFamilyMemberBoolExpInput>>;
  age?: Maybe<IntegerComparisonExpInput>;
  company?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  job?: Maybe<StringComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  politicalStatus?: Maybe<IntegerComparisonExpInput>;
  relation?: Maybe<IntegerComparisonExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
};

export type StaffFamilyMemberInput = {
  age?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  job?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  politicalStatus?: Maybe<Scalars['Int']>;
  relation?: Maybe<Scalars['Int']>;
  staff?: Maybe<BaseStaffInput>;
};

export type StaffFamilyMemberOrderByInput = {
  age?: Maybe<OrderBy>;
  company?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  job?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  politicalStatus?: Maybe<OrderBy>;
  relation?: Maybe<OrderBy>;
  staff?: Maybe<BaseStaffOrderByInput>;
};

export type StaffJobHisBoolExpInput = {
  _and?: Maybe<Array<StaffJobHisBoolExpInput>>;
  _or?: Maybe<Array<StaffJobHisBoolExpInput>>;
  companyName?: Maybe<StringComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  endDate?: Maybe<LocalDateTimeComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  jobName?: Maybe<StringComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
  startDate?: Maybe<LocalDateTimeComparisonExpInput>;
};

export type StaffJobHisInput = {
  companyName?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  jobName?: Maybe<Scalars['String']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  staff?: Maybe<BaseStaffInput>;
  startDate?: Maybe<Scalars['LocalDateTime']>;
};

export type StaffJobHisOrderByInput = {
  companyName?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  endDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  jobName?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  staff?: Maybe<BaseStaffOrderByInput>;
  startDate?: Maybe<OrderBy>;
};

export type StaffPartyBoolExpInput = {
  _and?: Maybe<Array<StaffPartyBoolExpInput>>;
  _or?: Maybe<Array<StaffPartyBoolExpInput>>;
  id?: Maybe<LongComparisonExpInput>;
  joinPartyDate?: Maybe<LocalDateTimeComparisonExpInput>;
  memberType?: Maybe<IntegerComparisonExpInput>;
  party?: Maybe<PartyBoolExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
};

export type StaffPartyInput = {
  id?: Maybe<Scalars['Long']>;
  joinPartyDate?: Maybe<Scalars['LocalDateTime']>;
  memberType?: Maybe<Scalars['Int']>;
  party?: Maybe<PartyInput>;
  partyFeeAmount?: Maybe<Scalars['BigDecimal']>;
  partyFeePayType?: Maybe<Scalars['Int']>;
  staff?: Maybe<BaseStaffInput>;
};

export type StaffPartyOrderByInput = {
  id?: Maybe<OrderBy>;
  joinPartyDate?: Maybe<OrderBy>;
  memberType?: Maybe<OrderBy>;
  party?: Maybe<PartyOrderByInput>;
  staff?: Maybe<BaseStaffOrderByInput>;
};

export type StaffPartyRelInput = {
  id?: Maybe<Scalars['Long']>;
  jobTitle?: Maybe<Scalars['Int']>;
  joinPartyDate?: Maybe<Scalars['LocalDateTime']>;
  memberType?: Maybe<Scalars['Int']>;
  partyFeeAmount?: Maybe<Scalars['BigDecimal']>;
  partyFeePayType?: Maybe<Scalars['Int']>;
  partyId?: Maybe<Scalars['Long']>;
  staffId?: Maybe<Scalars['Long']>;
};

export type StaffPositionCertificationBoolExpInput = {
  _and?: Maybe<Array<StaffPositionCertificationBoolExpInput>>;
  _or?: Maybe<Array<StaffPositionCertificationBoolExpInput>>;
  certFile?: Maybe<StringComparisonExpInput>;
  certType?: Maybe<IntegerComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  fetchDate?: Maybe<LocalDateTimeComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
};

export type StaffPositionCertificationInput = {
  certFile?: Maybe<Scalars['String']>;
  certType?: Maybe<Scalars['Int']>;
  fetchDate?: Maybe<Scalars['LocalDateTime']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  primaryTitle?: Maybe<Scalars['Int']>;
  staff?: Maybe<BaseStaffInput>;
};

export type StaffPositionCertificationOrderByInput = {
  certFile?: Maybe<OrderBy>;
  certType?: Maybe<OrderBy>;
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  fetchDate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  staff?: Maybe<BaseStaffOrderByInput>;
};

export type StaffRewardAfterJoinInput = {
  key?: Maybe<Scalars['Int']>;
};

export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _ge?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['String']>;
  _left_like?: Maybe<Scalars['String']>;
  _left_nlike?: Maybe<Scalars['String']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _nlike?: Maybe<Scalars['String']>;
  _right_like?: Maybe<Scalars['String']>;
  _right_nlike?: Maybe<Scalars['String']>;
};

export type StringComparisonExpInput = {
  _eq?: Maybe<Scalars['String']>;
  _ge?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _le?: Maybe<Scalars['String']>;
  _left_like?: Maybe<Scalars['String']>;
  _left_nlike?: Maybe<Scalars['String']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _right_like?: Maybe<Scalars['String']>;
  _right_nlike?: Maybe<Scalars['String']>;
};

export type SysAppInput = {
  appName?: Maybe<Scalars['String']>;
  defaultPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  menus?: Maybe<Array<SysMenuInput>>;
  sort?: Maybe<Scalars['Int']>;
};

export type SysMenuBoolExpInput = {
  _and?: Maybe<Array<SysMenuBoolExpInput>>;
  _or?: Maybe<Array<SysMenuBoolExpInput>>;
  appId?: Maybe<IntegerComparisonExpInput>;
  hidden?: Maybe<BooleanComparisonExpInput>;
  icon?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  link?: Maybe<StringComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  parent?: Maybe<LongComparisonExpInput>;
  path?: Maybe<StringComparisonExpInput>;
  permission?: Maybe<StringComparisonExpInput>;
  sort?: Maybe<IntegerComparisonExpInput>;
  status?: Maybe<BooleanComparisonExpInput>;
  title?: Maybe<StringComparisonExpInput>;
};

export type SysMenuInput = {
  appId?: Maybe<Scalars['Int']>;
  hidden?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['Long']>;
  path?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type SysMenuOrderByInput = {
  appId?: Maybe<OrderBy>;
  hidden?: Maybe<OrderBy>;
  icon?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  link?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  parent?: Maybe<OrderBy>;
  path?: Maybe<OrderBy>;
  permission?: Maybe<OrderBy>;
  sort?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
};

export type SysRoleBoolExpInput = {
  _and?: Maybe<Array<SysRoleBoolExpInput>>;
  _or?: Maybe<Array<SysRoleBoolExpInput>>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  groupId?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  uuid?: Maybe<StringComparisonExpInput>;
};

export type SysRoleGroupBoolExpInput = {
  _and?: Maybe<Array<SysRoleGroupBoolExpInput>>;
  _or?: Maybe<Array<SysRoleGroupBoolExpInput>>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  roles?: Maybe<SysRoleBoolExpInput>;
};

export type SysRoleGroupInput = {
  createdBy?: Maybe<Scalars['Long']>;
  createdDate?: Maybe<Scalars['LocalDateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedBy?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<SysRoleInput>>;
};

export type SysRoleGroupOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  roles?: Maybe<SysRoleOrderByInput>;
};

export type SysRoleGroupWithPermissionBoolExpInput = {
  _and?: Maybe<Array<SysRoleGroupWithPermissionBoolExpInput>>;
  _or?: Maybe<Array<SysRoleGroupWithPermissionBoolExpInput>>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  roles?: Maybe<SysRoleWithPermissionBoolExpInput>;
};

export type SysRoleGroupWithPermissionOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  roles?: Maybe<SysRoleWithPermissionOrderByInput>;
};

export type SysRoleInput = {
  createdBy?: Maybe<Scalars['Long']>;
  createdDate?: Maybe<Scalars['LocalDateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedBy?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type SysRoleOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  groupId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type SysRoleWithPermissionBoolExpInput = {
  _and?: Maybe<Array<SysRoleWithPermissionBoolExpInput>>;
  _or?: Maybe<Array<SysRoleWithPermissionBoolExpInput>>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  description?: Maybe<StringComparisonExpInput>;
  groupId?: Maybe<StringComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  menus?: Maybe<SysMenuBoolExpInput>;
  name?: Maybe<StringComparisonExpInput>;
  uuid?: Maybe<StringComparisonExpInput>;
};

export type SysRoleWithPermissionInput = {
  createdBy?: Maybe<Scalars['Long']>;
  createdDate?: Maybe<Scalars['LocalDateTime']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Long']>;
  lastModifiedBy?: Maybe<Scalars['Long']>;
  lastModifiedDate?: Maybe<Scalars['LocalDateTime']>;
  menus?: Maybe<Array<SysMenuInput>>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type SysRoleWithPermissionOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  groupId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  uuid?: Maybe<OrderBy>;
};

export type TestModelInput = {
  id: Scalars['Int'];
  test: Scalars['String'];
};

export type UserBoolExpInput = {
  _and?: Maybe<Array<UserBoolExpInput>>;
  _or?: Maybe<Array<UserBoolExpInput>>;
  accountType?: Maybe<IntegerComparisonExpInput>;
  createdBy?: Maybe<LongComparisonExpInput>;
  createdDate?: Maybe<LocalDateTimeComparisonExpInput>;
  deleted?: Maybe<BooleanComparisonExpInput>;
  enabled?: Maybe<BooleanComparisonExpInput>;
  id?: Maybe<LongComparisonExpInput>;
  keycloakGroupId?: Maybe<StringComparisonExpInput>;
  keycloakUserId?: Maybe<StringComparisonExpInput>;
  lastModifiedBy?: Maybe<LongComparisonExpInput>;
  lastModifiedDate?: Maybe<LocalDateTimeComparisonExpInput>;
  staff?: Maybe<BaseStaffBoolExpInput>;
  userName?: Maybe<StringComparisonExpInput>;
};

export type UserInput = {
  accountType?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Long']>;
  keycloakGroupId?: Maybe<Scalars['String']>;
  keycloakUserId?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<RoleInput>>;
  staff?: Maybe<BaseStaffInput>;
  userName?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  createdBy?: Maybe<OrderBy>;
  createdDate?: Maybe<OrderBy>;
  deleted?: Maybe<OrderBy>;
  enabled?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keycloakGroupId?: Maybe<OrderBy>;
  keycloakUserId?: Maybe<OrderBy>;
  lastModifiedBy?: Maybe<OrderBy>;
  lastModifiedDate?: Maybe<OrderBy>;
  roles?: Maybe<OrderBy>;
  userName?: Maybe<OrderBy>;
};

export type BaseStaffQueryVariables = Exact<{
  id: Scalars['Long'];
}>;


export type BaseStaffQuery = { BaseStaff: { id: any, phone?: Maybe<string> } };

export type MyTodoForBpmnTasksConnectionQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
}>;


export type MyTodoForBpmnTasksConnectionQuery = { MyTodoForBpmnTasksConnection: { edges: Array<{ node: { id: any, name?: Maybe<string>, taskTimeConsuming?: Maybe<string>, formUrl?: Maybe<string>, taskCode?: Maybe<string>, lastHandOver?: Maybe<{ fromUserName?: Maybe<string> }>, instance?: Maybe<{ id: any, title?: Maybe<string>, name?: Maybe<string>, lastUserTaskCompleteTime?: Maybe<string>, createdDate?: Maybe<string>, ownerName?: Maybe<string>, formUrl?: Maybe<string>, userTasks?: Maybe<string>, favorite?: Maybe<{ id: any }> }> } }>, pageInfo: { total?: Maybe<number> } } };

export type MessageConnectionQueryVariables = Exact<{
  current?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
}>;


export type MessageConnectionQuery = { MessageConnection: { edges: Array<{ node: { content?: Maybe<string>, createTime?: Maybe<string>, id: any, senderName?: Maybe<string>, source?: Maybe<string>, status?: Maybe<boolean>, title?: Maybe<string>, type?: Maybe<string> } }>, pageInfo: { total?: Maybe<number> } } };

export type MyFocusForBpmnTasksConnectionQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
}>;


export type MyFocusForBpmnTasksConnectionQuery = { MyFocusForBpmnTasksConnection: { edges: Array<{ node: { id: any, instance?: Maybe<{ id: any, title?: Maybe<string>, name?: Maybe<string>, ownerName?: Maybe<string>, createdDate?: Maybe<string>, userTasks?: Maybe<string>, candidateUsers?: Maybe<string>, formUrl?: Maybe<string>, favorite?: Maybe<{ id: any }> }> } }>, pageInfo: { total?: Maybe<number> } } };


export const BaseStaffDocument = gql`
    query BaseStaff($id: Long!) {
  BaseStaff(id: $id) {
    id
    phone
  }
}
    `;

export function useBaseStaffQuery(options: Omit<Urql.UseQueryArgs<never, BaseStaffQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<BaseStaffQuery>({ query: BaseStaffDocument, ...options });
};
export const MyTodoForBpmnTasksConnectionDocument = gql`
    query MyTodoForBpmnTasksConnection($page: Int, $size: Int, $sort: String) {
  MyTodoForBpmnTasksConnection(page: $page, size: $size, sort: $sort) {
    edges {
      node {
        id
        name
        taskTimeConsuming
        formUrl
        taskCode
        lastHandOver {
          fromUserName
        }
        instance {
          id
          title
          name
          lastUserTaskCompleteTime
          createdDate
          ownerName
          formUrl
          userTasks
          favorite {
            id
          }
        }
      }
    }
    pageInfo {
      total
    }
  }
}
    `;

export function useMyTodoForBpmnTasksConnectionQuery(options: Omit<Urql.UseQueryArgs<never, MyTodoForBpmnTasksConnectionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MyTodoForBpmnTasksConnectionQuery>({ query: MyTodoForBpmnTasksConnectionDocument, ...options });
};
export const MessageConnectionDocument = gql`
    query MessageConnection($current: Int, $size: Int, $groupId: Int, $status: Int) {
  MessageConnection(
    current: $current
    size: $size
    groupId: $groupId
    status: $status
  ) {
    edges {
      node {
        content
        createTime
        id
        senderName
        source
        status
        title
        type
      }
    }
    pageInfo {
      total
    }
  }
}
    `;

export function useMessageConnectionQuery(options: Omit<Urql.UseQueryArgs<never, MessageConnectionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MessageConnectionQuery>({ query: MessageConnectionDocument, ...options });
};
export const MyFocusForBpmnTasksConnectionDocument = gql`
    query MyFocusForBpmnTasksConnection($page: Int, $size: Int, $sort: String) {
  MyFocusForBpmnTasksConnection(page: $page, size: $size, sort: $sort) {
    edges {
      node {
        id
        instance {
          id
          title
          name
          ownerName
          createdDate
          userTasks
          candidateUsers
          formUrl
          favorite {
            id
          }
        }
      }
    }
    pageInfo {
      total
    }
  }
}
    `;

export function useMyFocusForBpmnTasksConnectionQuery(options: Omit<Urql.UseQueryArgs<never, MyFocusForBpmnTasksConnectionQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MyFocusForBpmnTasksConnectionQuery>({ query: MyFocusForBpmnTasksConnectionDocument, ...options });
};