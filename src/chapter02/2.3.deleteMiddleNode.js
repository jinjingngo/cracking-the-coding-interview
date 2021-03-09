/**
 * Copy the valud from the next node into the current node and then
 * update the next pointer of the current to skip over the next node.
 * 
 * Time: O(1)
 * Aditional space: O(1)
 * 
 * @param {LinedListNode} n
 * @returns {undefined}
 */
export const deleteMiddleNode = (n) => {
  if (!n || !n.next) {
    throw new Error('invalid node');
  }

  const next = n.next;
  n.val = next.val;
  n.next = next.next;
};