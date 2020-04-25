

let txt = "evolved in the 1940s when the demand for cheap housing rocketed after World War II. Economies of scale meant that large numbers of identical homes could be built faster and more cheaply to fulfil the increased demand. Developers purchased a dozen or more adjacent lots and conducted the building construction as an assembly-line process. This type of development is often criticised by city planners and architects because it overlooks the concept of community building, instead creating a homogeneous residential neighborhood with no local employment, commerce, services, or attractions.";


function myFunction(txt) {
    let arr = txt.split("");
    let countA = 0;
    let countB = 0;
    console.log(arr)
    arr.forEach(e => {
        if (e == "a") {
            countA++
        }
        if (e == "b") {
            countB++
        }
    });
  
  return Math.round(countA / countB) ;
}






console.log(`a b den ${myFunction(txt)} defe coxdu`)