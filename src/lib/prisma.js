import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from '../generated/prisma';
// import {PrismaClient} from "@prisma/client/extension";
//  import { PrismaClient } from '@/lib/generated/prisma';
// import { PrismaClient } from "../prisma/generated/clientPg";
// import { PrismaClient } from 'app/generated/prisma/client'
//  import { PrismaClient } from 'generated/prisma';

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

const prisma = new PrismaClient();

const globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
