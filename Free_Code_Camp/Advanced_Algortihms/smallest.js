function smallest(arr){
 	return arr.reduce(function(a,b){
  		if(b<a){
  		 	a=b;
  		}  	return a;
 	},0);
}

function largest(arr){
 	return arr.reduce(function(a,b){
  		if(b>a){
  		 	a=b;
  		}  	return a;
 	},0);
}