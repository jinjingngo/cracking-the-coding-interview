/**
 * TripleStack class holds 3 stacks in one array. This is done by interleaving
 * the values from the 3 indexes, so the first items are at 0, 1 and 2 and
 * subsequent items are every 3 places from thoese. This class takes advantage
 * of the fact that JavaScript arrays are dynamic and doesn't hold the stacks
 * to any size. It doesn't reduce the size of the underlying array when items 
 * are popped but that could easily be added.
 * 
 * Time: 
 *  push: O(1), pop: O(1), peak: O(1)
 * Space:
 *  push: O(1), pop: O(1), peak: O(1)
 */
export class TripleStack {
  constructor () {
    this._array = [];
    this._lengths = [0, 0, 0];
  }

  _getLength (stack) {
    return this._lengths[stack - 1];
  }

  push (stack, value) {
    const index = this._getLength(stack) * 3 + stack - 1;
    this._array[index] = value;
    ++this._lengths[stack - 1];
  }

  pop (stack) {
    const length = this._getLength(stack);
    let value;
    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
      this._array[index] = undefined;
      --this._lengths[stack - 1];
    }
    return value;
  }

  peek (stack) {
    const length = this._getLength(stack);
    let value;
    if (length > 0) {
      const index = (length - 1) * 3 + stack - 1;
      value = this._array[index];
    }
    return value;
  }

  isEmpty (stack) {
    return this._getLength(stack) === 0;
  }
}