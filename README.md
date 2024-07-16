# Kafka Stock Price Example

## Student, Instructor and Course
- Student Name - Harsingh
- Instructor Name - Prashant Sharma
- Course - Emerging Trends (INTP-302-C)

## Introduction
This project demonstrates a simple data pipeline using Kafka for messaging and Docker for containerization to track real-time stock prices.

## Prerequisites

- Docker
- Node.js and npm

## Setup

1. **Clone the repository:**

    ```sh
    git clone <repository_url>
    cd kafka-stock-price
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start Kafka and Zookeeper:**

    ```sh
    docker-compose up -d
    ```

4. **Run the Producer:**

    ```sh
    npm run producer
    ```

5. **Run the Consumer:**

    ```sh
    npm start
    ```

6. **Open the web page:**

    Navigate to `http://localhost:3000` in your browser to see real-time stock prices.

## Project Structure

- `producer.js`: Simulates stock prices and posts messages to Kafka.
- `consumer.js`: Consumes messages from Kafka and sends them to the web page via Socket.io.
- `server.js`: Serves the web page and handles WebSocket connections using Socket.io.
- `public/index.html`: The web page to display stock prices.
- `public/scripts.js`: Client-side script to handle WebSocket messages.
- `public/styles.css`: Basic styling for the web page.
- `docker-compose.yml`: Docker Compose file to set up Kafka and Zookeeper.
- `README.md`: This file.

## Notes

- Ensure Kafka and Zookeeper are running before starting the producer and consumer.
- The consumer also starts a WebSocket server to send data to the web page.
