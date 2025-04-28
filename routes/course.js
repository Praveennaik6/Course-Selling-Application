const {Router}= require("router");
const courseRouter=Router();

courseRouter.post("/purchase", function(req, res){
    //you would expect the user to pay money
    res.json({
        message:"signup endpoint"
    })
})

courseRouter.get("/preview", function(req, res){
    res.json({
        message: "course preview endpoint"
    })
})

module.exports={
    courseRouter: courseRouter
}