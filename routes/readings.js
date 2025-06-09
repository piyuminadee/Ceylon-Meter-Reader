// import express from 'express';
const express = require('express');
const router = express.Router();
const Reading = require('../models/Reading');

router.post('/', async (req,res)=>{
    const {account_no, reading} = req.body;

    try {
       const prevReading = await Reading.findOne({account_no})
       .sort({readingDate:-1});

       //validate new reading
       if(prevReading && reading <= prevReading.reading){
        return res.status(400).json({error:'New reading must be higher than previous'});
       }

       //save new reading
       const newReading = new Reading({account_no, reading});
       await newReading.save();
 
       //calculate bill if previous reading exists
       if(prevReading){
        const units = newReading.reading - prevReading.reading;

        //calculate charges
        let fixedCharge, firstRange, secondRange, thirdRange;

        if (units<=50){
            fixedCharge = 500;
            firstRange = units*20;
            secondRange = 0;
            thirdRange = 0;
        }
        else if(units<=100){
            fixedCharge = 1500;
            firstRange = 50*20;
            secondRange = (units-50)*35;
            thirdRange =0; 
        }
        else {
            fixedCharge =0 ;
            firstRange = 50*20;
            secondRange = 50*35;
            thirdRange = (units-100)*50;
        }
        const totalAmount = fixedCharge + firstRange + secondRange + thirdRange;

        //save bill
        const bill = new Bill({
            account_no,
            prevReadingId : prevReading._id,
            currentReadingId : newReading._id,
            unitUsed : units,
            fixedCharge,
            firstRange,
            secondRange,
            thirdRange,
            totalAmount
        });
        await bill.save();
       }
       res.status(201).json(newReading);

    }
    catch(err){
     res.status(500).json({error:err.message})
    }
})





module.exports = router;