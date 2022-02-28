import axios from "axios";
import { API_TOKEN } from "@env";
import { a } from "aws-amplify";

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
      console.log(err, "error");
    });
};

export const getGigs = () => {
  return amazonApi
    .get(`/get-gig-data`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err, "error");
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

export const getGigsByVenue = (venue_id) => {
  return amazonApi
    .get(`/query-gigs/${venue_id}`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

export const postGig = (id, body) => {
  return amazonApi
    .post(`/create-gig-data/${id}`, body, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const gigsByGenre = (genre) => {
  return amazonApi
    .get(`/query-genre/${genre}`, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const sendReminder = (body) => {
  return amazonApi
    .post(`/send-email`, body, {
      headers: { "X-API-KEY": API_TOKEN },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
