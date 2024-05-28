import { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/conctact.usecase";
import { Contact, ContactCreate } from "../interfaces/contacts.interface";
import { authMiddleware } from "../middleware/auth.middleware";

export async function contactsRoutes(fastify: FastifyInstance) {
  const contactUseCase = new ContactUseCase();

  fastify.addHook("preHandler", authMiddleware);

  fastify.post<{ Body: ContactCreate }>("/", async (req, reply) => {
    const { name, email, phone, userEmail } = req.body;

    const emailUser = req.headers["email"];

    try {
      const data = await contactUseCase.create({
        name,
        email,
        phone,
        userEmail,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get("/", async (req, reply) => {
    const emailUser = req.headers["email"];
    try {
      const data = await contactUseCase.listAllContacts(emailUser);
      reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.put<{ Body: Contact; Params: { id: string } }>(
    "/:id",
    async (req, reply) => {
      const { id } = req.params;
      const { name, email, phone } = req.body;
      try {
        const data = await contactUseCase.updateContact({
          id,
          name,
          email,
          phone,
        });
        return reply.send(data);
      } catch (error) {
        reply.send(error);
      }
    }
  );

  fastify.delete<{ Params: { id: string } }>("/:id", async (req, reply) => {
    try {
      const { id } = req.params;
      const data = await contactUseCase.delete(id);
      reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
