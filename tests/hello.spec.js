import server from "~/src/server";
import chai from "chai";
import request from "supertest";

const expect = chai.expect;
describe("hello endpoint", () => {
  it("should return greeting", async () => {
    var resp = await request(server)
      .get("/")
      .expect(200);

    expect(resp.text).to.equal("Hello World!");
  });
});

