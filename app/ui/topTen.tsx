import { fetchTopTen } from "../lib/data";
import Preview from "./preview";

export default async function TopTen() {
    const topTen = await fetchTopTen();
    return (
        <>
            {topTen?.map((question, index) => (
                <div className=" my-16" key={index}>
                    <Preview likes={question.likes} question={question.question} answer={question.answer} />
                </div>
            ))}
        </>
    )
}