import SideNav from "../ui/home/sideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <div>
            <div className=" font-bold  text-2xl md:text-3xl  md: text-center  fixed top-0 right-0 left-0   py-4 shadow-lg text-white bg-slate-500"> Think Twice Code Once</div>
            <div className="fixed top-14 md:top-18 w-full h-12 "><SideNav></SideNav></div>
            <div className=" md:mt-20 mt-32">{children}</div>
        </div>
    </>)
}