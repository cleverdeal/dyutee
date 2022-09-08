import Client from "../models/Client.js";
import bcrypt from "bcryptjs";

  export const signup = async (req, res, next) => {
   
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
        
            const newClient = new Client({
              ...req.body,
              password: hash,
            });
        
            await newClient.save();
            res.status(200).send("Client has been created.");
          } catch (err) {
            next(err);
          }
    };
    
    export const updateClient = async (req,res,next)=>{
      try {
        const updatedClient = await Client.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedClient);
      } catch (err) {
        next(err);
      }
    }
    export const deleteClient = async (req,res,next)=>{
      try {
        await Client.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
    }
    export const getClient = async (req,res,next)=>{
      try {
        const client = await Client.findById(req.params.id);
        res.status(200).json(client);
      } catch (err) {
        next(err);
      }
    }
    export const getClients = async (req,res,next)=>{
      try {
        const clients = await Client.find();
        res.status(200).json(clients);
      } catch (err) {
        next(err);
      }
    }
    
    