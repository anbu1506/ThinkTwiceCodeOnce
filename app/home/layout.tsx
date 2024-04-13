import SideNav from "../ui/home/sideNav";
import getUserAuth from "../lib/getUserAuth";
import Profile from "../ui/home/profile";
import NavBar from "../ui/NavBar";
import BottomBar from "../ui/BottomBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await getUserAuth();
  return (
    <>
      <div>
        <NavBar></NavBar>
        <div className=" md:mt-14 mt-20">{children}</div>
      </div>
    </>
  );
}
