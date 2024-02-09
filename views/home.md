# Welcome to DUMEE Web Server

DUMEE is your go-to HTTP server for testing requests and responses across various scenarios. Effortlessly simulate client, server, and proxy interactions with our simple yet powerful endpoints.

## Explore Our Endpoints

- **Homepage**
  - [Welcome Page](/)
- **Request & Response Testing**
  - [Get Request Headers and Query Parameters](/get)
  - [Get Client's IP Address](/ip)
  - [Get Details of an IP Address](/ip/1.1.1.1/json)
  - [Post Request Body (/post)](/post)
- **Server Health**
  - [Health Check](/health)

## Quick Start

1. **Clone the Repository:** `git clone https://github.com/Zaydo123/dumee`
2. **Build with Docker:** `docker build -t zaydalzein/dumee-web-server .`
3. **Run the Server:** `docker run -d -p 3000:3000 zaydalzein/dumee-web-server`
4. **Visit the Endpoints:** Start testing your HTTP requests using the links above.

Get started with DUMEE today and streamline your HTTP request testing process!