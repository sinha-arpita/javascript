

function findMax(arr){

    var max,i;
    var maxIndex=-1;

    max=-10000000;//taking a very high number as max and comparing it with each element of array and if 
    //number is greater than assumed max then that number becomes max.
    for(i=0;i<arr.length;i++){
        
        if(max<arr[i]){
        	max=arr[i];
        	maxIndex=i;
        }
    }
    return(maxIndex);
}

///* Function to move the given element to last */
//
//
//
//SELECTION SORTING

//I will be using  two for loops , outer for loop will select the index and inner for loop will search for minimum.
//the outer for loop will go till array-1.(3,1,4,6,7)

   var i,j,temp,min,arr,minIndex;
function selSort(arr){

    for(i=0;i<arr.length-1;i++){
	    min=arr[i];
	    minIndex=i
	    for(j=i+1;j<arr.length;j++){
            if(arr[j]<min){
        	   min=arr[j];
        	   minIndex=j;
            }
	    }

       temp=arr[i];
       arr[i]= arr[minIndex];
       arr[minIndex]=temp;
  } 
  return arr;
}

x = 10;
y = 20;
x = x + y
y = x - y
x = x - y
console.log(x,y);


console.log(selSort([3,9,1,7,4]));
