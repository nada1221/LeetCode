/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    for (let i=0;i<nums.length;i++){
        let rNum = nums[i]*nums[i]
        result.push(rNum)
    }
    return result.sort((a,b)=>a-b)
};