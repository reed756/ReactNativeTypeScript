import axios from "axios";
import { API_TOKEN } from "@env";

// const apiSecret = process.env.REACT_APP_SECRET_KEY;

const amazonApi = axios.create({
  baseURL: "https://9nqt242jla.execute-api.eu-west-2.amazonaws.com/dev",
});

export const getVenues = () => {
  return amazonApi
    .get(`/get-venue-data`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data.venue.Items;
    })
    .catch((err) => {
      // console.log(err, "error");
    });
};

export const getGigs = () => {
  return amazonApi
    .get(`/get-gig-data`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data.gig.Items;
    })
    .catch((err) => {
      // console.log(err, "error");
    });
};

export const getSingleGig = (id) => {
  return amazonApi
    .get(`/get-gig-data/${id}`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data.gig;
    })
    .catch((err) => {
      console.log(err, "error");
    });
};
