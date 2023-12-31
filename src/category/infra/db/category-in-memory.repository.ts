import { SortDirection } from '../../../shared/domain/repositories/search-params';
import { Uuid } from '../../../shared/domain/value-objects/uuid.vo';
import { InMemorySearchableRepository } from '../../../shared/infra/db/in-memory/in-memory.repository';
import { Category } from '../../domain/category.entity';

export class CategoryInMemoryRepository extends InMemorySearchableRepository<Category, Uuid>{

  sortableFields: string[] = ['name', 'created_at'];

  protected async applyFilter(items: Category[], filter: string): Promise<Category[]> {
    if (!filter) {
      return items;
    }

    return items.filter((i) =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  public getEntity(): new (...args: any[]) => Category {
    return Category;
  }

  protected applySort(items: Category[], sort: string, sort_dir: SortDirection | null): Category[] {
    return sort ? super.applySort(items, sort, sort_dir) : super.applySort(items, 'created_at', 'desc');
  }
}