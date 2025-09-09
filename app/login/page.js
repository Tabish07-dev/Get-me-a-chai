"use client"
import React, { useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    document.title = "Login - Get Me A Chai"
    if (session) {
      router.push("/dashboard")
    }
  }, [session, router])

  return (
    <div className="text-white py-8 md:py-14 container mx-auto px-4">
      <h1 className="text-center font-bold text-2xl md:text-3xl mb-8">
        Login to Get Started
      </h1>

      <div className="flex flex-col gap-4 min-h-screen items-center p-4 md:p-10">
        {/* Google */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.5 0 48 48"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M9.8,24c0-1.52,0.25-2.98,0.7-4.36L2.6,13.6C1.08,16.73,0.2,20.26,0.2,24c0,3.74,0.87,7.26,2.41,10.39l7.9-6.05C10.1,26.97,9.8,25.52,9.8,24"
                fill="#FBBC05"
              />
              <path
                d="M23.7,10.13c3.31,0,6.3,1.17,8.65,3.09L39.2,6.4c-4.16-3.63-9.5-5.87-15.5-5.87c-9.29,0-17.27,5.31-21.1,13.07l7.9,6.04c1.82-5.53,7.02-9.51,13.2-9.51"
                fill="#EB4335"
              />
              <path
                d="M23.7,37.87c-6.16,0-11.35-3.98-13.2-9.51l-7.9,6.04C6.44,42.16,14.43,47.47,23.7,47.47c5.74,0,11.21-2.04,15.3-5.85l-7.5-5.8c-2.12,1.34-4.79,2.05-7.8,2.05"
                fill="#34A853"
              />
              <path
                d="M46.15,24c0-1.39-0.21-2.88-0.53-4.27H23.7v9.07h12.6c-0.63,3.09-2.34,5.47-4.78,7.04l7.5,5.8C43.34,37.61,46.15,31.65,46.15,24"
                fill="#4285F4"
              />
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => alert("LinkedIn login not configured yet")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <span className="mr-2">🔗</span>
          <span>Continue with LinkedIn</span>
        </button>

        {/* Twitter */}
        <button
          onClick={() => alert("Twitter login not configured yet")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <span className="mr-2">🐦</span>
          <span>Continue with Twitter</span>
        </button>

        {/* Facebook */}
        <button
          onClick={() => alert("Facebook login not configured yet")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <span className="mr-2">📘</span>
          <span>Continue with Facebook</span>
        </button>

        {/* Github */}
        <button
          onClick={() => signIn("github")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <span className="mr-2">🐙</span>
          <span>Continue with Github</span>
        </button>

        {/* Apple */}
        <button
          onClick={() => alert("Apple login not configured yet")}
          className="flex items-center w-full max-w-xs bg-slate-50 text-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          <span className="mr-2">🍎</span>
          <span>Continue with Apple</span>
        </button>
      </div>
    </div>
  )
}

export default Login
