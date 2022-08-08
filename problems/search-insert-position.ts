export type Param = {
  nums: number[],
  target: number,
};
export type Result = any;

export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  
  
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = nums[mid];
      
      if (midValue < target) {
          left = mid + 1; 
      } else if (midValue > target) {
          right = mid - 1;
      } else {
          return mid;
      }
  }
  
  return left > right ? left : right;
};