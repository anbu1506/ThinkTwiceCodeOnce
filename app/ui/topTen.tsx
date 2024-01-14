import { fetchTopTen } from "../lib/data";
import Preview from "./preview";

export default async function TopTen() {
  const topTen = await fetchTopTen();
  return (
    <>
      {topTen?.map((question, index) => (
        <div className=" my-40" key={index}>
          <Preview
            id={question.id}
            likes={question.likes}
            question={question.question}
            answer={question.answer}
            userId={question.userId}
          />
        </div>
      ))}
    </>
  );
}
