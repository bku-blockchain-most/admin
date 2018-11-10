import axios from "axios";

// const baseUrl = "http://localhost:4200/api/admin";
const baseUrl = "/api/admin";

export const getUsers = () => {
  return axios
    .get(baseUrl + "/user", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      //   console.log(data);
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
      //   console.log(data);
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
      //   console.log(data);
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
      //   console.log(data);
      return data;
    });
};
