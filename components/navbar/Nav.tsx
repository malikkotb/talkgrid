import Link from "next/link";
import Login from "./Login";
import LoggedIn from "./LoggedIn";

import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next";
import { ModeToggle } from "./ModeToggle";


export default async function Nav() {
  const session = await getServerSession(authOptions)
 

  return (
    <header className="relative top-0 z-50">
      <nav className="px-6 md:px-6 py-3 md:max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link href={"/"}>
          <h1 className="font-bold text-lg">TalkGrid</h1>
          {/* This will stay a server component to have server-side auth, by
          rendering a client component in here: Login.tsx */}
        </Link>
        <ul className="flex items-center gap-6">
          {/* only display <Login/> if there's no user currently signed up */}
          {!session?.user && <Login />}
          {session?.user && <h1><LoggedIn image={session.user?.image || ""} /></h1>}
        </ul>
        <ModeToggle />
      </nav>
    </header>
  );
}
