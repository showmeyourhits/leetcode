export class LRUCache {
    private capacity: number;
    public cache: Map<number, number>;
    
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        const res = this.cache.get(key);

        if (res !== undefined) {
            this.cache.delete(key);
            this.cache.set(key, res);

            return res;
        }

        return -1;
    }

    put(key: number, value: number): void {
        const res = this.cache.get(key);

        if (res !== undefined) {
            this.cache.delete(key);
        }

        if (this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }

        this.cache.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */