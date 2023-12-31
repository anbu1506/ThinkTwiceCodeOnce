import SideNav from "../ui/home/sideNav";

export default function Test() {
    return (<>
        <div className="flex flex-col h-screen">
            <div className=" text-bold text-blue-500  text-xl md:text-3xl text-center  bg-slate-950 fixed top-0 right-0 left-0   py-4 shadow-lg shadow-blue-500/50"> Think Twice Code Once</div>
            <div className="flex flex-col md:flex-row mt-20 h-screen">
                <div className="md:w-64 w-full ">
                    <SideNav></SideNav>
                </div>
                <div className="p-2 w-full">
                    <p className="text-white">main page</p>
                </div>
            </div>
        </div>
    </>)
}