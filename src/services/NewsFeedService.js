import axios from "axios";

const herokuEndpoint = "https://news-dashboard-flask.herokuapp.com";

export const getSources = () => {
  return axios
    .get(`${herokuEndpoint}/sources`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const getHeadlines = (source) => {
  return axios
    .get(`${herokuEndpoint}/${source}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};

export const getIndexData = () => {
  return axios
    .get(`${herokuEndpoint}/indices`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
};
