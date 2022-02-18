const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema ({
        title:{
            type:String,
            unique:true
        },
        desc:{
            type:String,
            required:true
        },
        username:{
            type:String,
            required:false
        },
        photo:{
            type:String,
            required:false
        },
        categories:{
            type:Array,
            required:false
        }
    },
    { timestamps:true}
);


module.exports = mongoose.model("Post",PostSchema)