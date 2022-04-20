import {MapAndReduce} from './mapAndReduce';

/**
 * Clase para sumar en el map
 */
export class AddMapReduce extends MapAndReduce {
  /**
   * Constructor de AddMapReduce
   * @param {number} array
   */
  constructor(array: number[]) {
    super(array);
  };

  /**
   * @param {number} a
   * @param {number} n
   * @return {number}
   */
  protected funcion(a: number, n: number): number {
    return a + n;
  }

  /**
   * Función para realizar el sucedáneo de reduce() sobre el array
   * @param {number[]} array
   * @return {number}
   */
  protected reduceArray(array: number[]): number {
    let solucion: number = 0;
    this.array.forEach((a, s) => {
      solucion += a;
    });
    return solucion;
  }
}
