

let txt = "evolved in the 1940s when the demand for cheap housing rocketed after World War";


function myFunction(txt) {
    let arr=[];
    arr = txt.split("");
    let arrCleaned=[];
    for (let i = 0; i < arr.length; i++) {

       if(arr[i] !=" "){
        arrCleaned.push(arr[i])
       }
        
    }
console.log(arrCleaned)


   for (let i = 0; i < arrCleaned.length; i++) {
      
       if (i % 2 != 0) {
     
        
        arrCleaned.splice(i,1,arrCleaned[i].toUpperCase());
        console.log(i+"  "+arrCleaned[i])
    }
   }
  
}

myFunction(txt)
