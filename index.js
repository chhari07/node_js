


// express js  server in node js 

const express=require("express");

const app =express();
app.get("/",(req,res)=>{
  return res.send("hello from home page");
});


app.get("/about",(req,res)=>{
     return res.send(` hello ${req.query.name}`);
});

app.listen(8000,()=> console.log("hey your server is started !"));


// http server in node js 


// const http=require("http");
// const fs=require("fs");
// const url=require("url");


// function myHandler(req,res){
//   const log=`${Date.now()}:${req.method} ${req.url}/new request recived\n`;
//     if(req.url=="/favicon.ico")return res.end();
//     const myUrl=url.parse(req.url,true);
//     // console.log(myUrl);
//     fs.appendFile("log.txt",log,(err,data)=>{
//       switch(myUrl.pathname){
//         case '/':
//           if(req.method=="GET")
//           res.end("HomePage area");
//         break
//         case '/about':
//         res.end(" I AM AMAN KUMAR CHHARI");
//         const username=myUrl.query.myname;
//         res.end(`hi,${username}`);
//         break;
//         case "/search":
//         case '/signup':
//           if(req.method=='GET')res.end('THIS IS A SIGN FORM');
//           else if(req.method=='POST'){
//             // DB query
//             res.end("success");
//           }
//         default:
//         res.end(" 404 not found");
//       }
        
//     });
// }


// const myserver=http.createServer(app);



// myserver.listen(8000, ()=>
// console.log(" yes your server is started .")
// );
