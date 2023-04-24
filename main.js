import InitializeServer from "./src/server/server.js"
import { SERVER_PORT } from "./src/config/params.js"



await InitializeServer(SERVER_PORT)
