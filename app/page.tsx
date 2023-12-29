import Link from "next/link";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";
import TopTen from "./ui/topTen";

export default function Root({ searchParams }: { searchParams: { search: string } }) {

  return (
    <div >
      <div className="bg-slate-900 fixed top-0 right-0 left-0 text-bold  text-2xl md:text-4xl text-center  py-4 shadow-lg shadow-blue-500/50">
        <Link href={"/"}>Think Twice Code Once</Link>
      </div>
      <div className="mt-40">
        <h1 className="text-center my-6">
          Welcome to the <strong>Think Twice Code Once</strong> platform.
        </h1>
      </div>
      <div className="">
        <Search />
      </div>
      <div className="flex justify-center">
        <SearchPreview searchParams={searchParams} ></SearchPreview>
      </div>
      <div className="my-20 flex justify-center">
        <a href="/login">
          <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-md">Login</button>
        </a>
      </div>

      <div className="flex justify-center">
        <p className="w-96 md:w-1/2 font-bold text-2xl">Latest questions</p>
      </div>
      <TopTen></TopTen>
    </div>

  )
}