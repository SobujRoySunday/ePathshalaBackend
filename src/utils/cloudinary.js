import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      console.log("Error: Couldn't find the file path");
      return null;
    }

    // upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file upload success
    console.log("File has been uploaded on cloudinary: ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error: File upload failed, file unlinked");
    return null;
  }
};

return { uploadOnCloudinary };
