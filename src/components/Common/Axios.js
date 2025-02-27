import axios from "axios";
import { DecryptToken } from "./Encrypt";

// const domain = "http://127.0.0.1:8000";
const domain = "https://gtbit-backend.herokuapp.com";

let token, options;
function getToken() {
  var b = document.cookie.match("(^|[^;]+)\\s*" + token + "\\s*=\\s*([^;]+)");
  if (b) {
    let val = b.pop();

    token = DecryptToken(val);
    options = {
      headers: {
        Authorization: "Token " + token,
      },
    };
  } else {
    options = {};
  }
}
getToken();

function AxiosGet(endpoint, handleSuccess, handleErr) {
  axios
    .get(`${domain}${endpoint}`, options)
    .then((res) => {
      if (res.status === 200) handleSuccess(res);
    })
    .catch((err) => {
      handleErr(err);
      console.log(err);
    });
}

function AxiosPost(endpoint, body, handleSuccess, handleErr) {
  axios
    .post(`${domain}${endpoint}`, body, options)
    .then((res) => {
      if (res.status === 200) handleSuccess(res);
    })
    .catch((err) => {
      handleErr(err);
      console.log(err);
    });
}

function AxiosDelete(endpoint, body, handleSuccess, handleErr) {
  axios
    .delete(`${domain}${endpoint}`, { ...options, data: body })
    .then((res) => {
      if (res.status === 200) handleSuccess(res);
    })
    .catch((err) => {
      handleErr(err);
      console.log(err);
    });
}

function AxiosPut(endpoint, body, handleSuccess, handleErr) {
  axios
    .put(`${domain}${endpoint}`, body, options)
    .then((res) => {
      if (res.status === 200) handleSuccess(res);
    })
    .catch((err) => {
      handleErr(err);
      console.log(err);
    });
}

export { AxiosGet, AxiosPost, AxiosDelete, AxiosPut };
