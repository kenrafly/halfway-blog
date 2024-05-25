import express from "express";
import { create, getposts } from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import { deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getposts", getposts);
router.delete("/deletepost/:postId/:userId", verifyToken, deletePost);

export default router;
