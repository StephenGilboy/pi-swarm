const express = require('express');
const os = require('os');
const redis = require('redis');
const app = express();
const redisConfig = {
  port: process.env.REDIS_PORT || 6379,
  host: process.env.REDIS_HOST || '127.0.0.1',
};
const client = redis.createClient(redisConfig.port, redisConfig.host);

client.set('count', 0);

app.get('/', (req, res) => {
  client.get('count', function(err, reply){
    if (err) {
      res.status(500).send(`<h1>Error</h1><p>${JSON.stringify(err)}</p>`);
    } else {
      reply = parseInt(reply) + 1;
      client.set('count', reply);
      res.status(200).send(`<h1>Hello, Pi! I'm ${os.hostname()}</h1><h2>Count: ${reply}</h2>`);
    }
  });
});

app.listen(8000);