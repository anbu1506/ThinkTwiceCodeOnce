import { PrismaClient } from '@prisma/client';

// @ts-ignore
globalThis['prisma'] = globalThis['prisma'] || new PrismaClient();  // globalThis is a global object in Node.js
// @ts-ignore
const prisma = globalThis['prisma'];

export default prisma;