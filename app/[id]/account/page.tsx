import Inspect from "../../ui/inspect";
export default function Test({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="h-full w-full mt-40">
        <Inspect userId={params.id} />
      </div>
    </>
  );
}
