/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    if(nums.length == 1 ){
        return nums
    }
    let index = 0
    let count = 0
    
    for(i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums.splice(index,1,nums[i])
            index++
        }else{
            count++
        }
    }
      for(i=1; i<=count; i++){
            nums.splice(nums.length-i,1,0)
    }


};