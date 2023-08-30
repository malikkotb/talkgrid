import { PrismaClient } from "@prisma/client"

// check if in production or not & creating a new prisma client (if it doesnt exist)
const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
