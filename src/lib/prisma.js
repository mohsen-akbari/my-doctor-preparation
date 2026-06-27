// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// const globalForPrisma = globalThis;
// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// export default prisma;
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
