import  prisma  from "@/lib/prisma";

export const ShopService = {
  getPublicPosts() {
    return prisma.shop.findMany({
      
    });
  },

  getBySlug(slug: string) {
    // return prisma.shop.findUnique({
      
    // });
  },

  getById(id: number) {
    return prisma.shop.findUnique({
      where: { id },
    });
  },

  getAll() {
    return prisma.shop.findMany({
      
    });
  },

  create(data: {
    name: string;
    content: string;
  }) {
    return prisma.shop.create({ data });
  },

  update(id: number, data: any) {
    return prisma.shop.update({
      where: { id },
      data,
    });
  },

  delete(id: number) {
    return prisma.shop.delete({
      where: { id },
    });
  },
};
