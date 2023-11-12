const app = require('./server');
import request from 'supertest';

describe("test our express server", () => {
    it("get my server message for '/' route", () => {
        request(app)
        .get('/')
        .expect(200)
    })
    test("", ()=> {
        expect(1).toBe(1);
    })
})