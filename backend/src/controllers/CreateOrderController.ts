import { FastifyRequest, FastifyReply } from "fastify";
import { CreateOrderService } from "../services/CreateOrderService";

class CreateOrderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { customer_name, customer_email, address, products, total } =
      request.body as {
        customer_name: string;
        customer_email: string;
        address: string;
        products: string;
        total: number;
      };
    const orderService = new CreateOrderService();

    const order = await orderService.execute({
      customer_name,
      customer_email,
      address,
      products,
      total,
    });

    reply.send(order);
  }
}

export { CreateOrderController };
