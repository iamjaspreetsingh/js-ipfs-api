# JS IPFS API - Example Browser - Add File

## Setup

Install [go-ipfs](https://ipfs.io/docs/install/) and run it

```bash
$ ipfs daemon
```

Set CORS so api can access your node [https://github.com/ipfs/ipfs/issues/75#issuecomment-131293095]((more info)).
```bash
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```

then in this folder run

```bash
$ npm install
$ npm start
```

and open your browser at `http://localhost:8888`
