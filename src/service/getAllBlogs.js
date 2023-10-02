import axios from "axios";
import { URI } from "../uri";

const getAllBlogs = async () => {
  return await axios.get(`https://${URI}:5000/api/blogs`);
};
export default getAllBlogs;
