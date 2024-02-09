# DUMEE Web Server
## HTTP Request and Response Test Server
## Description
This is a simple http server that can be used to test http requests. It can be used to test http requests from a client, to test http requests from a server, or to test http requests from a proxy.

## Usage
The server listens on port 3000. It has the following endpoints:

## Build
```bash
docker build -t zaydalzein/dumee-web-server .
```

## Run
```bash
docker run -d -p 3000:3000 zaydalzein/dumee-web-server
```

## Development
```bash
npm install
npm start
```

## Routes
- GET / - Returns a simple html page with a welcome message.
- GET /get - Returns the request headers and query parameters.
- GET /ip - Returns the client's IP address.
- GET /ip/:ip/:format? - Returns the details of the IP address.
- POST /post - Returns the request body.
- GET /health - Returns a simple health check message.


