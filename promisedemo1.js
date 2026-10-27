let promise =new Promise(function(resolve,reject){
    // executer code 
    let a=10, b=20;
    if(a < b){
        resolve("All is Well")
    } 
    else{
         reject(new Error("Incorrect"))
    }
})
console.log(promise)

//consume Promise

// promise.then(
//     (data)=>{console.log(data)},
//     (err)=>{console.log(err.message)}

// )
promise
    .then(data => console.log(data))
    .catch(err =>console.log(err.message))
    .finally( ()=>{console.log("Done")})