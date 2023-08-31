"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type User = {
    image: string
}

export default function LoggedIn({ image }: User) {
  return (
    <li className="flex gap-4 items-center">
      <Button variant={"outline"}
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
      <Link href={"/dashboard"}>
        <Image className="w-12 rounded-full" width={64} height={64} alt="user image" src={image} priority></Image>
      </Link>
    </li>
  );
}
