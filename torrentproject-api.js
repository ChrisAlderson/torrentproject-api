"use strict";

const req = require("request");
const querystring = require("querystring");

const defaultOptions = {
  baseUrl: "https://torrentproject.se/",
  timeout: 3 * 1000
}

module.exports = class TorrentProjectAPI {

  constructor({options = defaultOptions, debug = false} = {}) {
    this.request = req.defaults(options);
    this.debug = debug;

    this.filterMap = {
      "all": 9000,
      "audio": 1000,
      "lossless": 1101,
      "mp3": 1102,
      "video": 2000,
      "tv": 2101,
      "dvdrip": 2102,
      "hdrip": 2103,
      "dvd": 2104,
      "lq": 2105,
      "ebooks": 3000,
      "comics": 3101,
      "magazines": 3102,
      "tutorials": 3103,
      "audiobook": 3104,
      "images": 4000,
      "mobile": 5000,
      "games": 6000,
      "pc": 6101,
      "nintendo": 6102,
      "playstation": 6103,
      "xbox": 6104,
      "applications": 7000,
      "adult": 8000
    };

    this.orderByMap = {
      "best": "best",
      "seeders": "seeders",
      "peers": "peers",
      "speed": "speed",
      "sized": "sized",
      "sizea": "sizea",
      "latest": "latest",
      "oldest": "oldest",
    }
  };

  get(qs, retry = true) {
    if (this.debug) console.warn(`Making request with querystring: '${querystring.stringify(qs)}'`);
    return new Promise((resolve, reject) => {
      this.request.get({ uri: "", qs }, (err, res, body) => {
        if (err && retry) {
          return resolve(this.get(qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found on querystring: '${querystring.stringify(qs)}', statuscode: ${res.statusCode}`));
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  };

  getFilter(filter) {
    if (isNaN(filter)) filter = this.filterMap[filter.toLowerCase()];
    if (!filter) throw new Error(`${filter} is not a valid option for field filter!`);
    return filter;
  };

  search({query, filter, orderby, num = 20, start = 0, safe = true} = {}) {
    if (orderby && !this.orderByMap[orderby.toLowerCase()]) return new Error(`${orderby} is not a valid option for field orderby!`);
    if (filter) filter = this.getFilter(filter);
    if (num && num < 0) return new Error(`Field num must be greater than 0!`);
    if (start && start < 0) return new Error(`Field start must be greater than 0!`);
    if (safe) {
      safe = "on"
    } else {
      safe = "off";
    }

    return this.get({ s: query, filter, orderby, num, start, safe, out: "json" });
  };

};
