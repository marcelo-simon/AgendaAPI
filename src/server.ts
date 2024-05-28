import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "./routes/user.routes";
import { contactsRoutes } from "./routes/contacts.routes";

//const app: FastifyInstance = fastify();
const app: FastifyInstance = fastify({ logger: true });

app.register(userRoutes, {
  prefix: "/users",
});

app.register(contactsRoutes, {
  prefix: "/contacts",
});

app.listen(
  {
    port: 3100,
  },
  () => console.log("Server is running on port 3100")
);
