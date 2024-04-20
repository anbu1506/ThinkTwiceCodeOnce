import { fetchQuestion } from "@/app/lib/data";
import Preview from "@/app/ui/preview";
import { notFound } from "next/navigation";

export default async function ViewPage({ params }: { params: { id: string } }) {
  const question = await fetchQuestion(params.id);
  if(!question){
    notFound()
  }
  return (
    <>
      {
        <div className="my-40">
          {question && (
            <Preview
              id={question.id}
              likes={question.likes}
              question={question.question}
              answer={question.answer}
              userId={question.userId}
            />
          )}
        </div>
      }
    </>
  );
}
