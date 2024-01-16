import Image from "next/image";
import { getProfileImage } from "../lib/actions";
import {
  fetchUploads,
  getUploadsCount,
  getUser,
  getUserLikes,
} from "../lib/data";
import Link from "next/link";
import { HandThumbUpIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import getSession from "../lib/getSession";

export default async function Inspect({ userId }: { userId: string }) {
  const session = await getSession();
  const user = (await getUser(userId)) || {
    id: "",
    name: "",
    email: "",
    image: "",
  };
  const uploads = await fetchUploads(user.id);
  return (
    <div className="flex flex-col md:flex-row md:h-full w-full">
      <div className=" md:w-1/2 md:h-full flex justify-center items-center md:flex-col">
        <Image
          height={300}
          width={300}
          alt="img"
          src={(await getProfileImage(user.id))?.image || " "}
          className="rounded-full m-2 md:h-[300px] md:w-[300px] h-[100px] w-[100px]"
        ></Image>
        <div className="text-slate-100 mx-[10%] md:my-20">
          <h1 className="text-2xl font-bold my-5">{user.name}</h1>
          <p className="text-sm my-5 font-semibold">{user.email}</p>
          <p className="text-sm my-5 font-semibold">
            {(await getUploadsCount(user.id)) || 0} uploads
          </p>
          <p className="text-sm my-5 font-semibold">
            {(await getUserLikes(user.id)) || 0} likes
          </p>
          {session?.user.id == userId ? (
            <p>
              <Link href={"/home/manageUploads"}>
                <PencilSquareIcon className="w-6 h-6 text-slate-400" /> Manage
                Uploads
              </Link>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="md:absolute md:left-1/2  h-full md:w-1/2 p-2 flex flex-col ">
        <div className="">
          <p className="text-white font-bold ">All uploads</p>
        </div>
        {uploads?.map((upload, index) => {
          return (
            <div
              key={index}
              className="p-5 my-5 mx-2 border-b border-slate-500 md:w-1/2"
            >
              <Link href={`/${upload.id}/view`}>
                <p className="text-blue-700">{upload.question}</p>
              </Link>
              <p className="text-white m-2 flex">
                <HandThumbUpIcon className="w-6 h-6 mx-2 text-slate-400" />
                {upload.likes}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
