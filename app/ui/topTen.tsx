import { fetchTopTen } from "../lib/data";
import Preview from "./preview";

export default function TopTen() {
    const topTen = fetchTopTen();
    return (
        <>
            {topTen.map((question) => (<>
                <div className=" my-5">
                    <Preview question={question.ques} answer={question.answer} />
                </div>
            </>
            ))}
        </>
    )
}