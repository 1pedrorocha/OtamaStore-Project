import { FastifyRequest, FastifyReply } from "fastify";
import { ListAdminService } from "../services/ListAdminService";

class ListAdminController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listAdminService = new ListAdminService();

    const orders = await listAdminService.execute();

    reply.send(orders);
  }
}

export { ListAdminController };
