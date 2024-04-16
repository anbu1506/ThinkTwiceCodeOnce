import getSession from "@/app/lib/getSession";
import CodeForm from "@/app/ui/home/codeForm";

export default async function Upload() {
  const session = await getSession();
  return (
    <>
      <div className="mt-52"></div>
      <div className="text-slate-700 text-xl font-semibold my-10 w-4/5 mx-[10%]">
        {session.user.name} / upload
      </div>
      <div>
        <CodeForm />
      </div>
    </>
  );
}
