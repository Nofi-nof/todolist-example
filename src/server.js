import { app } from './app.js'

/**
 * Run the server!
 */
const start = async () => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
  }
}
start()
