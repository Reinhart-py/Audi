import express from "express";
import multer from "multer";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file provided" });
  }

  const stream = cloudinary.uploader.upload_stream(
    {
      resource_type: "video",
      folder: "audio_uploads",
    },
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }

      return res.status(200).json({
        url: result.secure_url,
        publicId: result.public_id,
        format: result.format,
      });
    }
  );

  stream.end(req.file.buffer);
});

export default router;
