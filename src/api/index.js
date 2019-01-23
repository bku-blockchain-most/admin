import axios from "axios";

const baseUrl = "http://api.lab.bkchain.tk/admin";
// const baseUrl = "/admin";
// set proxy in package.json, use localhost:8001 for development

export const isAuthenticated = () => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const tokenExpire = localStorage.getItem("AUTH_TOKEN_EXPIRE");
  console.log(token, tokenExpire);
  if (!token || token === "") return false;
  if (Number.parseInt(tokenExpire, 10) < Date.now() / 1000) return false;
  return true;
};

export const logout = () => {
  localStorage.removeItem("AUTH_TOKEN");
  window.location.reload();
};

export const getToken = () => localStorage.getItem("AUTH_TOKEN");

export const login = ({ username, password }) => {
  return axios
    .post(baseUrl + "/login", {
      username,
      password
    })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      const { token, tokenExpire } = data;
      localStorage.setItem("AUTH_TOKEN", token);
      localStorage.setItem("AUTH_TOKEN_EXPIRE", tokenExpire);
    });
};

export const getUsers = () => {
  return axios
    .get(baseUrl + "/user", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};

export const getPolls = () => {
  return axios
    .get(baseUrl + "/poll", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      // console.log(data);
      return data;
    });
};

export const getVotes = () => {
  return axios
    .get(baseUrl + "/vote", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getEvents = () => {
  return axios
    .get(baseUrl + "/event", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getVillages = () => {
  return axios
    .get(baseUrl + "/village", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getBooths = () => {
  return axios
    .get(baseUrl + "/booth", { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};

export const getUserByUsername = username => {
  return axios
    .get(baseUrl + "/user/" + username, {
      headers: { Authorization: getToken() }
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
      headers: { Authorization: getToken() }
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
    .post(baseUrl + "/poll", data, { headers: { Authorization: getToken() } })
    .then(res => res.data)
    .then(data => {
      console.log(data);
      return data;
    });
};
