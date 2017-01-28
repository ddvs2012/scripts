
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var name = 0;
  var avgAlt = 0;
  
  var result = [];
  
  for(i=0;i<arr.length; i++){   
    name = arr[i].name;
    avgAlt = arr[i].avgAlt;
    
    var orbitalPeriod = Math.round((2*Math.PI)*Math.pow((Math.pow(avgAlt+earthRadius,3))/GM,0.5));
    
    result.push({name, orbitalPeriod});  
  }
 
 
  return result;
//   Math.round(T)
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
