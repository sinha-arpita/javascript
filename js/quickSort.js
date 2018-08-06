
function partition(arr,start,end){

       
    var pivot,partitionIndex,i,temp;
    pivot=arr[end];// last or end element of the array has been chosen as pivot
    partitionIndex=start;//initially we put partitionIndex as satrt that is 0;

    for(i=start;i<end;i++){
        if(arr[i]<=pivot){//here we are comparing each element of array with pivotand if it is lessthan or equal to pivot
                     // then we are swapping that number with partition index number,and after swapping increase the partitionIndex.

                     //swap(arr[i],arr[partitionIndex])
            temp=arr[i];
            arr[i]=arr[partitionIndex];
            arr[partitionIndex]=temp;
            partitionIndex++;

        }
    }

    //now after the execution of the for loop we swap the end means pivot with parttition index.
                     //swap(arr[partitionIndex],arr[end])

    temp=arr[partitionIndex];
    arr[partitionIndex]=arr[end];
    arr[end]=temp;

    console.log(a);
    console.log("Start/End", start, end);
    console.log("partitionIndex = ", partitionIndex)

    console.log("--------------------------------------")
    return partitionIndex;
}

        

function quickSort(arr,start,end){
                   
     if(start<end){

        partitionIndex=partition(arr,start,end);//calling partition function

        quickSort(arr,start,partitionIndex-1);
        quickSort(arr,partitionIndex+1,end);
     }            
}

a = [7,2,1,6,8,5,3,4]
quickSort(a, 0, 7);
console.log(a)



          


