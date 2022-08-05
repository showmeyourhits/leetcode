export type Param = string;
export type Result = number;

export function longestSubstringWithoutRepeatingCharacters(str: Param): Result {
  if (str.length <= 1) {
    return str.length;
  } 

  let longestSubstringLength = 0;
  const letterSet = new Set<string>();
  let leftPointer = 0;
  let rightPointer = 0;

  while ((str.length - leftPointer) >= longestSubstringLength) {
    const letter = str[rightPointer];

    if (letterSet.has(letter)) {
      const leftLetter = str[leftPointer];
      leftPointer++;

      letterSet.delete(leftLetter);
    } else {
      const substring = str.slice(leftPointer, rightPointer + 1);

      if (longestSubstringLength < substring.length) {
        longestSubstringLength = substring.length;
      }

      letterSet.add(letter);

      rightPointer++;
    }
  }


  return longestSubstringLength;
};
