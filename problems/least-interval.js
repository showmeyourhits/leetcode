/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = tasks.reduce((m, task) => {
        if (m.has(task)) {
            m.set(task, m.get(task) + 1);
        } else {
            m.set(task, 1);
        }
        return m;
    }, new Map())
    return map.get(tasks[0]);
};

module.exports = leastInterval;