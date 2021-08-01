export {};

const request = require("supertest")("http://localhost:5000/api/softonic");
const expect = require("chai").expect;

describe("GET /programs", function () {
  it("returns all programs, limited to 3 per page", async function () {
    const response = await request.get("/programs");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(3);
  });

  it("returns one program, ", async function () {
    const response = await request.get("/programs/21824");

    expect(response.status).to.eql(200);
    expect(response.body.data.id).to.eql("21824");
  });

  it("returns error 404 if program not found, ", async function () {
    const response = await request.get("/programs/21824d");

    expect(response.status).to.eql(404);
    expect(response.body.data.length).to.eql(0);
  });
});