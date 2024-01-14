import { fetchUploads } from "@/app/lib/data";
import getSession from "@/app/lib/getSession";
import PersonalPreview from "@/app/ui/home/personalPreview";

export default async function ManageUploads() {
  const session = await getSession();
  const uploads = await fetchUploads(session.user.id);
  return (
    <>
      <div className="mt-40">
        <div className="ml-[25%] font-bold text-xl text-white py-2">
          Manage Uploads
        </div>
        <div className="mt-20">
          {uploads?.map((code, index) => (
            <div className="my-10" key={index}>
              <PersonalPreview
                question={code.question}
                answer={code.answer}
                userId={code.userId}
                id={code.id}
                likes={code.likes}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
