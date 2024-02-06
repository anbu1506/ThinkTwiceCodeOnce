"use client";

import { useEffect } from "react";

export default function Blinker() {
  useEffect(() => {
    const divs = document.querySelectorAll(".animate-pings");
    // console.log(divs.length);
    // function togglePingAnimation() {
    //   divs.forEach((div, index) => {
    //     setTimeout(() => {
    //       div.classList.toggle("animate-ping");
    //     }, index * 2000); // Adjust the delay (milliseconds) between each div here
    //   });
    // }

    // setInterval(togglePingAnimation, divs.length * 2000); // Restart animation sequence after completing all divs
    // togglePingAnimation(); // Start animation sequence initially
    async function blink() {
      for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("animate-ping");
        await sleep(1000);
        divs[i].classList.remove("animate-ping");
      }
    }
    setInterval(blink, 3000);
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-6 h-80 gap-5">
        <div className=" col-span-2 flex items-center justify-center">
          <div className="animate-pings text-3xl text-white border border-white h-32 w-32 rounded-full flex justify-center items-center bg-yellow-400 opacity-75">
            <p>Eat</p>
          </div>
        </div>
        <div className=" col-span-2 flex items-center justify-center">
          <div className="delay-700 animate-pings text-3xl text-white border border-white h-32 w-32 rounded-full flex justify-center bg-lime-500 items-center">
            <p>Code</p>
          </div>
        </div>
        <div className=" col-span-2 flex items-center justify-center">
          <div className="animate-pings text-3xl text-white border border-white h-32 w-32 rounded-full flex justify-center bg-red-600 items-center">
            <p>Sleep</p>
          </div>
        </div>
      </div>
    </>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
