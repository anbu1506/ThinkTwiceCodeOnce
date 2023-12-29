import Link from "next/link"
import fetchQuestions from "../lib/data"

export default function SearchPreview({ searchParams }: { searchParams: { search: string } }) {
    const questions = fetchQuestions(searchParams.search || "");
    return (<>
        {
            questions?.length == 0 ? <div>no results found</div> :
                <div className=" bg-slate-800   w-[350px] md:w-[432px]  rounded-lg mx-2 my-2">
                    {
                        questions.map((question: { ques: string, id: string }, index) => {

                            return <>
                                <Link href={`/${question.id}/view`}>
                                    <div className="truncate text-white px-4  py-4 " >
                                        {
                                            question.ques
                                        }

                                    </div>
                                </Link>
                                {index == questions.length - 1 ? "" : <hr className="border-gray-600" />}
                            </>
                        })
                    }
                </div>
        }
    </>)
}