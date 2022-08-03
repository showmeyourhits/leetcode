export type Param = string;
export type Result = number;

const ROMAN_TO_INTEGER_MAP = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000,
  '': Infinity,
}

export function romanToInteger(romanNumber: Param): Result {
  let res = 0;

  let prevLetter = '';

  for (const letter of romanNumber) {
    const number = ROMAN_TO_INTEGER_MAP[letter];
    const prevNumber = ROMAN_TO_INTEGER_MAP[prevLetter];

    res += number;

    if (prevNumber < number) {
      // Subtract previous number from result, because we must not add it to result, if current is larger
      // and subtract previos number from current number because we should.
      res = res - prevNumber * 2;
    }

    prevLetter = letter;
  }

  return res;
};
