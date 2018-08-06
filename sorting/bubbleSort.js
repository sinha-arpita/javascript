//using to for loops ;first for loop for the number of passes,which will always be less than no of elements in the array.
//second for loop will be responsible to check the numbers and if small then swap.[3,0,1,9,5]
//first pass[0,3,1,9,5]-[0,1,3,9,5]-[0,1,3,5,9]
function bubbleSort(arr){
    var i,j,swap,temp;

    for(i=0;i<arr.length-1;i++){

        swap=0;

         for(j=0;j<(arr.length-i)-1;j++){

            if(arr[j]>arr[j+1]){
              temp=arr[j];
              arr[j]=arr[j+1];
              arr[j+1]=temp;
              swap++;


            }
             
         }
         if(swap==0){
                 break;
         }


    }

   return arr;
}

console.log(bubbleSort([9,7,1,0,3]));