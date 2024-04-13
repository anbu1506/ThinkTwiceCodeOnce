import Profile from "./home/profile";
import SideNav from "./home/sideNav";

export default function NavBar() {
  return (
    <>
      <div className="fixed top-0 w-full  flex flex-col md:flex-row shadow-md bg-neutral-950 border-b border-b-slate-50 md:border-none z-50">
        <div className="flex items-center justify-center">
          <Profile />
          <p className="text-white font-semibold">Think Twice Code Once</p>
        </div>
        <SideNav></SideNav>
      </div>
    </>
  );
}
