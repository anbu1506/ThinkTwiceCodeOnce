import { fetchQuestion } from "@/app/lib/data"
import Preview from "@/app/ui/preview"
import Link from "next/link"

export default function ViewPage({ params }: { params: { id: string } }) {
    const question = fetchQuestion(params.id)
    return (
        <>
            <div className="bg-slate-900 fixed top-0 right-0 left-0 text-bold  text-2xl md:text-4xl text-center  py-4 shadow-lg shadow-blue-500/50">
                <Link href={"/home"}>Think Twice Code Once</Link>
            </div>
            {
                <div className="mt-40">
                    <Preview question={question.ques} answer={question.answer} />
                </div>
            }
        </>
    )
}