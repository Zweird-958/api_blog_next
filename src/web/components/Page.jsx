import AppContext from "@/web/components/AppContext"
import Link from "next/link"
import { useContext } from "react"

const Page = (props) => {
  const { children } = props
  const {
    actions: { signOut },
    state: session,
  } = useContext(AppContext)

  return (
    <>
      <div className="mx-auto flex justify-between py-2 text-xl font-bold sm:max-w-sm sm:px-3 md:px-1">
        <Link href="/">BLOG</Link>{" "}
        {session ? (
          <button
            onClick={() => {
              signOut()
            }}
          >
            Sign Out
          </button>
        ) : (
          <div>
            <Link className="mx-2" href="/sign-in">
              Sign In
            </Link>
            <Link href="/sign-up">Sign Up</Link>
          </div>
        )}
      </div>
      <hr className="border-2 border-b-blue-500" />
      {children}
    </>
  )
}

export default Page
