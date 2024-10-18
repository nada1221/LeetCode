/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length;
    let maxFromRight = -1;
    
    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = maxFromRight;
        if (current > maxFromRight) {
            maxFromRight = current;
        }
    }
    
    return arr;
    
};