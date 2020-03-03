const express = require("express");
const burger = require("../models/burger.js");

let router = express.Router();



router.get("/",(req,res)=>{
    burger.selectAllBurgers(data=>{
        const eaten = data.filter(burger=>{return burger.devoured});
        const uneaten = data.filter(burger=>{return !burger.devoured});

        const hbsObject = {
            eaten:eaten,
            uneaten:uneaten
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});//get

router.post("/api/burgers/:name",(req,res)=>{
    burger.insertBurger(req.params.name,data=>{
        console.log(data);
        res.json({id: data.insertId});
    });

});//post

router.put("/api/burgers",(req,res)=>{
    console.log("test");
    burger.updateBurger(req.body.id,data=>{
        if(data.changedRows== 0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports = router;