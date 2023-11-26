import { ASTNode } from './ASTNode';
import { JSONSchemaTypeName } from '../types';

export class AtomicNode extends ASTNode {
  public readonly types: JSONSchemaTypeName;

  constructor(types: JSONSchemaTypeName) {
    super('Atomic');
    this.types = types;
  }
}
