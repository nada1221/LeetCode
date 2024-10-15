/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let checkUp = true
    let checkDowon = false
    let checkMountain = true
    
    if(arr.length === 1 ){
        return false
    }
    if(arr.length === 2&&arr[0]>arr[1]){
        return false
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr.length !== i+1 &&checkUp && checkMountain && arr[i]>arr[i+1]){ 
            if(i==0){
               return false
               }
            checkUp = false
            checkDowon = true
        }else if(arr.length !== i+1 &&!checkUp && checkMountain && arr[i] < arr[i+1]){
            return false
            
        }else if(arr.length !== i+1 && arr[i] == arr[i+1]){
            return false
        }
    }
    if(checkUp&&checkMountain){
        return false
    }else return checkMountain
};