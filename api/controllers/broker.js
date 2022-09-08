import Broker from "../models/Broker.js";
import bcrypt from "bcryptjs";

  export const signup = async (req, res, next) => {
   
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
        
            const newBroker = new Broker({
              ...req.body,
              password: hash,
            });
        
            await newBroker.save();
            res.status(200).send("Broker has been created.");
          } catch (err) {
            next(err);
          }
    };
    
    export const updateBroker = async (req,res,next)=>{
      try {
        const updatedBroker = await Broker.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedBroker);
      } catch (err) {
        next(err);
      }
    }
    export const deleteBroker = async (req,res,next)=>{
      try {
        await Broker.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
    }
    export const getBroker = async (req,res,next)=>{
      try {
        const broker = await Broker.findById(req.params.id);
        res.status(200).json(broker);
      } catch (err) {
        next(err);
      }
    }
    export const getBrokers = async (req,res,next)=>{
      try {
        const brokers = await Broker.find();
        res.status(200).json(brokers);
      } catch (err) {
        next(err);
      }
    }
    
    