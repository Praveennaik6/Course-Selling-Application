const mongoose = require("mongoose");
mongoose.connect 
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema=Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String,
});

const adminSchema=Schema({
    email:{type:String, unique:true},
    password:String,
    firstName:String,
    lastName:String,

});

const courseSchema=Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:ObjectId,
});

const purchaseSchema=Schema({
    userId:ObjectId,
    courseId:ObjectId

});

const userModel=mongoose.Model("user", userSchema);
const adminModel=mongoose.Model("admin",adminSchema);
const courseModel=mongoose.Model("course", courseSchema);
const purchaseModel=mongoose.Model("purcahse", purchaseSchema);

module.export={
    userModel,
    adminModel,
    courseModel,
    purchaseModel

}