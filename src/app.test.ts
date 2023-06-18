import { afterAll, expect, test } from "vitest";
import { app } from "./app";

test("Hello Worldが返却されること", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/"
  });

  expect(response.statusCode).toBe(200);
  expect(response.payload).toBe("hello world");
});

afterAll(async () => {
  await app.close();
});
