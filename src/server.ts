import "express-async-errors"
import  express  from "express"
import { handleApiError } from "@middleware/handleApiError"
import cors from "cors"
import * as routes from "@routes/index"
import { entryRequestLog } from "@middleware/entryRequestLog"
import  bodyParser from "body-parser"
import compression from "compression"

const server = express();

server.set("trust proxy", true)
server.use(cors())
server.use(express.urlencoded({extended:true}))
server.use(compression())
server.use(express.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(entryRequestLog)
Object.values(routes).forEach(routeFileReference => server.use(routeFileReference))
server.use(handleApiError)

export {server}