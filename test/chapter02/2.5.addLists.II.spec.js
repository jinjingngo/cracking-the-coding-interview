import chai from 'chai';
import * as funcs from '../../src/chapter02/2.5.addLists.II.js';
import * as helpers from '../../src/chapter02/helpers.js';

const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];
  describe(`chapter02-2.5 ${key}`, function () {
    [
      {
        l1: [1],
        l2: [1],
        expected: [2]
      },
      {
        l1: [1, 1],
        l2: [4, 4],
        expected: [5, 5]
      },
      {
        l1: [4, 4],
        l2: [4, 8],
        expected: [9, 2]
      },
      {
        l1: [4, 5, 3],
        l2: [8],
        expected: [4, 6, 1]
      },
      {
        l1: [4, 9, 3],
        l2: [8],
        expected: [5, 0, 1]
      },
      {
        l1: [2, 9],
        l2: [4, 9, 9, 9, 9, 9],
        expected: [5, 0, 0, 0, 2, 8]
      },
      {
        l1: [0],
        l2: [9, 8, 7, 6, 5, 4, 3, 2, 1],
        expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]
      },
      {
        l1: [7, 1, 6],
        l2: [5, 9, 2],
        expected: [1, 3, 0, 8]
      }
    ].forEach(context => {
      it(`correctly adds ${context.l1} and ${context.l2}`, function () {
        const result = func(helpers.arrayToLinkedList(context.l1), helpers.arrayToLinkedList(context.l2));
        expect(helpers.linkedListToArray(result)).to.eql(context.expected);
      });
    });
  });
}
