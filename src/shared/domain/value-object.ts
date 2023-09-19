import isEqual from 'lodash/isEqual';

export abstract class ValueObject {
  public equals(vo: this): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo.constructor.name !== this.constructor.name) { // comparando o nome das classes
      return false;
    }

    return isEqual(vo, this);
  }
}