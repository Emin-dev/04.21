

// let txt = [" et praesentium sunt, optio dolor velit nobis molestiae at iste deserunt minima?"];


// function lorem(){
//     console.log(txt)
//     let split=[]
//     split = txt.split("");
//     console.log(split)
// }

// lorem()




function myFunction() {
    let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum aliquid, molestias reprehenderit a consequatur recusandae quae delectus";
    let res = txt.split("");
    let arr = [];
    let count = 0;
    res.forEach(e => {
        if (e == "a") {
            arr.push(e)
            count++
        }
    });
    console.log(arr)
    console.log(count)
}

myFunction()