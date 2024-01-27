// setInterval(() => {
//    console.log("Hello"); 
// }, 3000);
// setInterval(() => {
//     console.log("Hi");
// }, 4000);
// setTimeout(() => {
//     console.log("Hi");
// }, 1000);
// setTimeout(() => {
//     console.log("Good");
// }, 2000);
// setTimeout(() => {
//     console.log("Morning");
// }, 3000);
// setTimeout(() => {
//     console.log("i");
// }, 4000);
// setTimeout(() => {
//     console.log("am");
// },5000);
// callback
// var btn =document.getElementById("btn1")
// btn.addEventListener("click",()=>{
//     alert ('Buttton clicked')
// }
// function addition(a,b) {
//     var result=a+b;

//     return result;
// }
// function display(val) {
//    document.getElementById("textc").innerText=`The sum is ${val}`
// }
// var result=addition(15,20);
// display(result)
// normal function
// synchronous
// function mul(a,b) {
//     var result=a*b;
//     return result;
// }
// function display(val) {
//    document.getElementById("textc").innerText=`The product is ${val}`
// }
// var result=mul(10,20);
// display(result)

// callback function
// function add1(a,b,callback) {
//     var sum=a+b;
//     callback(sum)
// }
// function display (val) {
//     document.getElementById("textc").innerText=`The sum is ${val}`
// }
// add1(10,45,display)

// function add1(a,b){
//     return promise= new Promise((resolve,reject)=>{
//         var sum=a+b
//        if(sum>10){
//         resolve(sum)
//        }
//        else{
//         reject("Sum is not greater than 10")
//        }
//     })
// }
    // console.log(promise);
    // promise.then((val)=>{
    //     document.getElementById("textc").innerText=`the sum is ${val}`
    // })
    // .catch((err)=>{
    //     document.getElementById("textc").innerText=`The error message is ${err}`
    // })
                                                                                                                                       

// add1(2,3) 

// promise.then((val)=>{
//     document.getElementById("textc").innerText=`the sum is ${val}`
// })
//     .catch((err)=>{
//         document.getElementById("textc").innerText=`The error message is ${err}`
//     })
//     // sub
//     function sub(a,b){
//         let promise1= new Promise((resolve,reject)=>{
//             var sum=a-b
//            if(sum>10){
//             resolve(sum)
//            }
//            else{
//             reject("Difference is not greater than 10")
//            }
//         })
    
   
// promise1.then((val)=>{
//     document.getElementById("textd").innerText=`The difference is ${val}`
// })
//     .catch((err)=>{
//         document.getElementById("textd").innerText=`The error message is ${err}`
//     })
//     }
//     sub(15,2)
// // mul
//     function mul(a,b){
//         let promisea= new Promise((resolve,reject)=>{
//             var sum=a*b
//            if(sum>10){
//             resolve(sum)
//            }
//            else{
//             reject("Product is not greater than 10")
//            }
//         })
    
   
// promisea.then((val)=>{
//     document.getElementById("texte").innerText=`The product is ${val}`
// })
//     .catch((err)=>{
//         document.getElementById("texte").innerText=`The error message is ${err}`
//     })
//     }
//     mul(15,2)
// // div
//     function div(a,b){
//         let promiseb= new Promise((resolve,reject)=>{
//             var sum=a/b
//            if(sum>10){
//             resolve(sum)
//            }
//            else{
//             reject("Division is not greater than 10")
//            }
//         })
    
   
// promiseb.then((val)=>{
//     document.getElementById("textf").innerText=`The division is ${val}`
// })
//     .catch((err)=>{
//         document.getElementById("textf").innerText=`The error message is ${err}`
//     })
//     }
//     div(15,3)


// await only executes after async
// async 
//     async function add1(a,b){
//         let promise=new Promise((resolve,reject)=>{
//             var sum=a+b
//             if(sum>10){
//                 resolve(sum);

//             }
//             else{
//                 reject("Error");

//             }
//         })
//         var ans= await promise
//         document.getElementById("textc").innerText=`The sum is ${ans}`
//     }
// add1(10,2)

// // sub
// async function sub(a,b){
//     let promise=new Promise((resolve,reject)=>{
//         var sum=a-b
//         if(sum>10){
//             resolve(sum)

//         }
//         else{
//             reject("Error")

//         }
//     })
//     var ans= await promise
//     document.getElementById("textd").innerText=`The difference is ${ans}`
// }
// sub(20,2)

// // mul

// async function mul(a,b){
//     let promise2=new Promise((resolve,reject)=>{
//         var sum=a*b
//         if(sum>10){
//             resolve(sum)

//         }
//         else{
//             reject("Error")

//         }
//     })
//     var ans= await promise2
//     document.getElementById("texte").innerText=`The product is ${ans}`
// }
// mul(10,2)


// // // div
// async function div(a,b){
//     let promise2=new Promise((resolve,reject)=>{
//         var sum=a/b
//         if(sum>10){
//             resolve(sum)

//         }
//         else{
//             reject("Error")

//         }
//     })
//     var ans= await promise2
//     document.getElementById("textf").innerText=`The division is ${ans}`
// }
// div(100,2)



function ajaxcall(){
   var xhttp=new XMLHttpRequest()
   xhttp.open('Get','https://dummyjson.com/products',true)
   xhttp.send()
   xhttp.onreadystatechange=function () {
    let promise= new Promise((resolve,reject)=>{
        if(this.readyState==4 && this.status==200){
            resolve("It is done")

        
        }
    })
    promise.then((val)=>{
        document.getElementById("textc").innerHTML=`The result is ${val}`
    })
   }
}
ajaxcall()





