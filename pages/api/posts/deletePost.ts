import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // get user from next-auth 
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to view your posts" });
   
    // get users' posts
    try {
      const data = await prisma.user.findUnique({ // find the user
        where: {
            email: session.user?.email
        },
        include: { 
            posts: { // get all the users' posts
                orderBy: {
                    createdAt: 'desc'
                },
                include: { // and include the comments on those posts 
                    comments: true,
                }
            }
        }

      })
        
      res.status(200).json(data);
    } catch (err) {
      res.status(403).json({ err: "Error occurred while fetching users' post."});
    }
  }
}
