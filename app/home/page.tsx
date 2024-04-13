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
    // <div>
    //   <div className="h-screen flex justify-center items-center flex-col">
    //     <div className="">
    //       <h1 className="text-center my-6 text-slate-50 ">
    //         Welcome to the <strong>Think Twice Code Once</strong> platform.
    //       </h1>
    //     </div>
    //     <div className="">
    //       <Search />
    //     </div>
    //     <div className="flex justify-center">
    //       <SearchPreview searchParams={searchParams}></SearchPreview>
    //     </div>
    //   </div>
    //   <TopTen></TopTen>
    //   <About></About>
    // </div>
    <>
      <div className="h-screen">
        <div className="h-1/2 bg-homeColor flex flex-col items-center justify-center">
          <h1 className="text-white font-extrabold md:text-3xl md:w-[60%] text-2xl w-[80%] text-center">
            Every Developer Has A Tab Open To <span className="text-blue-500 md:text-4xl">Think Twice Code Once</span> Platform.
          </h1>
          <Search />
          <div className="flex justify-center">
            <SearchPreview searchParams={searchParams}></SearchPreview>
          </div>
        </div>
      </div>
      <TopTen></TopTen>
    </>
  );
}
