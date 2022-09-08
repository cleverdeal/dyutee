import express from "express";
import { login, register,signin } from "../controllers/auth.js";
import { signup } from "../controllers/client.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/signin", signin)
router.post("/signup", signup)

export default router