import mongoose from "mongoose";

const functn = new mongoose.Schema({
    
      Function_Id:{
         type:Number,
        
      },
      BrideGroomsandBrideName:{
         type:String,
         required:true
    }
})
export default mongoose.model("newfunction",functn);
