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
      <div className="md:w-1/2 md:h-full flex justify-center items-center md:flex-col">
        <Image
          height={300}
          width={300}
          alt="img"
          src={(await getProfileImage(user.id))?.image || " "}
          className="rounded-full m-2 md:h-[300px] md:w-[300px] h-[100px] w-[100px]"
        ></Image>
        <div className="text-slate-700 mx-[10%] md:my-20">
          <h1 className="text-2xl font-extrabold my-5">{user.name}</h1>
          {
            session?.user && <p className="text-md my-5 font-bold">{user.email}</p>
          }
          <p className="text-md my-5 font-bold">
            {(await getUploadsCount(user.id)) || 0} uploads
          </p>
          <p className="text-md my-5 font-bold">
            {(await getUserLikes(user.id)) || 0} likes
          </p>
          {session?.user.id == userId && (
            <p>
              <Link href={"/home/manageUploads"} className=" font-bold text-slate-700">
                <PencilSquareIcon className="w-6 h-6 text-slate-700" /> Manage
                Uploads
              </Link>
            </p>
          )}
        </div>
      </div>
      <div className="md:w-1/2 p-2 flex flex-col">
        {uploads?.map((upload, index) => {
          return (
            <div
              key={index}
              className="p-5 my-5 mx-2 border-b border-slate-500 md:w-1/2"
            >
              <Link href={`/${upload.id}/view`}>
                <p className="text-blue-400 font-semibold">{upload.question}</p>
              </Link>
              <p className="text-slate-700 m-2 flex">
                <HandThumbUpIcon className="w-6 h-6 mx-2 text-slate-400 font-semibold" />
                {upload.likes}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
