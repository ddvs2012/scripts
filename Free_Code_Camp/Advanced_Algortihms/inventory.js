//1st attempt
// function reverseOrder(arr){
//   for(i=0;i<arr.length;i++){
//       arr[i].reverse();  
//   }  
// }
// function revSortRev(arr){
//   reverseOrder(arr);
//   arr.sort();
//   reverseOrder(arr);
//  }


// function updateInventory(arr1, arr2) {
//     curItems = [];
//     newItems = [];
    
//     if(arr1.length<1){
//       arr1=arr2;
//       revSortRev(arr1);
//       return arr1;
//     } 
//     curItems = arr1.reduce(function(a,b){
//       return a.concat(b[1]);
//     },[]);
    
//   //
//     for(i=0;i<arr1.length;i++){
//       for(j=0;j<arr2.length;j++){
//         if(arr1[i][1] === arr2[j][1]){
//            arr1[i][0] += arr2[j][0];
//         } 
//         if (curItems.indexOf(arr2[j][1]) === -1){
//           curItems.push(arr2[j][1]);
//           newItems.push(arr2[j]);
//         }
//       }
//     }
  
//     arr1 = arr1.concat(newItems);
    
//     revSortRev(arr1);
//     return arr1;
// }
function reverseOrder(arr){
  for(i=0;i<arr.length;i++){
      arr[i].reverse();  
  }  
}
function updateInventory(arr1, arr2) {
  inv = arr1.concat(arr2).reduce(function(a,b){
     if(a[b[1]]){ // assigns [b[1]] to a:executes if not falsy : 1st iteration: a['bowlingball']
       a[b[1]] += b[0]; 
     } 
     else{
       a[b[1]]=b[0];//1st iteration: a['bowlingball'] = 21 
     }
    return a;    
  },{});
  
  updated = Object.keys(inv).map(function(b, index){
    return [b, Object.values(inv)[index]];
  }).sort();
  reverseOrder(updated);
  
  return console.log(JSON.stringify(updated));
}
// Example inventory lists
var curInv = 
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
;

var newInv = 
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]
;


updateInventory(curInv, newInv);
