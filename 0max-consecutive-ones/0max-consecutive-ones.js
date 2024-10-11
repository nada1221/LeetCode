/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let lagestOne = 0
    let currentOne = 0
    
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i]===1){
            currentOne ++
        }else if(nums[i]===0){
            if(lagestOne <= currentOne){
                lagestOne = currentOne 
            }
            currentOne = 0
        }
    }
    
    if(lagestOne < currentOne){
         lagestOne = currentOne 
    }
    return lagestOne
    
};