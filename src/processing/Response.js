const axios = require("axios");

const BASE_GET_URL = "";
const BASE_POST_URL = "";

const API_GET = (query) => {
  const GET_URL = BASE_GET_URL + query;
  axios
    .get(GET_URL)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

const API_POST = (query) => {
  //perform post request
  axios
    .post(BASE_POST_URL, {
      query: query,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Response = (speech) => {
  // analyse speech here and return value
  let processedResponse;
  return { message: "service not available yet", action: "undefined" };
};
