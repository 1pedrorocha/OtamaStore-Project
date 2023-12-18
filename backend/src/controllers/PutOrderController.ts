import { FastifyRequest, FastifyReply } from "fastify";
import { PutOrderService } from "../services/PutOrderService";

interface DataToBeUpdatedType {
  customer_name?: string;
  customer_email?: string;
  address?: string;
  products?: string;
  total?: number;
  status?: string;
}

class PutOrderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const { id } = request.params as { id: string };
      const dataToBeUpdated = request.body as DataToBeUpdatedType;

      const putOrderService = new PutOrderService();
      const result = await putOrderService.execute({ id, dataToBeUpdated }); // Passando um único objeto

      return reply.code(200).send(result);
    } catch (error) {
      return reply.code(500).send({ message: "Ocorreu algum problema" });
    }
  }
}

export { PutOrderController };
