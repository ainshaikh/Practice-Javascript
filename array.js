// const arr = [1,5,0,0,3,0,8,0,9];
// arr.sort();
// arr.reverse();
// console.log(arr);


// // function placeZerosAtEnd(arr) {
// //     return arr.sort(compareForSort);
// // }
// // function compareForSort(first, second) {
// //     return first == 0 ? 1 : 0;
// // }
// // placeZerosAtEnd([9,0,9,1,0,2,0,1,1,0,3,0,1,9,9,0,0,0,0,0]);

// const str = "abbdcad"
// ans = bdca
// str.sort();
// console.log(str);

// let str = "abbdcad"   // return longest substrings
// let ans = str.slice(2,3,4,5);
// console.log(ans);



function longestUniqueSubsttr(str)
{
    var n = str.length();
      
    // Result
    var res = 0; 
      
    for(var i = 0; i < n; i++)
        for(var j = i; j < n; j++)
            if (areDistinct(str, i, j))
                res = Math.max(res, j - i + 1);
                  
    return res;
    console.log(res);
}

