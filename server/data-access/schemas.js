"use strict";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
mongoose.connect("mongodb://admin:admin@ds157078.mlab.com:57078/hackershall");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
});

UserSchema.pre("save", function (next) {
   if(!this.isModified("password")){
       return next();
   }
   bcrypt.hash(this.password, 16.5, (err,hash)=>{
      if(err){
          next(err);
          return;
      }
      this.password = hash;
      next();
   });
});
UserSchema.methods.passwordIsValid =  function(password, callback){
    const results = !this.password || !password ? false : this.password == password;
    callback(null, results);
};

const User = mongoose.model("User", UserSchema);

export {User};
