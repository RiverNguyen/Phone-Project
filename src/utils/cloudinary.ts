import axios from "axios";

const uploadFileCloudinary = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "tech_store"); // Thay bằng upload preset của bạn
    formData.append("folder", "phone");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dqing7vxx/image/upload", // Thay bằng cloudinary name của bạn
      formData
    );
    return response.data.url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { uploadFileCloudinary };
