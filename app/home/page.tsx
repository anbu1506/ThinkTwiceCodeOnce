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
            Every Developer Has A Tab Open To{" "}
            <span className="text-blue-500 md:text-4xl">
              Think Twice Code Once
            </span>{" "}
            Platform.
          </h1>
          <Search />
          <div className="flex justify-center">
            <SearchPreview searchParams={searchParams}></SearchPreview>
          </div>
        </div>
        <div className="h-1/2 md:flex items-center justify-center">
          <p className="text-gray-800 md:w-1/2 text-center p-4 bg-gray-200 rounded-lg shadow-lg">
            Welcome to ThinkTwice Code Once, your go-to platform for insightful
            discussions, helpful coding tips, and engaging interactions with
            fellow developers. ThinkTwice Code Once is designed to be your
            virtual hub for everything related to programming, where you can
            share your expertise, seek advice, and collaborate on projects. With
            features like comments, likes, shares, and the ability to post and
            edit content, ThinkTwice Code Once empowers you to connect with a
            community of like-minded individuals passionate about coding. Dive
            into discussions, explore user profiles to gain insights into their
            contributions, and discover a wealth of knowledge to fuel your
            coding journey. Join us on ThinkTwice Code Once, where every
            question is an opportunity to learn, and every interaction is a
            chance to grow.
          </p>
        </div>
      </div>
      <TopTen></TopTen>
    </>
  );
}
