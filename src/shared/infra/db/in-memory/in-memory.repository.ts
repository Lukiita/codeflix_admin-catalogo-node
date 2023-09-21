import { Entity } from '../../../domain/entity';
import { EntityNotFoundError } from '../../../domain/errors/entity-not-found.error';
import { IRepository } from '../../../domain/repositories/repository-interface';
import { ValueObject } from '../../../domain/value-object';

export abstract class InMemoryRepository<E extends Entity, EntityId extends ValueObject>
  implements IRepository<E, EntityId> {

  public items: E[] = [];

  public async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }

  public async bulkInsert(entities: E[]): Promise<void> {
    this.items.push(...entities);
  }

  public async update(entity: E): Promise<void> {
    const indexFound = this.items.findIndex(item => item.entity_id.equals(entity.entity_id));

    if (indexFound === -1) {
      throw new EntityNotFoundError(entity.entity_id, this.getEntity());
    }

    this.items[indexFound] = entity;
  }

  public async delete(entity_id: EntityId): Promise<void> {
    const indexFound = this.items.findIndex(item => item.entity_id.equals(entity_id));

    if (indexFound === -1) {
      throw new EntityNotFoundError(entity_id, this.getEntity());
    }

    this.items.splice(indexFound, 1);
  }

  public async findById(entity_id: EntityId): Promise<E | null> {
    const item = this.items.find(item => item.entity_id.equals(entity_id));

    return typeof item === 'undefined' ? null : item;
  }

  public async findAll(): Promise<E[]> {
    return this.items;
  }

  public abstract getEntity(): new (...args: any[]) => E;
}