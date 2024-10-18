/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
//     let sortNums = nums.sort((a,b)=>a-b)
    
//     let result = []
//     let count = 0

//     for(i=0;i<sortNums.length;i++){
//         count++
//         if(count !== sortNums[i]){
//             result.push(count)
//             if(count>sortNums[i]){
//                 count--
//             }
//         }
//     }

//     return result
    
        let result = [];

    // 현재 숫자를 인덱스로 사용해 nums 배열의 해당 인덱스를 음수로 변환
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    console.log(nums)
    
    // 음수가 아닌 인덱스는 그 인덱스+1에 해당하는 숫자가 배열에 없다는 의미
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};