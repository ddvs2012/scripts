function truthCheck(collection, pre) {
  // Is everyone being true?
  for(i=0;i<collection.length;i++){
    if(collection[i].hasOwnProperty(pre) === false || !!(collection[i][pre]) == false){//!! double bang returns truth(y) or false(y)
      return false;
    }    
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
