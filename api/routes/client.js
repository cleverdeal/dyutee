import express from "express";
import { signup } from "../controllers/client.js";
import { updateClient, deleteClient, getClient, getClients } from "../controllers/client.js";
import { verifyAdmin, verifyToken, verifyUser,verifyClientUser } from "../utils/verifyToken.js";

const router = express.Router();


//post client user
router.post("/",signup);


//UPDATE
router.put("/:id", verifyUser, updateClient);

//DELETE
router.delete("/:id", verifyUser, deleteClient);

//GET
router.get("/:id", verifyUser, getClient);

//GET ALL
router.get("/", verifyAdmin, getClients);

export default router;
