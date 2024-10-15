/**
 * @param {number[]} arr
 * @return {boolean}
 */
    // i != j
    // 0 <= i, j < arr.length
    // arr[i] == 2 * arr[j]

var checkIfExist = function(arr) {
    let result  = false
    let checkJ = new Set()

    for (let i = 0; i<arr.length;i++){
        if(checkJ.has(arr[i]/2)|| checkJ.has(arr[i]*2)){
            result = true
            return result
        }
        checkJ.add(arr[i]);
    }
                return result

  
};