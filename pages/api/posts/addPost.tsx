import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to make a post" });

    console.log("message: ", req.body);
    const title: string = req.body.title;

    // Get user with this unique email
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // Validation of request
    // Check title
    if (title.length > 300)
      return res.status(403).json({ message: "Post is too long!" });
    if (!title.length)
      return res.status(403).json({ message: "Content can't be empty." });

    // Create the new post (if validation successfull)
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser.id,
        },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error occurred while making a post."});
    }
  }
}
