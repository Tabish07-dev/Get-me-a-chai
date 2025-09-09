"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [origin, setOrigin] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: ""
  })

  useEffect(() => {
    if (status === "loading") return 
    if (!session) {
      router.push('/login')
      return
    }
    
    setForm({
      name: session.user?.name || "Tabish Ali Soomro",
      email: session.user?.email || "",
      username: session.user?.name?.toLowerCase().replace(/\s+/g, '') || "Developertabi07",
      profilepic: session.user?.image || "/tabi.png.jpg",
      coverpic: "",
      razorpayid: "",
      razorpaysecret: ""
    })
  }, [session, status, router])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin)
    }
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('Profile updated successfully!')
  }

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null 
  }

  return (
    <div className="container mx-auto py-5 px-4">
      <h1 className="text-center my-5 text-3xl font-bold text-white">Welcome to your Dashboard</h1>
      
      <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
       
        <div className="my-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
          <input 
            value={form.name} 
            onChange={handleChange} 
            type="text" 
            name="name" 
            id="name" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter your name" 
          />
        </div>

        
        <div className="my-2">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
          <input 
            value={form.email} 
            onChange={handleChange} 
            type="email" 
            name="email" 
            id="email" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter your email" 
          />
        </div>

       
        <div className="my-2">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
          <input 
            value={form.username} 
            onChange={handleChange} 
            type="text" 
            name="username" 
            id="username" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter your username" 
          />
        </div>

       
        <div className="my-2">
          <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-white">Profile Picture URL</label>
          <input 
            value={form.profilepic} 
            onChange={handleChange} 
            type="text" 
            name="profilepic" 
            id="profilepic" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter profile picture URL" 
          />
        </div>

       
        <div className="my-2">
          <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-white">Cover Picture URL</label>
          <input 
            value={form.coverpic} 
            onChange={handleChange} 
            type="text" 
            name="coverpic" 
            id="coverpic" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter cover picture URL" 
          />
        </div>

       
        <div className="my-2">
          <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">Razorpay ID</label>
          <input 
            value={form.razorpayid} 
            onChange={handleChange} 
            type="text" 
            name="razorpayid" 
            id="razorpayid" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter Razorpay ID" 
          />
        </div>

        
        <div className="my-2">
          <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-white">Razorpay Secret</label>
          <input 
            value={form.razorpaysecret} 
            onChange={handleChange} 
            type="password" 
            name="razorpaysecret" 
            id="razorpaysecret" 
            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Enter Razorpay Secret" 
          />
        </div>

       
        <div className="my-6">
          <button 
            type="submit" 
            className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save
          </button>
        </div>
      </form>

     
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-slate-900 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-4">Your Profile Preview</h2>
        <div className="flex items-center gap-4">
          {form.profilepic && (
            <Image
              src={form.profilepic}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
          )}
          <div>
            <div className="text-white font-bold">{form.name || "Tabish Ali Soomro"}</div>
            <div className="text-slate-400">@{form.username || "Developertabi07"}</div>
            <div className="text-slate-400">{form.email || "tabish@example.com"}</div>
          </div>
        </div>
        {form.username && (
          <div className="mt-4">
            <p className="text-white">
              Your page URL: 
              <span className="text-blue-400 ml-2">
                {origin}/{form.username}
             <span className="text-blue-400 ml-2">
  {origin}/{form.username}
</span>

