import { describe, test, expect } from "@jest/globals";
import app from "../../app";
import supertest from "supertest";

const request = supertest(app);

test('should return json', async () => {
  await request.get("/api/v1/generate-jwt-secret").expect(200).expect("Content-Type", /application\/json/);
})
