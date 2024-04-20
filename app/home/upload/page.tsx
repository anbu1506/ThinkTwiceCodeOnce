import getSession from "@/app/lib/getSession";
import CodeForm from "@/app/ui/home/codeForm";

export default async function Upload() {
  const session = await getSession();
  return (
    <>
      <div className="flex items-center justify-center h-full pt-20">
        <CodeForm Name={session.user.name}/>
      </div>
    </>
  );
}
