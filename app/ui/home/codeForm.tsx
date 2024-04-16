"use client";

import { uploadCode } from "@/app/lib/actions";
import { useState } from "react";

export default function CodeForm() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleKeyDown = (event:any) => {
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent the default tab behavior
      const { selectionStart, selectionEnd } = event.target;

      // Insert a tab character at the current cursor position
      const newValue =
        question.substring(0, selectionStart) +
        "\t" +
        question.substring(selectionEnd);

      // Update the textarea value and move the cursor to the position after the inserted tab
      setQuestion(newValue);
      const newPosition = selectionStart + 1;
      event.target.setSelectionRange(newPosition, newPosition);
    }
  };
  const handleKeyDowns = (event:any) => {
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent the default tab behavior
      const { selectionStart, selectionEnd } = event.target;

      // Insert a tab character at the current cursor position
      const newValue =
        answer.substring(0, selectionStart) +
        "\t" +
        answer.substring(selectionEnd);

      // Update the textarea value and move the cursor to the position after the inserted tab
      setAnswer(newValue);
      const newPosition = selectionStart + 1;
      event.target.setSelectionRange(newPosition, newPosition);
    }
  };
  return (
    <>
      <form action={uploadCode}>
        <div className=" h-full w-full flex justify-center items-center">
          <div className=" md:h-4/6 w-4/5 flex flex-col  items-center rounded-lg border border-slate-600 ">
            <div className="self-start	text-xl font-extrabold text-gray-700 my-4 mx-12 md:my-6 md:mx-16 ">
              Question
            </div>
            {/* <input
              required
              name="question"
              type="text"
              placeholder="what is ...?"
              className="text-white mx-auto   h-16 w-72 md:w-11/12 rounded-lg border border-slate-600 outline-none px-4 focus:ring focus:ring-blue bg-neutral-950"
            /> */}

            <textarea
              required
              name="question"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              cols={30}
              rows={10}
              placeholder="A brief description and question..."
              className="text-black text-md  w-72 md:w-11/12  rounded-lg border border-slate-600 outline-none p-4 focus:ring focus:ring-blue-500 "
            ></textarea>

            <div className="self-start text-xl font-extrabold text-gray-700 m-4 mx-12 md:my-6  md:mx-16">
              Your answer here...
            </div>
            <textarea
              required
              name="answer"
              id="answer"

              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyDown={handleKeyDowns}
              cols={30}
              rows={10}
              placeholder="type your answer..."
              className="text-black text-md  w-72 md:w-11/12  rounded-lg border border-slate-600 outline-none p-4  focus:ring focus:ring-blue-500 "
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
