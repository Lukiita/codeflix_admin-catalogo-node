export type CategoryConstructorProps = {
  id?: string;
  name: string;
  description?: string | null;
  is_active?: boolean;
  created_at?: Date;
}

export type CategoryCreateCommand = {
  name: string;
  description?: string | null;
  is_active?: boolean;
}

export class Category {
  id: string;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;

  constructor(props: CategoryConstructorProps) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
  }

  public static create(props: CategoryCreateCommand): Category {
    return new Category(props);
  }

  public changeName(name: string): void {
    this.name = name;
  }

  public changeDescription(description: string): void {
    this.description = description;
  }

  public activate(): void {
    this.is_active = true;
  }

  public deactivate(): void {
    this.is_active = false;
  }

  public toJSON(): CategoryConstructorProps {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
    }
  }
}