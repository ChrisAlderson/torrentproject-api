# torrentproject-api

[![Build Status](https://travis-ci.org/ChrisAlderson/torrentproject-api.svg?branch=master)]()
[![Dependency Status](https://david-dm.org/ChrisAlderson/torrentproject-api.svg)](https://david-dm.org/ChrisAlderson/torrentproject-api)
[![devDependency Status](https://david-dm.org/ChrisAlderson/torrentproject-api/dev-status.svg)](https://david-dm.org/ChrisAlderson/torrentproject-api#info=devDependencies)

A NodeJS wrapper for the [torrentproject](https://torrentproject.se/) API.

## Usage

#### Setup
```
npm install --save torrentproject-api
```

#### Initialize
```js
const TorrentProjectAPI = require("torrentproject-api");

// Options are the request default options.
const torrentProjectAPI = new TorrentProjectAPI({[options, debug]});
```

#### Example usage
```js
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
```

## Output

```js
{
  "1": {
    "title": "Game.of.Thrones.S06E09.HDTV.x264-KILLERS[ettv]",
    "category": "tv",
    "seeds": 8134,
    "leechs": 268,
    "torrent_size": 434699970,
    "torrent_hash": "693f52edfe020c4707f935ba197bd9f437b960e3"
  },
  "2": {
    "title": "Game.of.Thrones.S06E08.HDTV.x264-KILLERS[ettv]",
    "category": "tv",
    "seeds": 6848,
    "leechs": 206,
    "torrent_size": 374985030,
    "torrent_hash": "0ddf5052c1c580a129598186e05c494f45727881"
  },
  ...,
  "total_found": "32797"
}

```

# License

MIT License

Copyright (c) 2016 - torrentproject-api - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
