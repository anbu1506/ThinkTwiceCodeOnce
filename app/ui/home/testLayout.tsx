import SideNav from "@/app/ui/home/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <div className="flex flex-col">
            <div className=" text-bold text-blue-500  text-xl md:text-3xl text-center  bg-slate-950 fixed top-0 right-0 left-0   py-4 shadow-lg shadow-blue-500/50"> Think Twice Code Once</div>
            <div className="flex flex-col md:flex-row  ">
                <div className="md:w-64 w-full ">
                    <SideNav></SideNav>
                </div>
                <div className="p-2 w-full md:overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    </>)
}