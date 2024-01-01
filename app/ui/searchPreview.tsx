import Link from "next/link"
import fetchSearchQuestions from "../lib/data"

export default async function SearchPreview({ searchParams }: { searchParams: { search: string } }) {
    const questions = await fetchSearchQuestions(searchParams.search);
    return (<>
        {
            questions?.length == 0 ? <div>no results found</div> :
                <div className=" bg-slate-800   w-[350px] md:w-[432px]  rounded-lg mx-2 my-2">
                    {
                        questions.map((question: { question: string, id: number }, index) => {

                            return <div key={index} >
                                <Link href={`/${question.id}/view`}>
                                    <div className="truncate text-white px-4  py-4 " >
                                        {
                                            question.question
                                        }

                                    </div>
                                </Link>
                                {index == questions.length - 1 ? "" : <hr className="border-gray-600" />}
                            </div>
                        })
                    }
                </div>
        }
    </>)
}