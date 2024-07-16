const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGVmNTZkYWIzNmRiZmQ4NWRiNzIzMTkzYzZjNzIzNyIsIm5iZiI6MTcyMDk1MTM0OS4yOTg2MDYsInN1YiI6IjY0ODY5ZjgxYzAzNDhiMDEzYzFkNTY3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMmurF4bI4q2nn9vzqDBQqcxQg_hKjFLp6RyrzNlAD0",
  },
};

const url = (nowUrl) => {
  return baseUrl + nowUrl + "?language=ko-kr";
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());
