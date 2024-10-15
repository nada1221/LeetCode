/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 기존 내 풀이 
    // for(let i=0;i<nums.length;i++){
    //     if(nums[i]==nums[i+1]){
    //         nums.splice(i,1)
    //         i--
    //     }
    // }
    
    //더 나은 풀이
    if(nums.length == 1){
        return 1
    }

    let cur = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[cur]){
            nums[cur+1] = nums[i];
            cur++;
        }
    }

    return cur + 1;
    
    // 다른 사람의 방식은 배열을 한 번만 순회하면서 중복 요소를 처리하기 때문에 
    // 시간 복잡도가 O(n)으로, 당신의 방법보다 훨씬 빠르고 효율적입니다. 
    // splice는 배열을 재정렬하는 데 시간이 걸리므로, 
    // 가능하면 사용을 피하는 것이 좋습니다.
};