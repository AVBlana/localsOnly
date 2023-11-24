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
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateExperience = {
  __typename?: 'AggregateExperience';
  _count?: Maybe<ExperienceCountAggregate>;
  _max?: Maybe<ExperienceMaxAggregate>;
  _min?: Maybe<ExperienceMinAggregate>;
};

export type Experience = {
  __typename?: 'Experience';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExperienceCountAggregate = {
  __typename?: 'ExperienceCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type ExperienceCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ExperienceCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type ExperienceGroupBy = {
  __typename?: 'ExperienceGroupBy';
  _count?: Maybe<ExperienceCountAggregate>;
  _max?: Maybe<ExperienceMaxAggregate>;
  _min?: Maybe<ExperienceMinAggregate>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ExperienceMaxAggregate = {
  __typename?: 'ExperienceMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExperienceMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceMinAggregate = {
  __typename?: 'ExperienceMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ExperienceMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceOrderByWithAggregationInput = {
  _count?: InputMaybe<ExperienceCountOrderByAggregateInput>;
  _max?: InputMaybe<ExperienceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ExperienceMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type ExperienceOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export enum ExperienceScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type ExperienceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ExperienceScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type ExperienceUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ExperienceUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ExperienceWhereInput = {
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type ExperienceWhereUniqueInput = {
  AND?: InputMaybe<Array<ExperienceWhereInput>>;
  NOT?: InputMaybe<Array<ExperienceWhereInput>>;
  OR?: InputMaybe<Array<ExperienceWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyExperience: AffectedRowsOutput;
  createOneExperience: Experience;
  deleteManyExperience: AffectedRowsOutput;
  deleteOneExperience?: Maybe<Experience>;
  updateManyExperience: AffectedRowsOutput;
  updateOneExperience?: Maybe<Experience>;
  upsertOneExperience: Experience;
};


export type MutationCreateManyExperienceArgs = {
  data: Array<ExperienceCreateManyInput>;
};


export type MutationCreateOneExperienceArgs = {
  data: ExperienceCreateInput;
};


export type MutationDeleteManyExperienceArgs = {
  where?: InputMaybe<ExperienceWhereInput>;
};


export type MutationDeleteOneExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type MutationUpdateManyExperienceArgs = {
  data: ExperienceUpdateManyMutationInput;
  where?: InputMaybe<ExperienceWhereInput>;
};


export type MutationUpdateOneExperienceArgs = {
  data: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
};


export type MutationUpsertOneExperienceArgs = {
  create: ExperienceCreateInput;
  update: ExperienceUpdateInput;
  where: ExperienceWhereUniqueInput;
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
  aggregateExperience: AggregateExperience;
  experience?: Maybe<Experience>;
  experiences: Array<Experience>;
  findFirstExperience?: Maybe<Experience>;
  findFirstExperienceOrThrow?: Maybe<Experience>;
  getExperience?: Maybe<Experience>;
  groupByExperience: Array<ExperienceGroupBy>;
};


export type QueryAggregateExperienceArgs = {
  cursor?: InputMaybe<ExperienceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
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


export type QueryGetExperienceArgs = {
  where: ExperienceWhereUniqueInput;
};


export type QueryGroupByExperienceArgs = {
  by: Array<ExperienceScalarFieldEnum>;
  having?: InputMaybe<ExperienceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ExperienceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExperienceWhereInput>;
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

export type GetExperiencesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExperiencesQuery = { __typename?: 'Query', experiences: Array<{ __typename?: 'Experience', name: string }> };


export const GetExperiencesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetExperiencesQuery, GetExperiencesQueryVariables>;