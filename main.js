import InitializeServer from "./src/server/server.js"
import { PORT } from "./src/config/Params.js"
import { DB_CLOUD_DEVELOP } from "./src/config/env.js"



await InitializeServer(PORT)
