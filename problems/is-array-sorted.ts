export type Param = number[];
export type Result = boolean;

export function isArraySorted(param: Param): Result {
    let isAsc = true;
    let isDesc = true;

    for(let i = 0; i < param.length - 1; i++) {
        if (param[i] < param[i+1]) {
            isDesc = false
        } else if (param[i] > param[i+1]) {
            isAsc = false
        }
    }

    return isAsc || isDesc;
};
