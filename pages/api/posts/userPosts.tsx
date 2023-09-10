import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // get user from next-auth 
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to view your posts" });
   
    // get users' posts
    try {
      const data = await prisma.user.findUnique({
        where: {
            email: session.user?.email
        }
      })
        
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error occurred while making a post."});
    }
  }
}
