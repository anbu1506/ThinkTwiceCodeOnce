import getSession from "@/app/lib/getSession";
import Inspect from "@/app/ui/inspect";

export default async function MyAccount() {
  const session = await getSession();
  return (
    <>
      <div className="h-full w-full">
        <Inspect userId={session.user.id} />
      </div>
    </>
  );
}
