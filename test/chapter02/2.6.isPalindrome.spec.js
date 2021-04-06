import chai from 'chai';
import * as funcs from '../../src/chapter02/2.6.isPalindrome.js';
import * as helpers from '../../src/chapter02/helpers.js';

const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];

  describe(`chapter02-2.6 ${key}`, function () {
    [
      [1],
      [1, 1],
      [2, 1, 3, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 9, 8, 3, 1, 2],
      [2, 1, 3, 8, 9, 16, 11, 16, 9, 8, 3, 1, 2]
    ].forEach(arg => {
      it(`return true for list ${arg}`, function () {
        const list = helpers.arrayToLinkedList(arg);
        expect(func(list)).to.be.true;
        expect(helpers.linkedListToArray(list)).to.eql(arg);
      });
    });

    [
      [12, 2, 2],
      [2, 1],
      [2, 1, 5, 4, 3, 2]
    ].forEach(arg => {
      it(`return false for list ${arg}`, function () {
        const list = helpers.arrayToLinkedList(arg);
        expect(func(list)).to.be.false;
        expect(helpers.linkedListToArray(list)).to.eql(arg);
      });
    });
  });
}