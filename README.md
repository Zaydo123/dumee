# DUMEE Web Server

## Overview
DUMEE is a lightweight HTTP server designed for testing HTTP request and response interactions. It serves as a tool for developers to test the behavior of HTTP requests originating from clients, servers, or proxies in a simple and straightforward manner.

## Getting Started

### Cloning the Repository
To get started with DUMEE, clone the repository to your local machine:
```
git clone https://github.com/Zaydo123/dumee
```

## Installation and Usage

### Building with Docker
Build the DUMEE web server Docker image using the following command:
```bash
docker build -t zaydalzein/dumee-web-server .
```

### Running the Server
Launch the DUMEE web server as a Docker container:
```bash
docker run -d -p 3000:3000 zaydalzein/dumee-web-server
```

### Local Development Setup
For development purposes, install dependencies and start the server locally:
```bash
npm install
npm start
```

## Available Routes
DUMEE listens on port 3000 and provides the following endpoints for HTTP request testing:

- `GET /`: Displays a simple HTML page with a welcome message.
- `GET /get`: Shows request headers and query parameters.
- `GET /ip`: Returns the client's IP address.
- `GET /ip/:ip/:format?`: Provides details of the specified IP address.
- `POST /post`: Echoes the request body back to the client.
- `GET /health`: Performs a simple health check and responds with a status message.