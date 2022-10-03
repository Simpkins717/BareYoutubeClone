import axios from "axios";

const KEY = "AIzaSyBHSY8NtVyHXcBYHy2xnBR1HCsB46nwwH0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
