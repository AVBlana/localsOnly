/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateBooking = {
  __typename?: 'AggregateBooking';
  _count?: Maybe<BookingCountAggregate>;
  _max?: Maybe<BookingMaxAggregate>;
  _min?: Maybe<BookingMinAggregate>;
};

export type AggregateExperience = {
  __typename?: 'AggregateExperience';
  _avg?: Maybe<ExperienceAvgAggregate>;
  _count?: Maybe<ExperienceCountAggregate>;
  _max?: Maybe<ExperienceMaxAggregate>;
  _min?: Maybe<ExperienceMinAggregate>;
  _sum?: Maybe<ExperienceSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type Booking = {
  __typename?: 'Booking';
  Experience?: Maybe<Experience>;
  User: User;
  createdAt: Scalars['DateTimeISO']['output'];
  experienceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};


export type BookingExperienceArgs = {
  where?: InputMaybe<ExperienceWhereInput>;
};

export type BookingCountAggregate = {
  __typename?: 'BookingCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  experienceId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BookingCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  experienceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingCreateInput = {
  Experience?: InputMaybe<ExperienceCreateNestedOneWithoutBookingInput>;
  User: UserCreateNestedOneWithoutBookingInput;
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingCreateManyExperienceInput = {
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type BookingCreateManyExperienceInputEnvelope = {
  data: Array<BookingCreateManyExperienceInput>;
};

export type BookingCreateManyInput = {
  createdAt: Scalars['DateTimeISO']['input'];
  experienceId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type BookingCreateManyUserInput = {
  createdAt: Scalars['DateTimeISO']['input'];
  experienceId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingCreateManyUserInputEnvelope = {
  data: Array<BookingCreateManyUserInput>;
};

export type BookingCreateNestedManyWithoutExperienceInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutExperienceInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutExperienceInput>>;
  createMany?: InputMaybe<BookingCreateManyExperienceInputEnvelope>;
};

export type BookingCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookingCreateManyUserInputEnvelope>;
};

export type BookingCreateOrConnectWithoutExperienceInput = {
  create: BookingCreateWithoutExperienceInput;
  where: BookingWhereUniqueInput;
};

export type BookingCreateOrConnectWithoutUserInput = {
  create: BookingCreateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingCreateWithoutExperienceInput = {
  User: UserCreateNestedOneWithoutBookingInput;
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingCreateWithoutUserInput = {
  Experience?: InputMaybe<ExperienceCreateNestedOneWithoutBookingInput>;
  createdAt: Scalars['DateTimeISO']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookingGroupBy = {
  __typename?: 'BookingGroupBy';
  _count?: Maybe<BookingCountAggregate>;
  _max?: Maybe<BookingMaxAggregate>;
  _min?: Maybe<BookingMinAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  experienceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>;
  none?: InputMaybe<BookingWhereInput>;
  some?: InputMaybe<BookingWhereInput>;
};

export type BookingMaxAggregate = {
  __typename?: 'BookingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  experienceId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookingMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  experienceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingMinAggregate = {
  __typename?: 'BookingMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  experienceId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookingMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  experienceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookingOrderByWithAggregationInput = {
  _count?: InputMaybe<BookingCountOrderByAggregateInput>;
  _max?: InputMaybe<BookingMaxOrderByAggregateInput>;
  _min?: InputMaybe<BookingMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  experienceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BookingOrderByWithRelationInput = {
  Experience?: InputMaybe<ExperienceOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  experienceId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum BookingScalarFieldEnum {
  CreatedAt = 'createdAt',
  ExperienceId = 'experienceId',
  Id = 'id',
  UserId = 'userId'
}

export type BookingScalarWhereInput = {
  AND?: InputMaybe<Array<BookingScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookingScalarWhereInput>>;
  OR?: InputMaybe<Array<BookingScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  experienceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BookingScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  experienceId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BookingUpdateInput = {
  Experience?: InputMaybe<ExperienceUpdateOneWithoutBookingNestedInput>;
  User?: InputMaybe<UserUpdateOneRequiredWithoutBookingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpdateManyWithWhereWithoutExperienceInput = {
  data: BookingUpdateManyMutationInput;
  where: BookingScalarWhereInput;
};

export type BookingUpdateManyWithWhereWithoutUserInput = {
  data: BookingUpdateManyMutationInput;
  where: BookingScalarWhereInput;
};

export type BookingUpdateManyWithoutExperienceNestedInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutExperienceInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutExperienceInput>>;
  createMany?: InputMaybe<BookingCreateManyExperienceInputEnvelope>;
  delete?: InputMaybe<Array<BookingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  set?: InputMaybe<Array<BookingWhereUniqueInput>>;
  update?: InputMaybe<Array<BookingUpdateWithWhereUniqueWithoutExperienceInput>>;
  updateMany?: InputMaybe<Array<BookingUpdateManyWithWhereWithoutExperienceInput>>;
  upsert?: InputMaybe<Array<BookingUpsertWithWhereUniqueWithoutExperienceInput>>;
};

export type BookingUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookingCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookingCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookingCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BookingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookingWhereUniqueInput>>;
  set?: InputMaybe<Array<BookingWhereUniqueInput>>;
  update?: InputMaybe<Array<BookingUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BookingUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BookingUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BookingUpdateWithWhereUniqueWithoutExperienceInput = {
  data: BookingUpdateWithoutExperienceInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpdateWithWhereUniqueWithoutUserInput = {
  data: BookingUpdateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpdateWithoutExperienceInput = {
  User?: InputMaybe<UserUpdateOneRequiredWithoutBookingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpdateWithoutUserInput = {
  Experience?: InputMaybe<ExperienceUpdateOneWithoutBookingNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BookingUpsertWithWhereUniqueWithoutExperienceInput = {
  create: BookingCreateWithoutExperienceInput;
  update: BookingUpdateWithoutExperienceInput;
  where: BookingWhereUniqueInput;
};

export type BookingUpsertWithWhereUniqueWithoutUserInput = {
  create: BookingCreateWithoutUserInput;
  update: BookingUpdateWithoutUserInput;
  where: BookingWhereUniqueInput;
};

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  Experience?: InputMaybe<ExperienceNullableRelationFilter>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  experienceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookingWhereUniqueInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  Experience?: InputMaybe<ExperienceNullableRelationFilter>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  experienceId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<StringFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type Experience = {
  __typename?: 'Experience';
  Booking: Array<Booking>;
  _count?: Maybe<ExperienceCount>;
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};


export type ExperienceBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};

export type ExperienceAvgAggregate = {
  __typename?: 'ExperienceAvgAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type ExperienceAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type ExperienceCount = {
  __typename?: 'ExperienceCount';
  Booking: Scalars['Int']['output'];
};


export type ExperienceCountBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};

export type ExperienceCountAggregate = {
  __typename?: 'ExperienceCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ExperienceCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceCreateInput = {
  Booking?: InputMaybe<BookingCreateNestedManyWithoutExperienceInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type ExperienceCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type ExperienceCreateNestedOneWithoutBookingInput = {
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExperienceCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<ExperienceCreateWithoutBookingInput>;
};

export type ExperienceCreateOrConnectWithoutBookingInput = {
  create: ExperienceCreateWithoutBookingInput;
  where: ExperienceWhereUniqueInput;
};

export type ExperienceCreateWithoutBookingInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type ExperienceGroupBy = {
  __typename?: 'ExperienceGroupBy';
  _avg?: Maybe<ExperienceAvgAggregate>;
  _count?: Maybe<ExperienceCountAggregate>;
  _max?: Maybe<ExperienceMaxAggregate>;
  _min?: Maybe<ExperienceMinAggregate>;
  _sum?: Maybe<ExperienceSumAggregate>;
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type ExperienceMaxAggregate = {
  __typename?: 'ExperienceMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExperienceMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceMinAggregate = {
  __typename?: 'ExperienceMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExperienceMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceNullableRelationFilter = {
  is?: InputMaybe<ExperienceWhereInput>;
  isNot?: InputMaybe<ExperienceWhereInput>;
};

export type ExperienceOrderByWithAggregationInput = {
  _avg?: InputMaybe<ExperienceAvgOrderByAggregateInput>;
  _count?: InputMaybe<ExperienceCountOrderByAggregateInput>;
  _max?: InputMaybe<ExperienceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ExperienceMinOrderByAggregateInput>;
  _sum?: InputMaybe<ExperienceSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceOrderByWithRelationInput = {
  Booking?: InputMaybe<BookingOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum ExperienceScalarFieldEnum {
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Name = 'name'
}

export type ExperienceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<FloatWithAggregatesFilter>;
  longitude?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ExperienceSumAggregate = {
  __typename?: 'ExperienceSumAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type ExperienceSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type ExperienceUpdateInput = {
  Booking?: InputMaybe<BookingUpdateManyWithoutExperienceNestedInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ExperienceUpdateManyMutationInput = {
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ExperienceUpdateOneWithoutBookingNestedInput = {
  connect?: InputMaybe<ExperienceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ExperienceCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<ExperienceCreateWithoutBookingInput>;
  delete?: InputMaybe<ExperienceWhereInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ExperienceUpdateToOneWithWhereWithoutBookingInput>;
  upsert?: InputMaybe<ExperienceUpsertWithoutBookingInput>;
};

export type ExperienceUpdateToOneWithWhereWithoutBookingInput = {
  data: ExperienceUpdateWithoutBookingInput;
  where?: InputMaybe<ExperienceWhereInput>;
};

export type ExperienceUpdateWithoutBookingInput = {
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ExperienceUpsertWithoutBookingInput = {
  create: ExperienceCreateWithoutBookingInput;
  update: ExperienceUpdateWithoutBookingInput;
  where?: InputMaybe<ExperienceWhereInput>;
};

export type ExperienceWhereInput = {
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  Booking?: InputMaybe<BookingListRelationFilter>;
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ExperienceWhereUniqueInput = {
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  Booking?: InputMaybe<BookingListRelationFilter>;
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyBooking: AffectedRowsOutput;
  createManyExperience: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneBooking: Booking;
  createOneExperience: Experience;
  createOneUser: User;
  deleteManyBooking: AffectedRowsOutput;
  deleteManyExperience: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneBooking?: Maybe<Booking>;
  deleteOneExperience?: Maybe<Experience>;
  deleteOneUser?: Maybe<User>;
  updateManyBooking: AffectedRowsOutput;
  updateManyExperience: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneBooking?: Maybe<Booking>;
  updateOneExperience?: Maybe<Experience>;
  updateOneUser?: Maybe<User>;
  upsertOneBooking: Booking;
  upsertOneExperience: Experience;
  upsertOneUser: User;
};


export type MutationCreateManyBookingArgs = {
  data: Array<BookingCreateManyInput>;
};


export type MutationCreateManyExperienceArgs = {
  data: Array<ExperienceCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneBookingArgs = {
  data: BookingCreateInput;
};


export type MutationCreateOneExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};


export type MutationDeleteManyExperienceArgs = {
  where?: InputMaybe<ExperienceWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type MutationDeleteOneExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyBookingArgs = {
  data: BookingUpdateManyMutationInput;
  where?: InputMaybe<BookingWhereInput>;
};


export type MutationUpdateManyExperienceArgs = {
  data: ExperienceUpdateManyMutationInput;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneBookingArgs = {
  data: BookingUpdateInput;
  where: BookingWhereUniqueInput;
};


export type MutationUpdateOneExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneBookingArgs = {
  create: BookingCreateInput;
  update: BookingUpdateInput;
  where: BookingWhereUniqueInput;
};


export type MutationUpsertOneExperienceArgs = {
  create: ExperienceCreateInput;
  update: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateBooking: AggregateBooking;
  aggregateExperience: AggregateExperience;
  aggregateUser: AggregateUser;
  booking?: Maybe<Booking>;
  bookings: Array<Booking>;
  experience?: Maybe<Experience>;
  experiences: Array<Experience>;
  findFirstBooking?: Maybe<Booking>;
  findFirstBookingOrThrow?: Maybe<Booking>;
  findFirstExperience?: Maybe<Experience>;
  findFirstExperienceOrThrow?: Maybe<Experience>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  getBooking?: Maybe<Booking>;
  getExperience?: Maybe<Experience>;
  getUser?: Maybe<User>;
  groupByBooking: Array<BookingGroupBy>;
  groupByExperience: Array<ExperienceGroupBy>;
  groupByUser: Array<UserGroupBy>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryAggregateExperienceArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type QueryExperiencesArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryFindFirstBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryFindFirstBookingOrThrowArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryFindFirstExperienceArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryFindFirstExperienceOrThrowArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGetBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryGetExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByBookingArgs = {
  by: Array<BookingScalarFieldEnum>;
  having?: InputMaybe<BookingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BookingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryGroupByExperienceArgs = {
  by: Array<ExperienceScalarFieldEnum>;
  having?: InputMaybe<ExperienceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  Booking: Array<Booking>;
  _count?: Maybe<UserCount>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
};


export type UserBookingArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Booking: Scalars['Int']['output'];
};


export type UserCountBookingArgs = {
  where?: InputMaybe<BookingWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Booking?: InputMaybe<BookingCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutBookingInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<UserCreateWithoutBookingInput>;
};

export type UserCreateOrConnectWithoutBookingInput = {
  create: UserCreateWithoutBookingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBookingInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Booking?: InputMaybe<BookingOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  Booking?: InputMaybe<BookingUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutBookingNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBookingInput>;
  create?: InputMaybe<UserCreateWithoutBookingInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutBookingInput>;
  upsert?: InputMaybe<UserUpsertWithoutBookingInput>;
};

export type UserUpdateToOneWithWhereWithoutBookingInput = {
  data: UserUpdateWithoutBookingInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutBookingInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBookingInput = {
  create: UserCreateWithoutBookingInput;
  update: UserUpdateWithoutBookingInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Booking?: InputMaybe<BookingListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  Booking?: InputMaybe<BookingListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExperiencesQuery = { __typename?: 'Query', experiences: Array<{ __typename?: 'Experience', name: string, latitude: number, longitude: number }> };

export type CreateOneExperienceMutationVariables = Exact<{
  data: ExperienceCreateInput;
}>;


export type CreateOneExperienceMutation = { __typename?: 'Mutation', createOneExperience: { __typename?: 'Experience', id: string, name: string } };

export type GetBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookingsQuery = { __typename?: 'Query', bookings: Array<{ __typename?: 'Booking', id: string }> };


export const GetExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]} as unknown as DocumentNode<GetExperiencesQuery, GetExperiencesQueryVariables>;
export const CreateOneExperienceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneExperience"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExperienceCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateOneExperienceMutation, CreateOneExperienceMutationVariables>;
export const GetBookingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetBookingsQuery, GetBookingsQueryVariables>;