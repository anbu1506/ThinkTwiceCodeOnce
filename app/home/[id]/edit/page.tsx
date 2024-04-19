import { fetchQuestion } from "@/app/lib/data";
import getSession from "@/app/lib/getSession";
import EditForm from "@/app/ui/home/editForm";

export default async function Upload({ params }: { params: { id: string } }) {
  const session = await getSession();
  const question = await fetchQuestion(params.id) ;
  return (
    <>
      <div className="flex items-center justify-center h-full pt-20">
        <EditForm Name={session.user.name} questionparam={question?.question || ""} answerparam={question?.answer || ""} codeId={params.id}/>
      </div>
    </>
  );
}
