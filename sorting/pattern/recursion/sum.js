function sumOfNum(x){
    
    
    if(x==1){
	   return 1;
    }    


    var sum=x+sumOfNum(x-1);
    return sum;
  }

console.log(sumOfNum(100
	));