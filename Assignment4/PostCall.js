var request = require('request');
const assert = require('assert');

request.post(
    'https://jsonplaceholder.typicode.com/posts',
    { json: { title: 'foo', body: 'bar', userId: 1 } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        assert.equal(201, response.statusCode)
        console.log("Status:",response.statusCode)
        assert.equal(1, response.body.userId)
        console.log("userId:",response.body.userId)

    }

);
