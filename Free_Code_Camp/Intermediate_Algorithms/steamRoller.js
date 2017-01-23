
function steamrollArray(arr) {
  // I'm a steamroller, baby
   for(i=0;i<arr.length;i++){  
     if(arr[i].length === 0){
        arr.splice(i,1);
      }
   }
  
  for(i=0;i<arr.length;i++){  
    if (Array.isArray(arr[i])){
      checkArray(arr[i]);
       arr[i] = arr[i][0];
    }
  }
  
  function checkArray(x){    
      if (x.length === 1 ){
        return x;
      } else{
        for(j=1;j<arr[i].length;j++){
          if(Array.isArray(x[j]) === true){
            checkArray(x[j]);
            return arr.push(x[j][0]);            
          }
        }  
      }
      checkArray(x);      
  }
  
  
  
//    arr.reduce(function(a,b){
//      if(Array.isArray(b))
//      a.push(b);
   
//    });
   return arr;
}

console.log(JSON.stringify(

  steamrollArray([[["a"]], [["b"]]])
  
)); //This doesn't work, only flattens one level


//steamrollArray([1, [], [3, [[4]]]]); //This works
