
import Search from "../ui/search";
import SearchPreview from "../ui/searchPreview";
import TopTen from "../ui/topTen";

export default function Home({ searchParams }: { searchParams: { search: string } }) {

    return (
        <div >
            <div className="mt-40">
                <h1 className="text-center my-6 text-slate-400 font-serif">
                    Welcome to the <strong>Think Twice Code Once</strong> platform.
                </h1>
            </div>
            <div className="">
                <Search />
            </div>
            <div className="flex justify-center">
                <SearchPreview searchParams={searchParams} ></SearchPreview>
            </div>

            <div className="flex justify-center mt-20 ">
                <p className="w-96 md:w-1/2 font-bold text-2xl bg-slate-500 text-center text-white p-2">Latest questions 🔥 :</p>
            </div>
            <TopTen></TopTen>
        </div>

    )
}