import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const sanitizeEnv = (val) => (val ? val.trim().replace(/['"]/g, "") : "");

const cloudName = sanitizeEnv(process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUD_NAME);
const apiKey = sanitizeEnv(process.env.CLOUDINARY_API_KEY || process.env.API_KEY);
const apiSecret = sanitizeEnv(process.env.CLOUDINARY_API_SECRET || process.env.API_SECRET);

console.log("\n=== Cloudinary Config Verification ===");
console.log(`Cloud Name: ${cloudName || "MISSING"}`);
console.log(`API Key: ${apiKey ? apiKey.substring(0, 4) + "..." + apiKey.slice(-4) : "MISSING"}`);
console.log(`API Secret: ${apiSecret ? "..." + apiSecret.slice(-4) : "MISSING"}`);
console.log("======================================\n");

cloudinary.config({
  cloud_name: cloudName,
    api_key: apiKey,
      api_secret: apiSecret,
      });

      export default cloudinary;
