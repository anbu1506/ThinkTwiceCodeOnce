import { fetchTopTen } from "./lib/data";
import Preview from "./ui/preview";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";

export default function Home({ searchParams }: { searchParams: { search: string } }) {
  const topTen = fetchTopTen();
  return (
    <div >
      <div className="fixed top-0 right-0 left-0 text-bold  text-2xl md:text-4xl text-center  py-4 shadow-lg shadow-blue-500/50">
        Think Twice Code Once
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
        <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-md">Login</button>
      </div>

      <div className="flex justify-center">
        <p className="w-96 md:w-1/2 font-bold text-2xl">Latest questions</p>
      </div>
      {topTen.map((question) => (<>
        <div className=" my-5">
          <Preview question={question.ques} answer={question.answer} />
        </div>
      </>
      ))}
    </div>

  )
}