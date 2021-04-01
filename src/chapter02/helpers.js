export const linkedListToArray = list => {
  const result = [];
  let node = list;
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

export const createNode = (val, next) => {
  const node = {
    val,
    next: next || null
  };
  return node;
};

export const arrayToLinkedList = arr => {
  if (arr.length === 0) return null;
  let list = null;
  // iterate through array from the last to first 
  // so that `list` finally ref to the `head` of the LinkedList.
  for (let i = arr.length - 1; i >= 0; --i) {
    list = createNode(arr[i], list);
  }
  return list;
};

export const getLength = list => {
  let length = 0;
  let copy = list; // copy the reference, to ensure the in-place side-effect of the iterate through
  while (copy) {
    copy = copy.next;
    ++length;
  }
  return length;
};

export const createLinkedList = () => {
  return {
    head: null,
    tail: null
  };
};

export const pushSingle = (list, value) => {
  const node = createNode(value);
  if (list.head) {
    list.tail.next = node;
    list.tail = node;
  } else {
    list.head = node;
    list.tail = node;
  }
};

export const push = (list, ...rest) => {
  for (let i = 0; i < rest.length; ++i) {
    pushSingle(list, rest[i]);
  }
};
