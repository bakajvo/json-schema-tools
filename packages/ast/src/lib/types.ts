import { JSONSchema7, JSONSchema7Type, JSONSchema7TypeName } from 'json-schema';

export type JSONSchema = JSONSchema7;

export type JSONSchemaTypeName =
  | JSONSchema7TypeName
  | JSONSchema7TypeName[]
  | undefined;

export type NodeTypes = 'Root' | 'Atomic';
