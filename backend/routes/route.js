import express from "express";

import { uploadImage,downloadImage } from "../controller/imageController.js";

import upload from "../utils/upload.js";

const router = express.Router();

// 3 arguments -> end point , middleware and callback function
// need middleware to do work before actual logic
router.post("/upload", upload.single("file"), uploadImage);

router.get('/file/:fileId', downloadImage );

export default router;
