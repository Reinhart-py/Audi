import express from "express";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("\n=== Fetching Audio Files ===");
    try {
        const result = await cloudinary.api.resources({
              resource_type: "raw",
                    type: "upload",
                          prefix: "audio_uploads/",
                                max_results: 100,
                                      sort_by: "created_at",
                                            direction: "desc",
                                                });

                                                    console.log(`Found ${result.resources.length} files.`);
                                                        return res.status(200).json(result.resources);
                                                          } catch (error) {
                                                              console.error("=== Fetch Audio Error ===");
                                                                  console.error(error);
                                                                      return res.status(error.http_code || 500).json({
                                                                            message: error.message || "Failed to fetch audio files",
                                                                                  details: error,
                                                                                      });
                                                                                        }
                                                                                        });

                                                                                        export default router;
