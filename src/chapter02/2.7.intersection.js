import * as helpers from '../../src/chapter02/helpers.js';

/**
 * 1. Run through each linked list to get lengths and the tails.
 * 2. Compare the tails. If they are different (by reference, not by value), return immediately. There is no intersection.
 * 3. Set two pointers to the start of each linked list.
 * 4. On the longer linked list, advance its pointer by the difference in lengths.
 * 5. Now, traverse on each linked list until the pointers are the same.
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 * @returns {LinkedList}
 */
export const intersection = (l1, l2) => {
  class Result {
    constructor (tail, size) {
      this.tail = tail;
      this.size = size;
    }
  }

  const getTailAndSize = linkedList => {
    if (!linkedList) return null;
    let size = 1;
    let clone = helpers.arrayToLinkedList(helpers.linkedListToArray(linkedList));
    while (clone.next) {
      size++;
      clone = clone.next;
    }
    const result = new Result(clone, size);
    return result;
  };

  const getKthNode = (linkedList, kth) => {
    while (kth > 0 && linkedList) {
      linkedList = linkedList.next;
      kth--;
    }
    return linkedList;
  };

  if (!l1 || !l2) return null;

  // Get tail and sizes
  const result1 = getTailAndSize(l1);
  const result2 = getTailAndSize(l2);

  // If different tail nodes, then there's no intersection.
  if (Object.is(result1.tail, result2.tail)) return null;

  let shorter = result1.size < result2.size ? l1 : l2;
  let longer = result1.size < result2.size ? l2 : l1;
  
  // advance the pointer for the longer linked list by difference in lengths.
  longer = getKthNode(longer, Math.abs(result1.size - result2.size));
  
  // Move both pointers until we have collision.
  while (!Object.is(shorter, longer)) {
    shorter = shorter.next;
    longer = longer.next;
  }

  // return either one
  return longer;
};
