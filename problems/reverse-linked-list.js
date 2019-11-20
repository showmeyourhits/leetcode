/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseLinkedList = function(head) {
    if (!head) return head;
    
    let curr, buffer, prev;
    curr = head;
    prev = null;
    buffer = curr.next;
    
    while (buffer) {
        curr.next = prev;
        prev = curr;
        curr = buffer;
        buffer = curr.next;
    }
    curr.next = prev;

    // head.next = null;
    // console.log(curr);
    return curr;
};

module.exports = reverseLinkedList;
