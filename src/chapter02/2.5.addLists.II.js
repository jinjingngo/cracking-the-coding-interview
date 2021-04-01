import * as helpers from '../../src/chapter02/helpers.js';

export const addListsSequenced = (l1, l2) => {
 
  const addListsHelper = (l1, l2) => {
    if (!l1 && !l2) {
      const sum = new PartialSum();
      return sum;
    }

    // recursively add the lower digit
    const sum = addListsHelper(l1.next, l2.next);

    // add the carry digit
    const val = sum.carry + l1.val + l2.val;

    const fullResult = insertBefore(sum.sum, val % 10);

    // return current node and their carry digit
    sum.sum = fullResult;
    sum.carry = parseInt(val / 10);
    return sum;
  };

  class PartialSum {
    constructor () {
      this.sum = null; // LinkedList
      this.carry = 0;
    }
  }

  // pad the linked list with 0
  const leftPad = (linkedList, len) => {
    let head = linkedList;
    for (let i = 0; i < len; i++) {
      head = insertBefore(head, 0);
    }
    return head;
  };
  
  // insert node int the front of a linked list
  const insertBefore = (linkedList, val) => {
    const head = helpers.createNode(val, linkedList);
    return head;
  };

  const len1 = helpers.getLength(l1);
  const len2 = helpers.getLength(l2);
  
  if (len1 < len2) {
    l1 = leftPad(l1, len2 - len1);
  } else {
    l2 = leftPad(l2, len1 - len2);
  }

  const sum = addListsHelper(l1, l2);

  if (sum.carry === 0) {
    return sum.sum;
  } else {
    const result = insertBefore(sum.sum, sum.carry);
    return result;
  }
};
