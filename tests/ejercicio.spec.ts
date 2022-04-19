import 'mocha';
import {expect} from 'chai';
import {addNumber} from '../src/ejercicio';

describe('RandomNumber', () => {
  it('Debe existir una función para sumar dos números', () => {
    expect(addNumber).to.exist;
  });
  it('2 + 2 debe devolver 4', () => {
    expect(addNumber(2, 2)).to.be.equal(4);
  });
});
