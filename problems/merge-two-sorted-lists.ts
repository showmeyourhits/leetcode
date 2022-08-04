import {ListNode} from '../src/listUtils';

export function mergeTwoSortedLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) return null; 
  if (!l1) return l2;
  if (!l2) return l1;

  const resultList = l1.val > l2.val ? l2 : l1;
  if (resultList === l1) {
    l1 = l1.next;
  } else {
    l2 = l2.next;
  }

  let current = resultList;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        current.next = l2;
        l2 = l2.next;
      } else {
        current.next = l1;
        l1 = l1.next;
      }
    } else if (l1) {
      current.next = l1;
      l1 = l1.next;
    } else if (l2) {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next as ListNode;
  }

  return resultList;
};
