import { afterAll, expect, test } from "vitest";
import { app } from "./app";
import { load } from "cheerio";

test("Hello Worldが返却されること", async () => {
  const response = await app.inject({
    method: "GET",
    url: "/"
  });

  expect(response.statusCode).toBe(200);
  expect(response.payload).toMatch(/hello world/);

  const $ = load(response.payload);
  expect($("h1").text().replace(/\n/g, "").trim()).toBe("hello world");
});

afterAll(async () => {
  await app.close();
});
