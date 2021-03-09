import chai from 'chai';
import * as funcs from '../../src/chapter02/2.3.deleteMiddleNode.js';
import * as helpers from '../../src/chapter02/helpers.js';

const { expect } = chai;

for (let key in funcs) {
  const func = funcs[key];
  
  describe(`chapter02-2.3 ${key}`, function () {
    
    it('should throws an error if node is invalid', function () {
      expect(() => func(null)).to.throw('invalid node');
      expect(() => func(undefined)).to.throw('invalid node');
      expect(() => func(helpers.arrayToLinkedList([11]))).to.throw('invalid node');
    });

    it('can delete multiple in long list', function () {
      const list = helpers.arrayToLinkedList([8, 6 ,4, 2, 1]);
      func(list);
      func(list);
      func(list);
      func(list);
      expect(list.val).to.equal(1);
      expect(list.next).to.equal(null);
    });

    [
      {
        list: [5, 8],
        node: 0, 
        expected: [8]
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 8,
        expected: [5, 8, 3, 2, 7, 1, 4, 9, 30]
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 4,
        expected: [5, 8, 3, 2, 1, 4, 9, 15, 30]
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 1,
        expected: [5, 3, 2, 7, 1, 4, 9, 15, 30]
      },
      {
        list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
        node: 2,
        expected: [5, 8, 2, 7, 1, 4, 9, 15, 30]
      }
    ].forEach(context => {
      it(`removing node ${context.node} from list ${context.list}`, function () {
        const list = helpers.arrayToLinkedList(context.list);
        let node = list;
        for (let i = 0; i < context.node; ++i) {
          node = node.next;
        }
        func(node);
        expect(helpers.linkedListToArray(list)).to.eql(context.expected);
      });
    });
  });
}