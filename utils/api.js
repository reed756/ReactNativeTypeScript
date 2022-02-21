import axios from "axios";
import { API_TOKEN } from "@env";

// const apiSecret = process.env.REACT_APP_SECRET_KEY;

const amazonApi = axios.create({
  baseURL: "https://14mh5mrgzl.execute-api.eu-west-2.amazonaws.com/dev",
});

export const getVenues = () => {
  console.log("here", API_TOKEN );
  return amazonApi
    .get("/get-venue-data", {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      console.log(res);
      return res.data.venue.Items;
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
