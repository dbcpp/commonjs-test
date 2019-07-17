const serverHandle=(req,res)=>{
    //返回格式
    res.setHeader('Content-type','application/json')
    const resData={
        name:'白菜111',
        site:'imooc'
    }
    res.end(
        JSON.stringify(resData)
    )

}
module.exports=serverHandle;
