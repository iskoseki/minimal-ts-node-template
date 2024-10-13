import request from "supertest";
import { type Express } from "express";
import createApp  from "../createApp";

describe("/api/stock", () => {
    let app: Express = createApp();
    beforeAll(() => {
        app = createApp();
    })
    it("should return an empty array", async () => {
        const response = await request(app).get("/api/stock");
        expect(response.body).toEqual([])
    })
})
