import { fetchMyuploads } from "@/app/lib/data";
import Preview from "@/app/ui/preview";

export default function MyUploads() {
    const uploads = fetchMyuploads();
    return (<>
        <div>
            <div className="mt-40">
                {uploads.map((question, index) => (
                    <div className=" my-5" key={index}>
                        <Preview question={question.ques} answer={question.answer} />
                    </div>
                ))}
            </div>
        </div>
    </>)
}