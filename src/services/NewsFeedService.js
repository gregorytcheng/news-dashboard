import axios from "axios";

export const getHeadlines = (source) => {
  return axios
    .get(`http://127.0.0.1:5000/${source}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const getIndices = () => {
  return axios
    .get("http://127.0.0.1:5000/indices")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
