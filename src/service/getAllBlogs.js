import axios from "axios";

const getAllBlogs = async () => {
  return await axios.get("https://172.16.100.76:5001/api/blogs");
};
export default getAllBlogs;
