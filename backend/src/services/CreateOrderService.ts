import prismaClient from "../prisma";

interface CreateOrderProps {
  customer_name: string;
  customer_email: string;
  address: string;
  products: string;
  total: number;
}

class CreateOrderService {
  async execute({
    customer_name,
    customer_email,
    address,
    products,
    total,
  }: CreateOrderProps) {
    if (!customer_name || !customer_email || !address || !products || !total) {
      throw new Error("Requisição incompleta");
    }

    const order = await prismaClient.order.create({
      data: {
        customer_name,
        customer_email,
        address,
        products,
        total,
        status: "Em aberto",
      },
    });

    return order;
  }
}

export { CreateOrderService };
