import About from "../ui/About";
import Blinker from "../ui/Blinker";
import Search from "../ui/search";
import SearchPreview from "../ui/searchPreview";
import TopTen from "../ui/topTen";

export default function Home({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return (
    <div>
      <div className="h-screen flex justify-center items-center flex-col">
        <div className="">
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
      <TopTen></TopTen>
      <About></About>
    </div>
  );
}
