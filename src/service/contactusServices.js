import axios from "axios";

const postContactForm = async (data) => {
  return await axios.post("https://localhost:5001/api/contactUs", data);
};
export default postContactForm;
