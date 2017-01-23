// function factorial(num){
//     if (num < 0) {
//         return -1;
//     } else if (num === 0) {
//         return 1;
//     } else {
//         return (num * factorial(num - 1));
//     }
//   }
function permAlone(str) {
  var arr = str.split('');
  var count = 0;
  perm = [];
  function swap(a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  function generate(n){
    var re =/([a-z])\1+/; //matches letter + letters after that are the same
    
    if(n === 1 && !re.test(arr.join(''))){
      count++;
      perm.push(arr.join(''));
    } else{
      for(var i=0; i !== n; i++){
        generate(n - 1);
        swap(n % 2 ? 0 : i, n-1);
      }
    }
  }
  generate(arr.length);
  return perm;
//   return perm = str.map(function(b,index){
//     if(index === str.length-1){
//       return b = str[0];
//     }
//     return b = str[index+1];
//   });
  

//   return factorial(str.length);
  
  
//   for(i=1;i<str.length;i++){
//     if (str[i] === str[i-1]){
//        str.splice(i-1,i);       
//       }
//   }
//   return str;
}

permAlone('aaabb');
