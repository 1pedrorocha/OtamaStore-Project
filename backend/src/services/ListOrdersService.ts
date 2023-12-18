import prismaClient from "../prisma";

class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany();

    return orders;
  }
}

export { ListOrdersService };
