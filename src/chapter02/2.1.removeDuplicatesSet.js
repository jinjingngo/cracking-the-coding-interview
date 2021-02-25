/**
 * Iterate through list keeping a Set of all the values seen.
 * If a seen value is seen again in the list then skip over it.
 * 
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times.
 * Aditional space: O(N)
 * 
 * @param {LinkedList} list - head reference of the LinkedList 
 * @returns {LinkedList} list - head reference of the LinkedList 
 */
export const removeDuplicatesSet = (list) => {
  if (!list) return list;
  const seen = new Set();
  let node = list;
  seen.add(node.val);
  while (node.next) {
    if (seen.has(node.next.val)) {
      // skip next node
      node.next = node.next.next;
    } else {
      seen.add(node.next.val);
      node = node.next;
    }
  }
  return list; // return list, head will never change;
};

/**
 * Two level loop through
 * 
 * N = |list|
 * Time: O(1)
 * Aditional space: O(N^2)
 * 
 * @param {LinkedList} list - head reference of the LinkedList 
 * @returns {LinkedList} list - head reference of the LinkedList 
 */
export const removeDuplicateTwoPointers = (list) => {
  if (!list) return list;

  let current = list;
  while (current !== null) {
    let runner = current;
    while (runner.next !== null) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return list;
};