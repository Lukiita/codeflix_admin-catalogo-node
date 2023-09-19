import { InvalidUuidError, Uuid } from '../uuid.vo';

describe('Uuid Unit Tests', () => {

  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

  test('should throw error when uuid is invalid', () => {
    expect(() => new Uuid('invalid_id')).toThrowError(new InvalidUuidError());
    expect(validateSpy).toBeCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(validateSpy).toBeCalledTimes(1);
  });

  test("should accept a valid uuid", () => {
    const uuid = new Uuid("c3e9b0d0-7b6f-4a8e-8e1f-3f9e6a2f7e3c");
    expect(uuid.id).toBe("c3e9b0d0-7b6f-4a8e-8e1f-3f9e6a2f7e3c");
    expect(validateSpy).toBeCalledTimes(1);
  });
});