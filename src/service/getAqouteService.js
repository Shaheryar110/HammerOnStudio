import axios from "axios";

const postGetAqouteForm = async (data) => {
  return await axios.post("https://localhost:5001/api/quote", data);
};
export default postGetAqouteForm;
