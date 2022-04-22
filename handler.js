"use strict";
const axios = require("axios");
let data = JSON.stringify({
  userName: "Vikash",
  password: "",
  strategy: "password",
});

module.exports.checkOut = async (event) => {
  try {
    let config = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let loginData = await axios(config);
    let loginTime = JSON.stringify({});
    let checkInConfig = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/leave-time/attendance/manual?isCheckIn=false",
      headers: {
        Authorization: loginData.data.Data.Token,
        "Content-Type": "application/json",
        Cookie:
          ".AspNet.SharedCookie=CfDJ8FoG4wiWCrVJs9Wf564lj0gDZhxqrSWS0d43odk_yF-Y0MWYjWsWEs2hOzWIl_bZPBCehFlUPDUPlxyB3sL7smGBXymQzN29Emz75sklh3RCgRe2QZAC-zLsBol35-gpDfvMnvk1F3ao30v9YS06lENTUqaJXpNNcRFI7nFqMXqFwfFksjK5cWXcGWncZKxbONlMiN65Kmy723e8zIsC9SVtDVwv9VGFPu7XQZMD9AVxDjP9pLBUj-wghGAnL_hD5gT9KJ9NyeWxzLdUPB05e8mVmQ0XSYAvvRsao6k0aibzmqneXPRDvc7mgXlvoxpsblDpV6RKXfo87tmuyDtfdSj6MuXY3oBDjSPaXmpknCAB0cO7RldUkxrdNv_2b9q1oFqAccoPrXA0pf1xRnqxABSjHAJL7bSYR9jz3-ZrlkyNnO1tDeZM9V82FXFfBZaC7l0tsXG_sS2z-CKL9BTzDig1TB_96K6KQTjS1N-4VPTxW8VOZ50BjU1YN05L-apTcsCD8Iv0WkofdGmG9XmuZiEHep1yCyibUgJpX6gQgEjSSgfkXAelpRcqj3hcVhcPqMpzLgSKg6nNNkVkixYnchAmytY-0qFlmac98oCkO4MpfftRjPDQIu_FtNyzIsZbNvpHfqotPX_oRLPgmIVH3GjXo0b-lsvDBcCP7XSM88hm; .AspNetCore.Identity.Application=CfDJ8FoG4wiWCrVJs9Wf564lj0g48qpZyCZzxaDcnSd82JbLQYyFfijlSWhcmq_IIV2BaNI1RdwH0cdMB_ozB0KkQ7gAMNlvPZk1RfghyVvbDBmOnF5NYK4p8etR_LihYQZTcT83Nz9n6uliuuFl6XDwRJ6cXudVlRrMQ9js4bkxDV92dBk22HD-T06DPB8T3OGvigZ4ASM2SIfr_ptY-nYcjTn4HuOz4l8WMLCR7fYkIasmqKPY6IRHQvJPdfZNjUgG-ujc7LE9DJU-YuTILR7_qk5gBAFr70hofz90H43-JxLRZ1cyA4wj866S_5-x4NT5SlIKqxoHfYucMoOE8VOsvZuis5hkkLaw0Qd8yNrvgLXzmRlUxor2m1Fc6D4TeG86roVed2z-CrqgUfUY4f_PjKc2hCn2m7f4XG2UClcHDGCbXUeiZCl38L9vPkvdZ_us9cF-UvF5FsfQSI4Up7vtkoMYri65Harj2FhHDfUopDohs33jkgrEg-MAlBLaB335EDOdgmW4J9zY73cP_BhredMnDCI0rii7GT4RPMWKUGQuDDSnHS4i_X_kHQN8tDBVxp1L_i5v22N1xtoZ1jxW_wIrxi8YvrfIyucSoNG_yKgMLJeALCJ_wdxvkzmL_OzCpMv0WpXCnROS6CuFEVX05GSlOn4Q-rOXZ3S96f7QtlPfk3htQ92FrMd3qElnJNa-LB5-3qdf30NiwwQKOpvBBpE",
      },
      data: loginTime,
    };
    let checkOutData = await axios(checkInConfig);
    return { statusCode: 200, data: checkOutData };
  } catch (err) {
    console.log(err);
  }
};

module.exports.checkIn = async (event) => {
  try {
    let config = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/auth/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    let loginData = await axios(config);
    let loginTime = JSON.stringify({});
    let checkInConfig = {
      method: "post",
      url: "https://bottle.rigohr.com/v1/leave-time/attendance/manual?isCheckIn=true",
      headers: {
        Authorization: loginData.data.Data.Token,
        "Content-Type": "application/json",
        Cookie:
          ".AspNet.SharedCookie=CfDJ8FoG4wiWCrVJs9Wf564lj0gDZhxqrSWS0d43odk_yF-Y0MWYjWsWEs2hOzWIl_bZPBCehFlUPDUPlxyB3sL7smGBXymQzN29Emz75sklh3RCgRe2QZAC-zLsBol35-gpDfvMnvk1F3ao30v9YS06lENTUqaJXpNNcRFI7nFqMXqFwfFksjK5cWXcGWncZKxbONlMiN65Kmy723e8zIsC9SVtDVwv9VGFPu7XQZMD9AVxDjP9pLBUj-wghGAnL_hD5gT9KJ9NyeWxzLdUPB05e8mVmQ0XSYAvvRsao6k0aibzmqneXPRDvc7mgXlvoxpsblDpV6RKXfo87tmuyDtfdSj6MuXY3oBDjSPaXmpknCAB0cO7RldUkxrdNv_2b9q1oFqAccoPrXA0pf1xRnqxABSjHAJL7bSYR9jz3-ZrlkyNnO1tDeZM9V82FXFfBZaC7l0tsXG_sS2z-CKL9BTzDig1TB_96K6KQTjS1N-4VPTxW8VOZ50BjU1YN05L-apTcsCD8Iv0WkofdGmG9XmuZiEHep1yCyibUgJpX6gQgEjSSgfkXAelpRcqj3hcVhcPqMpzLgSKg6nNNkVkixYnchAmytY-0qFlmac98oCkO4MpfftRjPDQIu_FtNyzIsZbNvpHfqotPX_oRLPgmIVH3GjXo0b-lsvDBcCP7XSM88hm; .AspNetCore.Identity.Application=CfDJ8FoG4wiWCrVJs9Wf564lj0g48qpZyCZzxaDcnSd82JbLQYyFfijlSWhcmq_IIV2BaNI1RdwH0cdMB_ozB0KkQ7gAMNlvPZk1RfghyVvbDBmOnF5NYK4p8etR_LihYQZTcT83Nz9n6uliuuFl6XDwRJ6cXudVlRrMQ9js4bkxDV92dBk22HD-T06DPB8T3OGvigZ4ASM2SIfr_ptY-nYcjTn4HuOz4l8WMLCR7fYkIasmqKPY6IRHQvJPdfZNjUgG-ujc7LE9DJU-YuTILR7_qk5gBAFr70hofz90H43-JxLRZ1cyA4wj866S_5-x4NT5SlIKqxoHfYucMoOE8VOsvZuis5hkkLaw0Qd8yNrvgLXzmRlUxor2m1Fc6D4TeG86roVed2z-CrqgUfUY4f_PjKc2hCn2m7f4XG2UClcHDGCbXUeiZCl38L9vPkvdZ_us9cF-UvF5FsfQSI4Up7vtkoMYri65Harj2FhHDfUopDohs33jkgrEg-MAlBLaB335EDOdgmW4J9zY73cP_BhredMnDCI0rii7GT4RPMWKUGQuDDSnHS4i_X_kHQN8tDBVxp1L_i5v22N1xtoZ1jxW_wIrxi8YvrfIyucSoNG_yKgMLJeALCJ_wdxvkzmL_OzCpMv0WpXCnROS6CuFEVX05GSlOn4Q-rOXZ3S96f7QtlPfk3htQ92FrMd3qElnJNa-LB5-3qdf30NiwwQKOpvBBpE",
      },
      data: loginTime,
    };
    let checkOutData = await axios(checkInConfig);
    return { statusCode: 200, data: checkOutData };
  } catch (err) {
    console.log(err);
  }
};
