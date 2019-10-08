import * as express from "express"
import { Server, Path, GET, PathParam } from "typescript-rest"
var fs = require("fs")

enum ddd {
  Schema,
  UJnDer,
}

@Path("/home")
class HelloService {
  @Path(":name")
  @GET
  sayHello(@PathParam("name") name: string): string {
    return "hello" + name
  }
}
class SwaggerService {
  @Path("/swagger.json")
  @GET
  swagger(): string {
    return fs.readFileSync("./swagger/swagger.json", "utf8")
  }
}
let app: express.Application = express()
Server.buildServices(app)

app.listen(3000, function() {
  console.log("Rest Server listening on port 3000!")
})
