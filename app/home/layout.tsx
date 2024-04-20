import getUserAuth from "../lib/getUserAuth";
import NavBar from "../ui/NavBar";

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
        <div className=" md:pt-14 pt-20">{children}</div>
      </div>
    </>
  );
}
