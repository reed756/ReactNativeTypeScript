import axios from "axios";
import config from "../config";

// const apiSecret = process.env.REACT_APP_SECRET_KEY;

const amazonApi = axios.create({
  baseURL: "https://14mh5mrgzl.execute-api.eu-west-2.amazonaws.com/dev",
});

export const getVenues = () => {
  return amazonApi
    .get("/get-venue-data", {
      headers: { "X-API-KEY": config.API_TOKEN },
    })
    .then((res) => {
      console.log(res);
      return res.data.venue.Items;
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
