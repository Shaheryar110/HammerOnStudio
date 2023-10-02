import axios from "axios";
import { URI } from "../uri";

const postGetAqouteForm = async (data) => {
  return await axios.post(`https://${URI}:5000/api/quote`, data);
};
export default postGetAqouteForm;
