import { NodeTypes } from '../types';

let SEED = BigInt(0);

export abstract class ASTNode {
  public readonly id: string;
  public parent: ASTNode | null = null;
  public kind: NodeTypes = 'Root';

  protected constructor(kind: NodeTypes) {
    this.id = String(SEED++);
    this.kind = kind;
  }
}
