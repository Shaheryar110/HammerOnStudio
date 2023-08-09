import axios from "axios";

const postNewsLetterForm = async (data) => {
  return await axios.post("https://localhost:5001/api/newsletter", data);
};
export default postNewsLetterForm;
