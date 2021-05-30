type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

class Heap<T = number>{
    private __heap: T[];
    private __comparator: Comparator<T>;

    constructor(comparator: Comparator<T>, options: { initial?: T[] } = {}) {
        this.__comparator = comparator;
        this.__heap = [];

        options.initial?.forEach(this.insert);
    }

    public insert(value: T): this {
        
        return this;
    };

    public replace(value: T): this {
        return this;
    }

    get length() {
        return this.__heap.length;
    }
}

/**
t * Given number of washers in a laundry, and a line of people, of which is known their laundry time.
 * Given that, return the total washing time.
 * Every person in the line takes first free mashine;
 * @param {{washers: number; people: number[]}} param0
 */
export const laundry = function({ washers, people }) {
    const washer = new Array(washers).fill(0);

    /**
     * @param {number[]} arr 
     */
    function getMinIndex(arr) {
        let minIndex = 0;
        let i = 0;

        while(i < arr.length) {
            if (arr[minIndex] > arr[i]) {
                minIndex = i;
            }
            i++;
        }

        return minIndex;
    }

    for (let i = 0; i < people.length; i++) {
        const washingTime = people[i];
        const minIndex = getMinIndex(washer);

        washer[minIndex] = washer[minIndex] + washingTime;
    }

    return Math.max(...washer);
};
