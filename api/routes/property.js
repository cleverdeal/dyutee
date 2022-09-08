import express from "express";
import {
  countByCity,
  countByType,
  createProperty,
  deleteProperty,
  getProperty,
  getPropertyRooms,
  getProperties,
  updateProperty,
} from "../controllers/property.js";
import Property from "../models/Property.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createProperty);

//UPDATE
router.put("/:id", verifyAdmin, updateProperty);
//DELETE
router.delete("/:id", verifyAdmin, deleteProperty);
//GET

router.get("/find/:id", getProperties);
//GET ALL

router.get("/", getProperty);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getPropertyRooms);

export default router;
