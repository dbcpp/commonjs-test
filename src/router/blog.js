const { getList } = require(`../controller/blog`);

const { SuccessModle, ErrorModel } = require(`../model/resModel`)
const handleBlogRouter = (req, res) => {
    const method = req.method;

    if (method === `GET` && req.path == `/api/blog/list`) {
        const result= getList("", "");
        result.then(listdata=>{
            return new SuccessModle(listdata);
        })
    }
}
module.exports = handleBlogRouter;