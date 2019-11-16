/**
 * Creates linked list from array of any items
 * @param {any[]} arr
 */
const createLinkedList = (arr) => {
    let node = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        let newNode = {
            val: arr[i],
            next: node
        };
        node = newNode;
    }

    return node;
}

module.exports = {
    createLinkedList
}