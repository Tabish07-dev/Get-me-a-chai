


"use client"
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white flex-col items-center h-[44vh] gap-4 px-4">
        <div className="font-bold text-3xl md:text-6xl flex gap-2 justify-center items-center text-center">
          Get me a Chai{" "}
          <span>
            <Image src="/tea.gif" width={88} height={88} alt="Tea" unoptimized />
          </span>
        </div>
        <p className="text-center text-sm md:text-base max-w-2xl">
          A Crowdfunding platform for creators. Get funded by your fans and
          followers. Start now!
        </p>

        <div>
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start here
            </button>
          </Link>
          <button
            type="button"
            onClick={() => {
              document.getElementById('learn-more').scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-16 md:py-32 px-4">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-14">
          Your fans can buy you a chai
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-around items-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/man.gif"
              alt="Man"
              unoptimized
            />
            <p className="font-bold">Fund yourself</p>
            <p className="text-center">
              Your fans are available for you to help you
            </p>
          </div>
          <div className="item space-y-3  flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/coin.gif"
              alt="Coin"
              unoptimized
            />
            <p className="font-bold">Earn money</p>
            <p className="text-center">
              Receive support from your community
            </p>
          </div>
          <div className="item space-y-3  flex flex-col items-center justify-center">
            <Image
              className="bg-slate-400 rounded-full p-2 text-black"
              width={88}
              height={88}
              src="/group.gif"
              alt="Group"
              unoptimized
            />
            <p className="font-bold">Build community</p>
            <p className="text-center">
              Grow together with your supporters
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div id="learn-more" className="text-white container mx-auto py-32 pt-14 pb-32 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h1>

        <div className="w-full max-w-2xl">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/bAV8_Of7nLU?si=C8RZ5oB-TrN3utar"
            title="YouTube video player"
            style={{border: 'none', aspectRatio: '16/9'}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg w-full"
          ></iframe>
        </div>
      </div>
    </>
  );
}