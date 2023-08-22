import axios from "axios";
import { URI } from "../uri";

const getAllBlogs = async () => {
  return await axios.get(`https://${URI}:5001/api/blogs`);
};
export default getAllBlogs;
