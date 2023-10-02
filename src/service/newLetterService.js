import axios from "axios";
import { URI } from "../uri";

const postNewsLetterForm = async (data) => {
  return await axios.post(`https://${URI}:5000/api/newsletter`, data);
};
export default postNewsLetterForm;
