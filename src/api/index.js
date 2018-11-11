import axios from "axios";

const baseUrl = "/api/admin";
// set proxy in package.json, use localhost:4200 for development

export const getUsers = () => {
  return axios
    .get(baseUrl + "/user", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};

export const getPolls = () => {
  return axios
    .get(baseUrl + "/poll", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};

export const getVotes = () => {
  return axios
    .get(baseUrl + "/vote", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getUserByUsername = username => {
  return axios
    .get(baseUrl + "/user/" + username, {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};

export const getRecordsByUserID = userID => {
  return axios
    .get(baseUrl + "/record/" + userID, {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};
