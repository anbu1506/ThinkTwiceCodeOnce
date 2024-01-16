import Link from "next/link";
import Inspect from "../../ui/inspect";
export default function Test({ params }: { params: { id: string } }) {
  return (
    <>
      <div className=" font-bold  text-2xl   md: text-center  fixed top-0 right-0 left-0   py-4 shadow-lg text-white bg-neutral-950">
        <Link href={"/home"}>Think Twice Code Once</Link>
      </div>
      <div className="h-full w-full mt-40">
        <Inspect userId={params.id} />
      </div>
    </>
  );
}
