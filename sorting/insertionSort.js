//array as[6,0,7,4,3]---[0,6,7,4,3]---[0,4,6,7,3]---[0,3,4,6,7]

function  insertionSort(arr){

      var i,j,temp;

      for(i=1;i<arr.length;i++){
      	  temp=arr[i];//

          for(j=i-1;j>=0 && arr[j]>temp;j--){

                 arr[j+1]=arr[j];
            }     //we are doing j-- to compare it witha ll the elements before that;from right to left
                
            arr[j+1]=temp;
         	  
         	  	  
              
          }
         
          return arr;

      }

     

console.log(insertionSort([3,1,1,1,1,1,12,8998,78]));

