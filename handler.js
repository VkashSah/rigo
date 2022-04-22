"use strict";
const axios = require("axios");
let data = JSON.stringify({
  userName: "", //YOUR USERNAME SHOULD BE HERE
  password: "", //YOUR PASSWORD SHOULD BE HERE
  strategy: "password",
});

let config = {
  method: "post",
  url: "https://bottle.rigohr.com/v1/auth/signin",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};
module.exports.checkOut = async (event) => {
  try {
    let loginData = await axios(config);
    let checkOutConfig = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/leave-time/attendance/manual?isCheckIn=false",
      headers: {
        Authorization: loginData.data.Data.Token,
        "Content-Type": "application/json",
        Cookie: "",
      },
      data: JSON.stringify({}),
    };
    await axios(checkOutConfig);
    return { statusCode: 204 };
  } catch (err) {
    console.log(err);
  }
};
module.exports.checkIn = async (event) => {
  try {
    let loginData = await axios(config);
    let checkInConfig = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/leave-time/attendance/manual?isCheckIn=true",
      headers: {
        Authorization: loginData.data.Data.Token,
        "Content-Type": "application/json",
        Cookie: "",
      },
      data: JSON.stringify({}),
    };
    await axios(checkInConfig);
    return { statusCode: 204 };
  } catch (err) {
    console.log(err);
  }
};
