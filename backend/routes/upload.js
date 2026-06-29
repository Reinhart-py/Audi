import express from "express";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.post("/", upload.single("audio"), async (req, res) => {
  console.log("\n=== Incoming Upload Request ===");

    if (req.fileValidationError) {
        console.error("Validation Error:", req.fileValidationError);
            return res.status(400).json({ message: req.fileValidationError });
              }

                if (!req.file) {
                    console.error("Upload Error: No file provided");
                        return res.status(400).json({ message: "No file provided" });
                          }

                            console.log("File temporarily saved to disk at:", req.file.path);

                              try {
                                  const fName = req.file.originalname.split(".")[0];
                                      const extension = req.file.originalname.split(".").pop();

                                          const result = await cloudinary.uploader.upload(req.file.path, {
                                                resource_type: "raw",
                                                      public_id: `audio_uploads/${fName}_${Date.now()}.${extension}`,
                                                          });

                                                              console.log("\n=== Cloudinary Upload Success ===");
                                                                  console.log("Result URL:", result.secure_url);

                                                                      fs.unlinkSync(req.file.path);

                                                                          return res.status(200).json({
                                                                                url: result.secure_url,
                                                                                      publicId: result.public_id,
                                                                                          });
                                                                                            } catch (error) {
                                                                                                console.error("\n=== Cloudinary Upload Error ===");
                                                                                                    console.error(error);

                                                                                                        if (fs.existsSync(req.file.path)) {
                                                                                                              fs.unlinkSync(req.file.path);
                                                                                                                  }

                                                                                                                      return res.status(error.http_code || 500).json({
                                                                                                                            message: error.message || "Cloudinary upload failed",
                                                                                                                                  details: error,
                                                                                                                                      });
                                                                                                                                        }
                                                                                                                                        });

                                                                                                                                        export default router;
