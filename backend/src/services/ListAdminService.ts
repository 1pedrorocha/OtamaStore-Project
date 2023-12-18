import prismaClient from "../prisma";

class ListAdminService {
  async execute() {
    const orders = await prismaClient.admin.findMany();

    return orders;
  }
}

export { ListAdminService };
