"use client";

import { editCode } from "@/app/lib/actions";
import { useState } from "react";

export default function EditForm({ Name , questionparam , answerparam, codeId }: { Name: string , questionparam: string , answerparam: string ,codeId:string}) {
  const [question, setQuestion] = useState<string>(questionparam);
  const [answer, setAnswer] = useState<string>(answerparam);

  const handleKeyDown = (event: any) => {
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
  const handleKeyDowns = (event: any) => {
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
    <div className="md:w-1/2 text-gray-600 bg-white shadow-lg rounded-md">
      <p className="text-xl font-extrabold pt-6 px-4">
        {Name} / Upload
      </p>
      <form action={editCode} className="w-full p-4">
        <input hidden={true} type="text" name="codeId" value={codeId} />
        <div className="font-bold py-2">Question</div>

        <textarea
        className="w-full p-2 border-2 bg-gray-50 outline-none"
          required
          name="question"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          cols={30}
          rows={10}
          placeholder="A brief description and question..."
        ></textarea>

        <div className="font-bold py-2">Your answer here...</div>

        <textarea
        className="w-full p-2 border-2 bg-gray-50 outline-none"
          required
          name="answer"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={handleKeyDowns}
          cols={30}
          rows={10}
          placeholder="type your answer..."
        ></textarea>

        <button
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit">Submit</button>
      </form>
    </div>
  );
}
