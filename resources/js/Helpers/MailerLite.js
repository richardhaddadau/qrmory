import axios from "axios";

const mailerLiteGroups = {
  "Free User": 87228887969302501,
};

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

const deleteSubscriber = (email) => {
  let config = {
    method: "DELETE",
    maxBodyLength: "Infinity",
    url:
      "https://connect.mailerlite.com/api/subscribers/" +
      findSubscriberByEmaiil(email),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_MAILERLITE_API_KEY,
    },
  };

  axios
    .delete(config)
    .then((r) => {
      const response = r.data;
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { mailerLiteGroups, newSubscriber, deleteSubscriber };
