import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { ListOrdersController } from "./controllers/ListOrdersController";
import { DeleteOrderController } from "./controllers/DeleteOrderController";
import { PutOrderController } from "./controllers/PutOrderController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  //   ROUTES

  //   test
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  //   post
  fastify.post(
    "/order",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateOrderController().handle(request, reply);
    }
  );

  // get
  fastify.get(
    "/orders",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListOrdersController().handle(request, reply);
    }
  );

  // delete
  fastify.delete(
    "/order",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteOrderController().handle(request, reply);
    }
  );

  // atualizar
  fastify.put(
    "/order/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new PutOrderController().handle(request, reply);
    }
  );
}
