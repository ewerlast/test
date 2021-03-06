let a = {
    name: "Slavik",
    age: 34,

}
let b = {
    email: "Gleb",
    age: 34,
}
function run(ob1, ob2) {
    
    if (Object.keys(ob1).length !== Object.keys(ob2).length) {
        console.log("FAlse");
    } else {
        for (let key in ob1) {
           if(ob1[key]!==ob2[key]){
               console.log("false")
               return false
           }else{
               console.log("true")
           }
        }
    }
}
run(a, b);
