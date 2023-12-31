import { fetchTopTen } from "../lib/data";
import Preview from "./preview";

export default function TopTen() {
    const topTen = fetchTopTen();
    return (
        <>
            {topTen.map((question, index) => (
                <div className=" my-5" key={index}>
                    <Preview question={question.ques} answer={question.answer} />
                </div>
            ))}
        </>
    )
}