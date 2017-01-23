
function makeFriendlyDates(arr) {
  start = arguments[0][0].split('-');
  end = arguments[0][1].split('-');
  months = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
  cardinal = 'stndrdth';
  
  monthStart = months[parseInt(start[1])] + " ";
  monthEnd = months[parseInt(end[1])] + " ";
  
  dayStart = parseInt(start[2]);
  dayEnd =  parseInt(end[2]);
  
function cardinalizerS(day){
    switch (day){
      case 1:
      case 21:
      case 31: 
        dayStart = day +'st';
        break;
      case 2:
      case 22:
        dayStart = day +'nd';
        break;
      case 3:
      case 23:
        dayStart = day +'rd';
        break;
      default:
        dayStart =day + 'th';
    }
  } 
  function cardinalizerE(day){
    switch (day){
      case 1:
      case 21:
      case 31: 
        dayEnd = day +'st';
        break;
      case 2:
      case 22:
        dayEnd = day +'nd';
        break;
      case 3:
      case 23:
        dayEnd = day +'rd';
        break;
      default:
        dayEnd =day + 'th';
    }
  } 
  cardinalizerS(dayStart);
  cardinalizerE(dayEnd);
  
  yearStart = ", "+ parseInt(start[0]);
  yearEnd = ", "+ parseInt(end[0]);
  

if((end[0]-start[0]<1)||(end[0]-start[0]===1 && end[1] < start[1])||(end[0]-start[0]===1 && end[1] === start[1] && end[2]<start[2])){
   yearEnd = '';
 
   if(yearStart ===  ", "+2016){
     yearStart = '';
     if(monthStart === monthEnd){
       monthEnd = '';
       if(dayStart === dayEnd){
         dayEnd = '';
       }
     }
   }
} 
 
// if(monthStart === monthEnd && yearStart == yearEnd){
//     monthEnd=''; yearStart = ''; yearEnd = '';
//   }
  
  result = [];
  startDate = monthStart + dayStart + yearStart;
  endDate = monthEnd + dayEnd + yearEnd;
  
  if(startDate === endDate + yearStart){
    result.push(startDate);
  } else {
    result.push(startDate,endDate);
  }
  return result;
}

makeFriendlyDates(["2018-01-13", "2018-01-13"]);

//   for(i = 0; i===1;i++){
//     if(re1.test(dayStart)){
//       dStart = dayStart+"st";
//       break;
//     } if(re2.test(dayStart)){
//       dStart = dayStart+"nd";
//     } if(re3.test(dayStart)){
//       dStart = dayStart+"rd";
//     } else{
//       dStart = dayStart+"th";
//     }
//     i++;
//   }
//     if(re1.test(dayEnd)){
//       dEnd = dayEnd+"st";
//     } if(re2.test(dayEnd)){
//       dEnd = dayEnd+"nd";
//     } if(re3.test(dayEnd)){
//       dEnd = dayEnd+"rd";
//     } else{
//       dEnd = dayEnd+"th";
//     }