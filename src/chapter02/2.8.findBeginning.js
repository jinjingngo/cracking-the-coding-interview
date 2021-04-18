/**
 * This algorithm simply stores each node it sees into a Set structure, if there
 * is a cycle then the first repeat we see will be start of that cycle and
 * the value we should return.
 * 
 * N = |head|
 * Time: O(N) - assumes Set is hashmap based so O(1) costs
 * Space: O(N)
 * 
 * @param {LinkedList} head 
 * @returns {LinkedList}
 */
export const findStartOfLoopSet = (head) => {
  const visited = new Set();
  let node = head;

  while (node) {
    if (visited.has(node)) return node;
    visited.add(node);
    node = node.next;
  }
  return null;
};

/**
 * This algorithm uses the runners principle where we have a slow and a fast (2x)
 * runners that both traverse the list. If at some point both runners point to
 * the same node then there is a cycle. Due to the different rate at which they 
 * travel they will meet k steps 'before' the start of the cycle so if you reset 
 * the slow runner back to the start and leave the faster runner at the meeting 
 * point, when they start moving forward again they will eventually meet at the 
 * start of the cycle.
 * 
 * N = |head|
 * Time: O(N)
 * Space: O(1)
 * @param {LinkedList} head 
 * @returns {LinkedList}
 */
export const findStartOfLoop = (head) => {
  let slow = head;
  let fast = head;

  // find meeting point. This will be LOOP_size - K steps into the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (Object.is(slow, fast)) break;
  }

  // Error check - no meeting point, and therefore no loop
  if (!fast || !fast.next) return null;

  // Move slow to head. Keep fast at meeting point.
  // Each are k steps from the loop start.
  // If they move at the same pace, they must meet at loop start.
  slow = head;
  while (!Object.is(slow, fast)) {
    slow = slow.next;
    fast = fast.next;
  }

  // Both now point to the start of the loop.
  return fast;
};
