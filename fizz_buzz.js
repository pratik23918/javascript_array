var a=[];
var count=1;
function fizzbuzz(){
a.push(count);
count++;
console.log(a);
}
// program for fibonacci numbers
var arr=[];
if(n==1){
   arr=[0]; 
}
else if(n==1){
    arr=[0,1];
}
else{
   arr=[0,1];
   for(var i=2;i<n;i++){
       arr.push(arr[arr.length-2]+arr[arr.length-1]);
   }
}
return arr;