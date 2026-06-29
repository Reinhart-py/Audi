import multer from "multer";
import fs from "fs";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
          },
            filename: (req, file, cb) => {
                const fileExt = file.originalname.split(".").pop();
                    const fileName = `${Date.now()}.${fileExt}`;
                        cb(null, fileName);
                          },
                          });

                          const fileFilter = (req, file, cb) => {
                            if (!file.mimetype.startsWith("audio/")) {
                                req.fileValidationError = "File type must be an audio format";
                                    return cb(null, false, req.fileValidationError);
                                      }
                                        cb(null, true);
                                        };

                                        const upload = multer({
                                          storage,
                                            fileFilter,
                                            });

                                            export default upload;
