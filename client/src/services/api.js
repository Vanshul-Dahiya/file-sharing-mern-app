import axios from "axios";

const API_URL = "https://file-sharing-backend-ljuk.onrender.com";

export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling api : ", error.message);
  }
};
