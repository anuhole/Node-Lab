async function hello(){
    return "Hello User!"
}

var hello1 = async function(){
    return "Hello User!"
}

var hello2 = async ()=> "Hello fat Arrow!"


//console.log(hello1())

//console.log(hello())
//console.log(hello2())

hello()
    .then(data => console.log(data))