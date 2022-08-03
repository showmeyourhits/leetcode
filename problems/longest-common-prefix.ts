export type Param = string[];
export type Result = string;

export function longestCommonPrefix(strs: Param) {
  if (!strs.length) { return ''; }

  if (strs.length === 1) { return strs[0] };

  const word = strs[0];

  for (let l = 0; l < word.length; l++) {
    const letter = word[l];

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][l] !== letter) {
        return word.slice(0, l);
      }
    }
  }

  return word;
};
