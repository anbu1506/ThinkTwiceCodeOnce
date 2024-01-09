import { fetchQuestion } from "@/app/lib/data";
import Preview from "@/app/ui/preview";
import Link from "next/link";

export default async function ViewPage({ params }: { params: { id: string } }) {
  const question = await fetchQuestion(params.id);
  return (
    <>
      <div className=" font-bold  text-2xl   md: text-center  fixed top-0 right-0 left-0   py-4 shadow-lg text-white bg-neutral-950">
        <Link href={"/home"}>Think Twice Code Once</Link>
      </div>
      {
        <div className="my-40">
          {question && (
            <Preview
              likes={question.likes}
              question={question.question}
              answer={question.answer}
            />
          )}
        </div>
      }
    </>
  );
}
