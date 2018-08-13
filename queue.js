var Stack =function(){
     
         this.arr=[];
         this.top=-1;
         
         this.push=function(value){

             if(this.top===-1){
                   this.top++;
              }
             this.arr[this.top]=value;
             this.top++;
         }

         this.pop=function(){
             // this.store= "";

             if(this.top===-1){
                 return undefined;
             }

             this.top -= 1;
             this.store=this.arr[this.top];
             delete this.arr[this.top];

             console.log(this.store)
             return  this.store;

         }        	     
      


}

  var stack1= new Stack()
 
 stack1.push(7);
 stack1.push(6);
 stack1.push(5);
 stack1.push(12);
 console.log(stack1);
 console.log("Pop", stack1.pop());
 console.log("Pop", stack1.pop());
 console.log("Pop", stack1.pop());
 console.log("Pop", stack1.pop());
 console.log("Pop", stack1.pop());
 console.log("Pop", stack1.pop());
