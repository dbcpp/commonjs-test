const querystring = require(`querystring`)
const handleBlogRouter = require(`./src/router/blog`)
const getPostData = (req) => {
let prm=new remis

}
const serverHandle = (req, res) => {
    //返回格式
    res.setHeader('Content-type', 'application/json');
    const method = req.method;
    const url = req.url;
    req.path = url.split(`?`)[0];
    req.query = querystring.parse(url.split(`?`)[1])
    //处理路由
    const resData = handleBlogRouter(req, res);
    if (resData) {
        //返回
        if (method === `GET`) {
            res.end(
                JSON.stringify(resData)
            )
        }
        if (method === `POST`) {
            let postData = ``;
            req.on(`data`, chunk => {
                postData += chunk.toString();
            });
            req.on(`end`, () => {
                resData.postData = postData;
                res.end(
                    JSON.stringify(resData)
                );
            })
        }
        return;
    }

}
module.exports = serverHandle;
