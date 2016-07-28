const chai = require('chai');
const assert = chai.assert;
const TorrentProjectAPI = require("../torrentproject-api");

describe("TorrentProject", () => {

  let torrentProjectAPI, data;
  before(() => {
    torrentProjectAPI = new TorrentProjectAPI({debug: true});

    data = {
      query: "ettv",
      filter: "tv",
      orderby: "best",
      num: 50,
      start: 0,
      safe: false
    };
  });

  it("Should get an object with torrents", done => {
    torrentProjectAPI.search(data).then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

});
