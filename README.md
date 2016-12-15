# ipaddr_mgmt_by_node.js

## Pre-Requisite

* http://expressjs.com/en/starter/installing.html
* https://www.npmjs.com/package/body-parser

## Usage

- server

```
node server.js
```

- client

- GET
```
curl -s http://127.0.0.1:8081/list_ipaddr
```

- POST
```
cat IP.JOSN | curl -s http://127.0.0.1:8081/req_ipaddr -X POST -d @-
```

