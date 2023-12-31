import SideNav from "../ui/home/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <div>
            <div className=" text-bold text-blue-500  text-xl md:text-3xl text-center  bg-slate-950 fixed top-0 right-0 left-0   py-4 shadow-lg shadow-blue-500/50"> Think Twice Code Once</div>
            <div className="fixed top-14 md:top-20 w-full h-12 md:h-full md:w-64"><SideNav></SideNav></div>
            <div className="md:ml-64 md:mt-20 mt-32">{children}</div>
        </div>
    </>)
}