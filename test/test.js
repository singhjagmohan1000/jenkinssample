/**
 * Created by gaggi on 4/22/17.
 */
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('Hello, How are You Jenkins Jagmohan', done);
    });
});
