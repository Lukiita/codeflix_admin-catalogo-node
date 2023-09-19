import { FieldsErrors } from "./validator-fields.interface";

export class EntityValidationError extends Error {
  constructor(public error: FieldsErrors, message = "Validation Error") {
    super(message);
  }

  public count(): number {
    return Object.keys(this.error).length;
  }
}