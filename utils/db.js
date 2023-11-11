const { PrismaClient } = require("@prisma/client");

// Instantiate Prisma Client
const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;

const db = globalForPrisma.prisma || prismaClientSingleton();

module.exports = db;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
