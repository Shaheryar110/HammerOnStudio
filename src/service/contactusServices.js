import axios from "axios";
import { URI } from "../uri";

const postContactForm = async (data) => {
  return await axios.post(`https://${URI}:5000/api/contactUs`, data);
};
export default postContactForm;
