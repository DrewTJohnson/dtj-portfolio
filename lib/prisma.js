import { PrismaClient } from "@prisma/client";

const prismaClientSignleton = () => {
  return new PrismaClient();
}

export const prisma = globalThis.prisma ?? prismaClientSignleton();

if ( process.env.NODE_ENV !== 'production' ) globalThis.prisma = prisma;
