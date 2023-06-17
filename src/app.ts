// ESM
import Fastify from "fastify";
const app = Fastify({
  logger: true
});

app.get("/", async () => {
  return "hello world";
});

export { app };
