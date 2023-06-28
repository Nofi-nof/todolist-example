// ESM
import Fastify from "fastify";
import ejs from "ejs";
import view from "@fastify/view";

const app = Fastify({
  logger: true
});

app.register(view, {
  engine: {
    ejs
  }
});

app.get("/", (_, response) => {
  response.view("/src/views/index.ejs", { hello: "hello world" });
});

export { app };
