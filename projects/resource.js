const express = require("express");
const resource = require("../models/resource");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const resources = await resource.getResources();
        res.json(resources);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try{
      if(!req.body || !req.body.name){
        res.status(500).json({message:"name is required" })
      }
    const newresource = await resource.addResource(req.body)
         
    res.status(201).json(newresource)
    
    }catch(err){
      next(err)
    
    }
       
    });
    
module.exports = router;