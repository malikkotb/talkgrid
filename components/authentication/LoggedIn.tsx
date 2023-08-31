"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type User = {
    image: string
}

export default function LoggedIn({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-black bg-opacity-10 hover:bg-opacity-20 py-2 px-4 rounded-lg"
      >
        Sign Out
      </button>
      <Link href={"/dashboard"}>
        <Image className="w-14 rounded-full" width={64} height={64} alt="user image" src={image} priority></Image>
      </Link>
    </li>
  );
}
