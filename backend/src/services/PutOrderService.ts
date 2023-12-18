import prismaClient from "../prisma";

interface PutOrderProps {
  id: string;
  dataToBeUpdated: {
    customer_name?: string;
    customer_email?: string;
    address?: string;
    products?: string;
    total?: number;
    status?: string;
  };
}

class PutOrderService {
  async execute({ id, dataToBeUpdated }: PutOrderProps) {
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

    const updatedOrder = await prismaClient.order.update({
      where: {
        id: findOrder.id,
      },
      data: dataToBeUpdated,
    });

    return updatedOrder;
  }
}

export { PutOrderService };
