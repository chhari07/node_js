const fs=require("fs");
const os=require("os");

console.log(os.cpus().length);
// console.log("1");

// // sync..blocking request 
// // const  result=fs.readFileSync("./text.txt","utf-8");
// // console.log(result);



// //async  ... non-blocking request 
// fs.readFile("./text.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });


// console.log("2");
// const result=  fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);

//     }else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("text.txt",`${Date.now()} thise your dates\n`); 
// fs.copyFileSync("text.txt","./copy.txt");
// console.log(fs.statSync("./text.txt"));
// fs.mkdirSync("mydocsd/a/b",{recursive:true});