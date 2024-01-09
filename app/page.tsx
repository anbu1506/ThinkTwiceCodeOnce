import Link from "next/link";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";
import TopTen from "./ui/topTen";
import LoginBtn from "./ui/loginBtn";
import { redirectIfAuthenticated } from "./lib/getUserAuth";

export default async function Root({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  await redirectIfAuthenticated();

  return (
    <div>
      <div className=" fixed top-0 right-0 left-0 text-bold text-white text-2xl md:text-3xl text-center  py-4 shadow-lg bg-neutral-950 ">
        <Link href={"/"}>Think Twice Code Once</Link>
      </div>
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
      <div className="my-20 flex justify-center">
        {/* <a href="/home"> */}
        <LoginBtn></LoginBtn>
        {/* <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-md">Login</button> */}
        {/* </a> */}
      </div>

      {/* <div className="flex justify-center">
        <p className="w-96 md:w-1/2 font-bold text-2xl bg-slate-500 text-center text-white p-2">
          Latest questions 🔥 :
        </p>
      </div> */}
      <TopTen></TopTen>
    </div>
  );
}
