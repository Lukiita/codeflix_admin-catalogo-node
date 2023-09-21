import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';
import { Category } from './category.entity';

class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsBoolean()
  @IsNotEmpty()
  is_active: boolean;

  constructor({ name, description, is_active }: Category) {
    Object.assign(this, { name, description, is_active })
  }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules> {
  public validate(entity: Category) {
    return super.validate(new CategoryRules(entity));
  }
}

export class CategoryValidatorFactory {
  public static create(): CategoryValidator {
    return new CategoryValidator();
  }
}