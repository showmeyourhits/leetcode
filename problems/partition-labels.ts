export type Param = string;
export type Result = number[];

export function partitionLabels(param: Param): Result {
    const letters: Record<string, [number, number]> = {}

    for (let i = 0; i < param.length; i++) {
        const letter = param[i];

        if (letters[letter]) {
            letters[letter][1] = i;
        } else {
            letters[letter] = [i, i];
        }
    }

    const res: number[] = [];

    const borders = {
        start: 0,
        end: 0,
    };

    for (let i = 0; i < param.length; i++) {
        borders.end = Math.max(borders.end, letters[param[i]][1]);

        if (i === borders.end) {
            res.push(borders.end - borders.start + 1);
            borders.start = i + 1;
        }
    }

    return res;
};
