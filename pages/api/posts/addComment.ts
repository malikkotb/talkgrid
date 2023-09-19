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
      return res
        .status(401)
        .json({ message: "Please sign in to delete a post posts" });
    // get user
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // add a new comment
    try {
      const { title, postId } = req.body.data;

      if (!title.length) {
        return res.status(401).json({ message: "Please enter something" });
      }

      const result = await prisma.comment.create({
        data: {
          message: title,
          userId: prismaUser?.id,
          postId,
        },
      });

      res.status(200).json(result);
    } catch (err) {
      res.status(403).json({ err: "Error occurred while deleting your post." });
    }
  }
}
