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
        <div className=" md:mt-20 mt-32">{children}</div>
      </div>
    </>
  );
}
