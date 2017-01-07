import express from "express";
const router = express.Router();
import User from "../server/data-access/schemas";

router.get("/", function (req, res) {
   res.render("index", {title: "HackersHall"});
});

router.get("/", function (req, res) {
    res.render("index", {title: "HackersHall"});
});

router.post("/adduser", function (req, res) {
    let firstname = req.body.firstname,
        lastname = req.body.lastname,
        username = req.body.username,
        password = req.body.password,
        created = (new Date()).toDateString();
    let newUser = new User({
       firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        created: created
    });
   newUser.save(function (err) {
       if(err) throw err;
       console.log("user saved successfully!");
   })
});


export {router};