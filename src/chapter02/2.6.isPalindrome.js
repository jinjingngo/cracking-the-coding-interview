import * as helpers from '../../src/chapter02/helpers.js';

/**
 * 1. Set `following` equal to `following.next`
 * 2. Set `current.next` equal to `previous`
 * 3. Set `previous` equal to `current`
 * 4. Set `current` equal to `following`
 * Above is a completes one round of the reversals.
 * We just need to apply these same operations 
 * to every node until we reach the end of the list.
 * 
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
 * @returns {Boolean}
 */
export const isPalindromReverse = (head) => {
  const reversed = reverse(head);
  return isEqual(head, reversed);
};

/**
 * By reversing the front half of the list, 
 * we can detect a linked list where the front half of the 
 * list is the reverse of the second half, with a stack to accomplish this.
 * 
 * Push the first half of the elements onto a stack.
 * Presume we don't know the length of the linked list,
 * we iterate through the linked list, using the fast runner / slow runner technique.
 * At each step in the loop, we push the val from the slow runner onto the stack.
 * When the fast runner hits the end of the list, the slow runner will have reached 
 * the middle of the linked list. By this point, the stack will have all the elements 
 * from the front of the linked list, but in reverse order.
 * 
 * Now we simply iterate thourgh the rest of the linked list (the rest of the slow runer).
 * At each iteration, we compare the node val to the top of the stack. If we complete the 
 * iteration without finding a difference, then the linked list is a palindrome. 
 * 
 * N = |head|
 * Time: O(N)
 * Space: O(N)
 * 
 * @param {LinkedList} head 
 * @returns {Boolean}
 */
export const isPalindromIterative = (head) => {
  const clonedHead = helpers.arrayToLinkedList(helpers.linkedListToArray(head));
  let fast = clonedHead;
  let slow = clonedHead;
  
  const stack = [];
  /**
   * Push elements from first half of linked list onto stack.
   * When fast pointer (which is moving at 2x speed) 
   * reaches the end of the linked list,
   * then we know we're at the middle
   */
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Has odd number of nodes, so skip the middle element
  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    const top = stack.pop();
    if (top !== slow.val) {
      return false;
    }
    slow = slow.next;
  }
  return true;
};
