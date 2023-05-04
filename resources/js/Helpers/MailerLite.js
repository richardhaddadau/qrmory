import axios from "axios";

const newSubscriber = (data) => {
  let config = {
    method: "POST",
    maxBodyLength: "Infinity",
    url: "https://connect.mailerlite.com/api/subscribers",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_MAILERLITE_API_KEY,
    },
    data: JSON.stringify(data),
  };

  axios
    .post(config)
    .then((r) => {
      const response = r.data;
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

const findSubscriberByEmaiil = (email) => {
  let config = {
    method: "POST",
    maxBodyLength: "Infinity",
    url: "https://connect.mailerlite.com/api/subscribers/" + email,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_MAILERLITE_API_KEY,
    },
    data: JSON.stringify(data),
  };

  axios
    .get(config)
    .then((r) => {
      const response = r.data.id;
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
