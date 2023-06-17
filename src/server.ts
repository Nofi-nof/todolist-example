import { app } from "./app";

/**
 * Run the server!
 */
const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
  }
};
start();
