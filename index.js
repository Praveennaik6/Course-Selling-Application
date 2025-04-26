const app=express();

app.post("/user/signup", function(req, res){
    res.json({
        message:"signup  endpoint"
    })
})

app.post("/user/signin", function(req, res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/user/purchase", function(req, res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/course/purchase", function(req, res){
    res.json({
        message:"signup endpoint"
    })
})

app.post("/courses", function(req, res){
    res.json({
        message:"signup endpoint"
    })
})