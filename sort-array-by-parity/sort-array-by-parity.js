/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    
    // 짝수와 홀수를 분리
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    
    // 짝수 배열과 홀수 배열 병합
    return [...even, ...odd];
};