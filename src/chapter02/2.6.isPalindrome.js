import * as helpers from '../../src/chapter02/helpers.js';

/**
 * N = |head|
 * Time: O(N)
 * Space: O(1)
 * 
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
const reverse = (head) => {
  // step 1
  const cloned = helpers.arrayToLinkedList(helpers.linkedListToArray(head));
  let previous = null;
  let current = cloned;
  let following = cloned;
  // step 2
  while(current) {
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }
  return previous;
};

const isEqual = (l1, l2) => {
  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return !l1 && !l2;
};

/**
 * N = |head|
 * Time: O(N)
 * Space: O(1)
 * 
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
export const isPalindromRecursive = (head) => {
  const reversed = reverse(head);
  return isEqual(head, reversed);
};
