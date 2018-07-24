/* Write a function that takes array of input and a query integer as input parameters, and returns
 the index of query integer if it is found in the array, else returns -1.
 */ 
 function checkInt(userArray,num){
    for(var i=0;i<userArray.length;i++){
        if(userArray[i] === num){
  	       return i;
        } 
    }
    return -1
 }

 /*
  * Write a function that takes an integer array and returns the maximum integer in that array
   */

//console.log(checkInt([10,23,12,-10,24],12));



function findMax (intArray) {
    
    if (intArray.length == 0) {
    	return -10000
    }
    
    var max = intArray[0]

    for(var i=1; i<intArray.length;i++) {
        if(max<intArray[i]){
	        max=intArray[i];
        }
    }
    return max
}

console.log(findMax([]))

var num=[27,9,8,4,7,3,12];
var min=100000000;
var minIndex=-1;
for(var i=0;i<num.length;i++){
	if(min>num[i]){
       min=num[i];
       minIndex=i;



	}
}

console.log(min);
console.log(minIndex);
var first=num[0];
console.log (first);
num[minIndex]=num[0];
num[0]=min;
console.log(num)


//minIndex=num[0];
//console.log(num);
//var minNumber==min;

//bubble sort
var arrayGiven=[9,5,0,4,2];
var temp,swap,i,j;
for(i=0;i<(arrayGiven.length-1);i++){

   for(j=0,j<(arrayGiven.length-1)-1;j++{


   }


}














