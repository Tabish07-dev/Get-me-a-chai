"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentUser, setCurrentUser] = useState({
    name: "Tabish Ali Soomro",
    email: "tabish@example.com",
    username: "Developertabi07",
    profilepic: "/tabi.png.jpg",
    coverpic: "",
    razorpayid: "",
    razorpaysecret: ""
  })

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const pay = async (amount) => {
    
    alert(`Payment of PKR ${amount} initiated for ${username}`)
  }

  return (
    <>
      <div className="cover w-full bg-red-50 relative">
        <Image 
          className="object-cover w-full h-48 md:h-[350px]" 
          width={1200} 
          height={350}
          src={currentUser.coverpic || "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=350"}
          alt="Cover" 
          unoptimized
        />
        <div className="absolute -bottom-20 right-[46%] md:right-[48%] border-white border-2 rounded-full">
          <Image 
            className="rounded-full object-cover" 
            width={150} 
            height={150}
            src={currentUser.profilepic || "/avatar.gif"} 
            alt="Profile" 
            unoptimized
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg text-white">@{username}</div>
        <div className="text-slate-400">Creating awesome content for everyone!</div>
        <div className="text-slate-400">{currentUser.name}</div>
        <div className="text-slate-400">
          <span className="font-bold">1,544</span> members • <span className="font-bold">PKR 45,450</span>/month
        </div>
      </div>

      <div className="payment flex gap-3 w-[80%] mx-auto flex-col md:flex-row">
        <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="text-2xl font-bold my-5">Top 10 Supporters</h2>
          <ul className="mx-5 text-lg">
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>CodeWithHarry donated <span className="font-bold">PKR 500</span> with a message "Keep up the great work! 🚀"</span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>Ubed donated <span className="font-bold">PKR 300</span> with a message "Amazing content bhai! 💯"</span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>Awais donated <span className="font-bold">PKR 250</span> with a message "Love your tutorials! ❤️"</span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>Afaq donated <span className="font-bold">PKR 400</span> with a message "Best teacher ever! 🔥"</span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>Ahmed donated <span className="font-bold">PKR 200</span> with a message "Thanks for free content! 🙏"</span>
            </li>
            <li className="my-4 flex gap-2 items-center">
              <Image width={33} height={33} src="/avatar.gif" alt="user avatar" />
              <span>Hassan donated <span className="font-bold">PKR 350</span> with a message "Bohat helpful hai! 👍"</span>
            </li>
          </ul>
        </div>

        <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            <div>
              <input 
                onChange={handleChange} 
                value={paymentform.name} 
                name="name" 
                type="text" 
                className="w-full p-3 rounded-lg bg-slate-800" 
                placeholder="Enter Name" 
              />
            </div>
            <input 
              onChange={handleChange} 
              value={paymentform.message} 
              name="message" 
              type="text" 
              className="w-full p-3 rounded-lg bg-slate-800" 
              placeholder="Enter Message" 
            />
            <input 
              onChange={handleChange} 
              value={paymentform.amount} 
              name="amount" 
              type="text" 
              className="w-full p-3 rounded-lg bg-slate-800" 
              placeholder="Enter Amount" 
            />
            <button 
              type="button" 
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:from-purple-100" 
              disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
              onClick={() => pay(Number.parseInt(paymentform.amount))}
            >
              Pay
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-5">
            <button
              className="bg-slate-800 p-3 rounded-lg"
              onClick={() => pay(100)}
            >
              Pay PKR 100
            </button>
            <button
              className="bg-slate-800 p-3 rounded-lg"
              onClick={() => pay(250)}
            >
              Pay PKR 250
            </button>
            <button
              className="bg-slate-800 p-3 rounded-lg"
              onClick={() => pay(500)}
            >
              Pay PKR 500
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage
