import { fetchMyuploads } from "@/app/lib/data";
import AccountProfile from "@/app/ui/home/accountProfile";
import PersonalPreview from "@/app/ui/home/personalPreview";
import Preview from "@/app/ui/preview";

export default async function MyAccount() {
  const uploads = await fetchMyuploads();
  return (
    <>
      <div className="mt-40">
        <div className="flex justify-center items-center my-10">
          <AccountProfile></AccountProfile>
        </div>
        <div className="ml-[25%] font-bold text-xl text-white py-2">
          My Uploads
        </div>
        <div className="mt-20">
          {uploads?.map((code, index) => (
            <div className="my-10" key={index}>
              <PersonalPreview
                question={code.question}
                answer={code.answer}
                user={code.user}
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
