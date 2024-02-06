import SideNav from "../ui/home/sideNav";
import getUserAuth from "../lib/getUserAuth";
import Profile from "../ui/home/profile";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUserAuth();
  return (
    <>
      <div>
        <div className="fixed top-0 w-full  flex flex-col md:flex-row shadow-md bg-neutral-950 border-b border-b-slate-50 md:border-none z-50">
          <div className="flex items-center justify-center">
            <Profile />
            <p className="text-white font-semibold">Think Twice Code Once</p>
          </div>
          <SideNav></SideNav>
        </div>
        <div className=" md:mt-20 mt-32">{children}</div>
      </div>
    </>
  );
}
