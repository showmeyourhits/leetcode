
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

export function arrToListNode(arr: number[]): ListNode {
  const newListNode: ListNode = {
      val: Infinity,
      next: null,
  };
  let current = newListNode;

  for (let i = 0; i < arr.length; i++) {
      current.val = arr[i];
      current.next = i + 1 == arr.length ? null : {
          val: Infinity,
          next: null
      }
      current = current.next;
  }
  return newListNode;
}

export function listNodeToArr(listNode: ListNode | null): number[] {
  if (!listNode) return [];

  const res: number[] = [];

  while (listNode) {
      res.push(listNode.val);

      listNode = listNode.next;
  }


  return res;
}