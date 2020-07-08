import multer from "multer";
import path from "path";
import crypto from "crypto";

const uploadDir = path.resolve(__dirname, "..", "..", "tmp");

export default {
  directory: uploadDir,
  storage: multer.diskStorage({
    destination: uploadDir,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
