import axios from "axios";

const postContactForm = async (data) => {
  return await axios.post("https://172.16.100.76:5001/api/contactUs", data);
};
export default postContactForm;
