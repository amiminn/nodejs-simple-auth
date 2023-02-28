import express from "express";
const router = express.Router();
import * as AuthController from "../controllers/AuthController.js";
import * as ClientController from "../controllers/ClientController.js";
import client from "../middleware/client.js";
import jwt from "../middleware/jwt.js";

router.get("/api/home", [jwt, client], function (req, res) {
  res.json({
    success: true,
    data: [],
  });
});

router.post("/api/login", AuthController.login);
router.post("/api/signup", AuthController.signup);
router.post("/api/client", ClientController.store);

export default router;
