const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
    setInterval(() => {
        const stockPrice = (Math.random() * (200 - 100) + 100).toFixed(2);
        const payloads = [
            { topic: 'stock-price', messages: `NNTP: $${stockPrice}`, partition: 0 }
        ];
        producer.send(payloads, (err, data) => {
            if (err) console.log('Error:', err);
            else console.log('Data:', data);
        });
    }, 5000);
});

producer.on('error', (err) => {
    console.log('Error:', err);
});
