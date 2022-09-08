import express from "express";
import { signup } from "../controllers/broker.js";
import { updateBroker, deleteBroker, getBroker, getBrokers } from "../controllers/broker.js";
import { verifyAdmin, verifyToken, verifyUser,verifyClientUser } from "../utils/verifyToken.js";

const router = express.Router();


//post client user
router.post("/",signup);


//UPDATE
router.put("/:id", verifyUser, updateBroker);

//DELETE
router.delete("/:id", verifyUser, deleteBroker);

//GET
router.get("/:id", verifyUser, getBroker);

//GET ALL
router.get("/", verifyAdmin, getBrokers);

export default router;
