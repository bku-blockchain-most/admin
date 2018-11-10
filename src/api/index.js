import axios from "axios";

const baseUrl = "http://localhost:4200/api";
// const baseUrl = "http://most.bkchain.tk/api";

export const getUsers = () => {
  return axios
    .get(baseUrl + "/user", {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU4OTMyNTA3NTBmNGU1ODZmZDYyZCIsInVzZXJuYW1lIjoicmVuZS5ib3llcjAyMzEiLCJpYXQiOjE1NDE4MTYwNjksImV4cCI6MTU0MjIwNDg2OX0.2WBTNKjZMNC1zXsk1mYRTsBC1zOa02BpJTJhqEDwAyo"
      }
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
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU4OTMyNTA3NTBmNGU1ODZmZDYyZCIsInVzZXJuYW1lIjoicmVuZS5ib3llcjAyMzEiLCJpYXQiOjE1NDE4MTYwNjksImV4cCI6MTU0MjIwNDg2OX0.2WBTNKjZMNC1zXsk1mYRTsBC1zOa02BpJTJhqEDwAyo"
      }
    })
    .then(res => res.data)
    .then(data => {
      //   console.log(data);
      return data;
    });
};
