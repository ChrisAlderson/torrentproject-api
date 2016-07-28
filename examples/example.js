// Import the neccesary modules.
const TorrentProjectAPI = require("../torrentproject-api");

const torrentProjectAPI = new TorrentProjectAPI();

// Search TorrentProject.
torrentProjectAPI.search({
  query: "ettv",
  filter: "tv",
  orderby: "best",
  num: 50,
  start: 0,
  safe: false
}).then(res => console.log(res))
  .catch(err => console.error(err));
