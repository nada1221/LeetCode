/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    for(let i=0;i<nums.length;i++){
                console.log(i)
        if(nums[0] == val){
            nums.shift()
            i--
        }else{
            nums.push(nums[0])
            nums.shift()
        }
    }
  
};