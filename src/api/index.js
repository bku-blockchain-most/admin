import axios from "axios";

// const baseUrl = "http://api.most.bkchain.tk/admin";
const baseUrl = "/admin";
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

export const getEvents = () => {
  return axios
    .get(baseUrl + "/event", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getVillages = () => {
  return axios
    .get(baseUrl + "/village", {
      headers: {}
    })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getBooths = () => {
  return axios
    .get(baseUrl + "/booth", {
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

/**
 * @param data: { eventID, ownerID, title, description, photoUrl, startDate, endDate, candidates }
 * */
export const createPoll = data => {
  return axios
    .post(baseUrl + "/poll", data)
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};
