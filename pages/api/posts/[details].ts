import prisma from '../../../prisma/client'
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {   
    // get users' posts
    try {
        
    } catch (err) {
      res.status(403).json({ err: "Error occurred while fetching users' post."});
    }
  }
}
