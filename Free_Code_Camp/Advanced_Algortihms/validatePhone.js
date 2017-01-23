function telephoneCheck(str) {
  //doesn't work for unmatched parenthesis
//    regex = /^(1\s?)?(\(?\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/g;
//    return regex.test(str);
  
//   return regex.test(str);
  //match $1 if followed by 3 digits (all cases), not follwed by 1 
//   regex = /(\d)(?=(\d\d\d)+(?!\d))/g;
  
//   return regex.test(str);
// }

  formats=["555-555-5555",
           "(555)555-5555",
           "(555) 555-5555",
           "555 555 5555",
           "5555555555",
           "1 555 555 5555",
           "1 555-555-5555",
           "1 (555) 555-5555",
           "1(555)555-5555"
          ];
//   if (str[0] == 1){
//     str = str.replace(/\d/g, '5');
//     str = 1 + str.slice(1, str.length); 
//     if (formats.includes(str)){
//       return true;
//     }
//   } else {
//     str = str.replace(/\d/g, '5');
//     if (formats.includes(str)){
//       return true;
//     }
//   }  
//   return false;
// }
   if (str[0] == 1){
     str = 1 + str.slice(1,str.length).replace(/\d/g, '5');
   } else{
     str = str.replace(/\d/g, '5');
   }
  return formats.includes(str);
}
console.log(telephoneCheck("1 456 789 4444"));