import { uploadCode } from "@/app/lib/actions";

export default function CodeForm() {
  return (
    <>
      <form action={uploadCode}>
        <div className=" h-full w-full flex justify-center items-center ">
          <div className=" md:h-4/6 w-4/5 flex flex-col  items-center rounded-lg border border-slate-600 ">
            <div className="self-start	text-xl text-bold text-white my-4 mx-12 md:my-6 md:mx-16 ">
              Question
            </div>
            <input
              required
              name="question"
              type="text"
              placeholder="what is ...?"
              className="text-white mx-auto   h-16 w-72 md:w-11/12 rounded-lg border border-slate-600 outline-none px-4 focus:ring focus:ring-blue bg-neutral-950"
            />

            <div className="self-start text-xl text-bold text-white m-4 mx-12 md:my-6  md:mx-16">
              Your answer here...
            </div>
            <textarea
              required
              name="answer"
              id="answer"
              cols={30}
              rows={10}
              placeholder="answer..."
              className="text-white text-md  w-72 md:w-11/12  rounded-lg border border-slate-600 outline-none p-4  focus:ring focus:ring-blue bg-neutral-950 "
            ></textarea>
            <button
              type="submit"
              className="self-center  rounded-lg px-4 py-2 m-2 w-72 md:w-11/12 my-6 bg-slate-700 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
