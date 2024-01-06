"use client"

import MatrixRain from "../ui/home/matrixRain";
import SideNav from "../ui/home/sideNav";
import Search from "../ui/search";
export default function Test() {
    return (<>
        <div className="h-screen w-screen">

            <MatrixRain></MatrixRain>
            <div>
                <div className=" text-bold text-blue-500 text-2xl  md: text-center  fixed top-0 right-0 left-0   py-4 shadow-lg bg-white"> Think Twice Code Once</div>
                <div className="fixed top-14 md:top-18 w-full h-12  "><SideNav></SideNav></div>
                <div className='fixed top-44'>

                    <Search ></Search>
                </div>
            </div>
        </div>
    </>)
}