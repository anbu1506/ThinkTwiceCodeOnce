import Link from "next/link";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";
import TopTen from "./ui/topTen";
import LoginBtn from "./ui/loginBtn";
import { redirectIfAuthenticated } from "./lib/getUserAuth";
import About from "./ui/About";
import Blinker from "./ui/Blinker";

export default async function Root({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  await redirectIfAuthenticated();

  return (
    <div>
      <div className="flex fixed top-0 right-0 left-0 text-bold text-white text-2xl md:text-3xl text-center  py-4 shadow-lg bg-neutral-950 justify-between z-50">
        <Link href={"/"}>Think Twice Code Once</Link>
        <div>
          <LoginBtn></LoginBtn>
        </div>
      </div>
      <div className="h-screen">
        <div className="mt-40">
          <h1 className="text-center my-6 text-slate-50 ">
            Welcome to the <strong>Think Twice Code Once</strong> platform.
          </h1>
        </div>
        <div className="">
          <Search />
        </div>
        <div className="flex justify-center">
          <SearchPreview searchParams={searchParams}></SearchPreview>
        </div>
        <Blinker></Blinker>
      </div>

      <About></About>
      {/* <TopTen></TopTen> */}
    </div>
  );
}
