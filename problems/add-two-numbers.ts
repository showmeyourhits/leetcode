
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
 }


/**
 * We're iterating over linked lists, adding numbers in nodes and carry over 1.
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  const resultListNode = new ListNode(Infinity, null);
  let carryOver = 0;
  let current = resultListNode;

  while (l1 !== null || l2 !== null) {
    const newValue = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryOver;
    
    current.val = newValue % 10; // 0-9
    
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    // Carry over may be only 1 or 0
    carryOver = Number(newValue >= 10);

    // We should add next only if there are Nodes in Lists or for last Carry Over
    current.next = l1 || l2 || carryOver ? new ListNode(carryOver, null) : null;

    // next will be null only for last carry over
    current = current.next as ListNode;
  }

  return resultListNode;
};
