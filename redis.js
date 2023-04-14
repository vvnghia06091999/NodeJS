const { createClient } = require('redis');

const client = createClient({
    url: 'redis://localhost:6379'
});

client.on('error', err => console.log('Redis Client Error', err));

(async()=>{
    await client.connect();

    await client.setEx('Test', 3600, JSON.stringify({A: 1, B:2}));

    const data = await client.get('Test');
    console.log(data);

    client.disconnect();
})();