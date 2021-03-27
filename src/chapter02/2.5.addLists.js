import * as helpers from '../../src/chapter02/helpers.js';

export const addLists = (l1, l2, carry = 0) => {
  if (!l1 && !l2 && !carry) return null;
  
  let value = carry;

  if (l1) {
    value += l1.val;
  }
  if (l2) {
    value += l2.val;
  }
  const result = helpers.createNode(value % 10); // second ditit of number

  if (l1 || l2) {
    const next = addLists(l1 ? l1.next : null, l2 ? l2.next : null, value >= 10 ? 1 : 0);
    result.next = next;
  }
  return result;
};
