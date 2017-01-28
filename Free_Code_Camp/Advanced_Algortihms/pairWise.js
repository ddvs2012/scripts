function pairwise(arr, arg) {
  indexArr = [];
console.time('test');
  var test = arr.reduce(function(a,b,index,array){
    for (x = index + 1; x<array.length; x++){
      if(array[index] + array[x] === arg){
        a += index + x;
        array[index] = array[x] = NaN;
      }
    }
    return a;
  },0)
console.timeEnd('test');
  return test;
  //chal. requires pairs only, this works with any number of elements
//   for(i=0;i<arr.length;i++){
//     if(arg - arr[i] >= 0){
//       arg -= arr[i];
//       indexArr.push(i);
//       delete arr[i];
//     }
//     if(arg === 0){
//       return arr;
//     }
//   }
  //first attempt, super inefficient 
// console.time('test');
//   if(arr.length === 0){
//     return 0;
//   }
  
//   for (cur=0;cur<arr.length;cur++){
//     for (i=0;i<arr.length;i++){
//       if(arr[cur] === arr[i]){
//         i++;
//       }
//       if (arr[cur] + arr[i] === arg){
//         indexArr.push(cur+i);
//         delete arr[cur];
//         delete arr[i];
//       }
//     }
//   }
//   console.timeEnd('test');
//   return indexArr.reduce(function (a,b){
//     return a + b;
//   });
  
}
test=[]
for(i=0;i<=100000;i++){
  test.push(i);
}

console.log(pairwise(test, 100));
