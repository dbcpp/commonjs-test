const http=require(`http`);
const querystring=require(`querystring`);
//get 请求
// const server=http.createServer((req,res)=>{
//     console.log(req.method);
//     const url=req.url;
//     req.querystring=querystring.parse(url.split(`?`)[1]);
//     res.end(JSON.stringify(req.querystring));
// });
//post 请求
const server=http.createServer((req,res)=>{
    console.log("content-type",req.headers[`content-type`]);
    if(req.method===`POST`){
    //接受数据
     let postdata="";
     req.on(`data`,chunk=>{
         postdata+=chunk.toString();
     });
     req.on(`end`,()=>{
        console.log("data",postdata);
        res.end("hello world");
    });
   
    }
})

 
server.listen(8000);
/* iuAZ */