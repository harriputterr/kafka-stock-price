const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
    client,
    [{ topic: 'stock-price', partition: 0 }],
    { autoCommit: true }
);

const { io } = require('./server');

consumer.on('message', (message) => {
    console.log('Message:', message.value);
    io.emit('stock-price', message.value);
});
