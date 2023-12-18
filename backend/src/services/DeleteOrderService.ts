import prismaClient from "../prisma";

interface DeleteOrderProps {
  id: string;
}

class DeleteOrderService {
  async execute({ id }: DeleteOrderProps) {
    if (!id) {
      throw new Error("Solicitação Inválida");
    }

    const findOrder = await prismaClient.order.findFirst({
      where: {
        id: id,
      },
    });

    if (!findOrder) {
      throw new Error("Ordem inexistente");
    }

    await prismaClient.order.delete({
      where: {
        id: findOrder.id,
      },
    });

    return { message: "Order deleted" };
  }
}

export { DeleteOrderService };
