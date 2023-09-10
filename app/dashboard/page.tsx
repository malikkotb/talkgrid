import { getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"

export default async function page() {
  // get userName from next-auth
  const session = await getServerSession(authOptions)
  if (!session) {
    // if no activer session -> so no user is currently logged in -> redirect the user to sign in page
    redirect('/api/auth/signin')
  } 

  // in dashboard -> show only posts of the user who is currently logged in 

  return (
      <main>
        <h1 className=" text-2xl font-bold">Welcome back {session.user?.name}!</h1>
      </main>
    )
}
