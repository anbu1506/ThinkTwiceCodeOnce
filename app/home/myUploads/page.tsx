import { fetchMyuploads } from "@/app/lib/data";
import NavBar from "@/app/ui/navbar";
import Preview from "@/app/ui/preview";

export default function MyUploads() {
    const uploads = fetchMyuploads();
    return (<>
        <div>
            <NavBar></NavBar>
            <div className="mt-40">
                {uploads.map((question) => (<>
                    <div className=" my-5">
                        <Preview question={question.ques} answer={question.answer} />
                    </div>
                </>
                ))}
            </div>
        </div>
    </>)
}