
function checkCashRegister(price, cash, cid) {
  cid = cid.reverse();
  cval = [100.00,20.00,10.00,5.00,1.00,0.25,0.1,0.05,0.01];
  result = [];
  var owed;
  owed = cash - price;
  
  cidTot = cid.reduce(function(a,b){
    return a+b[1];
  },0.0);
  

  if(cidTot < owed){
    return "Insufficient Funds";
  } else if (cidTot === owed){
    return "Closed";
  }
     
  for(i=0;i<cid.length;i++){
    if(owed >= cval[i]){
      amount = 0.0;
      while (owed >= cval[i] && cval[i] <= cid[i][1]){     
        owed -= cval[i];
        owed = Math.round(owed*100)/100;
        cid[i][1] -= cval[i];
        amount += cval[i];
      }
      result.push([cid[i][0], amount]);
    }    
  }
  
  return result.length>0 && owed === 0 ? result : "Insufficient Funds";
}

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// cval =[
//      {name: 'ONE HUNDRED', value: 100.00},
//      {name:'TWENTY', value:20.00,},
//      {name:'TEN', value:10.00,},
//      {name:'FIVE',value:5.00,},
//      {name:'ONE', value:1.00,},
//      {name:'QUARTER',value:0.25,},
//      {name:'DIME',value:0.1,},
//      {name:'NICKEL',value:0.05,},
//      {name:'PENNY',value:0.01}
//     ];
// function checkCashRegister(price, cash, cid) {
//   var change = cash - price;
  
//   var cidTot = cid.reduce(function(a,b){
//     return a+b[1];
//   },0.0);
  
  
//   if (cidTot<change){
//     return ('Insufficent Funds');
//   } else if (cidTot === change){
//     return ('Closed');
//   }
  
//   cid = cid.reverse();
  
//   var result = cval.reduce(function(a,b,index){
     
//      if(change>=b.value){
//        var count = 0.0;
//       while(change >= b.value && cid[index][1] >= b.value){
//         count += b.value;
//         change -= b.value;       
//         change = Math.round(change*100)/100;
//         cid[index][1]-=b.value;        
//       }
//        a.push([b.name, count]);
//        return a;
//     } else {
//       return a;
//     }
    
//   },[]);
//   return result;
// }