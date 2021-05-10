const { text } = require("express");
const request = require("supertest")
const app = require("../index")

describe("GET /", () => {
    test("status code should be 200", async done => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        done();
    })

    test("response body should be defined", async done => {
        const response = await request(app).get("/");
        expect(response.body).toBeDefined();
        done();
    })

    test("show tables response body should have properties", async done => {
        headers = ['access', 'action', 'artifact', 'metadata', 'project', 'task', 'user']

        const response = await request(app).get("/?sql=show%20tables");
        expect(response.text).toContain('Tables_in_b2v6pffi6qrk4ubk');
        headers.forEach(header => {
            expect(response.text).toContain(header);
        })
        done();
    })

    test("if there is no sql syntax error message should not appear", async done => {
        const response = await request(app).get("/?sql=show%20tables");
        expect(response.text).not.toContain("You have an error in your SQL syntax");
        done();
    })

    test("if there is an sql syntax error message should appear", async done => {
        const response = await request(app).get("/?sql=sql%20syntax%20error");
        expect(response.text).toContain("You have an error in your SQL syntax");
        done();
    })

    text("if there is unknown column in table message should appear", async done => {
        const response = await request(app).get("/?sql=select%20abcd%from%20user");
        expect(response.text).toContain("Unknown column");
        done();
    })

    test("if query is empty message should appear", async done => {
        const response = await request(app).get("/?sql=");
        expect(response.text).toContain("Query was empty");
        done();
    })
});
