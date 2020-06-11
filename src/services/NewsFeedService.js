import axios from "axios";

export const getSources = () => {
  return axios
    .get("http://127.0.0.1:5000/sources")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const getHeadlines = (source) => {
  return axios
    .get(`https://news-dashboard-flask.herokuapp.com/${source}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const getIndexData = () => {
  return axios
    .get("https://news-dashboard-flask.herokuapp.com/indices")
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
