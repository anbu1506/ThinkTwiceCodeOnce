export default function CodeForm() {
    return (
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="bg-slate-800 h-4/6 w-4/5 flex flex-col  items-center">
                    <div className="self-start	text-2xl text-bold text-blue-200 m-4 md:my-6 md:mx-16 ">
                        Question
                    </div>
                    <input type="text" placeholder="what is ...?" className="mx-auto text-white bg-gray-900 h-16 w-72 md:w-11/12 rounded-lg border border-slate-800 outline-none px-4 focus:ring focus:ring-blue" />

                    <div className="self-start text-2xl text-bold text-blue-200 m-4 md:my-6  md:mx-16">
                        Your answer here...
                    </div>
                    <textarea name="answer" id="answer" cols={30} rows={10} placeholder="answer..." className="text-white text-md bg-gray-900  w-72 md:w-11/12  rounded-lg border border-slate-800 outline-none p-4  focus:ring focus:ring-blue "></textarea>
                    <button className="self-center bg-slate-900  rounded-lg px-4 py-2 m-2 w-72 md:w-11/12 mt-6">
                        Submit
                    </button>
                </div>

            </div>
        </>
    )
}