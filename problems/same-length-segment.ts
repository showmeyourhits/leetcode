export type Param = number[];
export type Result = number[];

export function sameLengthSegment(param: Param) {
    const result = [];

    for (let i = 0, groupStartIdx = 0; i <= param.length; i++) {
        const groupStart = param[groupStartIdx];
        const current = param[i];

        if ((groupStart % 2 !== current % 2) || i === param.length) {
            const count = i - groupStartIdx;
            groupStartIdx = i;

            result.push(...new Array(count).fill(count));
        }
    }

    return result;
};
