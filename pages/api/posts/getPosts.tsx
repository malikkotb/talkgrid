import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

// get all Posts to display in Home page
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get (fetch) all of the posts
    try {
      // findMany lets you fetch all entries
      const result = await prisma.post.findMany({
        include: {
          user: true, 
          Comment: true,
        },
        orderBy: {
          createdAt: "desc",
        }
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error fetching posts." });
    }
  }
}
