function diffArray(arr1, arr2) {
    joinArr = arr1.concat(arr2);
    return joinArr.filter(function(value,index,array){
       if(array.slice(index+1).indexOf(value)===-1 && array.slice(0,index).indexOf(value) === -1){
         return value;
       }
     });
}
  //*broken* Only removing first duplicate of each subarray
// function discardDupe(arr){
//   arr.reduce(function(a,b){
//     for (i=0;i<arr.length;i++){
//       if(b.indexOf(b[i]) !== b.lastIndexOf(b[i])){
//         b.splice(i,i+1);       
//       }
//       return a;
//     }
    
//   },[]);  
// }
function removeDupes(arr){
  var result = [];
  arr.forEach(function(value){
    if(result.indexOf(value)<0){
      result.push(value);
    }
  });
  return result;//iterate over each element, run callback, checks to see if value exists in array,if not then pushes into it.
}
function sym(args) {
    args = Array.prototype.slice.call(arguments);
  
   return args.reduce(function(a,b){
    a = removeDupes(a);
    b = removeDupes(b);
    a = diffArray(a,b);
    return a;
  },[]);
//   arr=[];
//   joined = [];

//   for (i=0;i<arguments.length;i++){
//     joined = joined.concat(arguments[i]);
//   }
  
// //     joined = arguments[0].concat(arguments[1]);
  

//   joined.reduce(function(a,b){
//     if(joined.indexOf(b) === joined.lastIndexOf(b)){
//       arr.push(b);
//     }
      
//   },[]);
//   return arr;

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3,5,5,4]);
