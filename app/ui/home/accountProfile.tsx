import { getUploadsCount, getUserLikes } from "@/app/lib/data";
import getSession from "@/app/lib/getSession";
import Image from "next/image";
export default async function AccountProfile() {
  const session = await getSession();
  const uploadsCount = await getUploadsCount(session.user.id);
  const likssCount = await getUserLikes(session.user.id);
  return (
    <>
      <div className="flex justify-center items-center  bg-gray-800 rounded-md shadow-xl mx-10">
        <div className="mx-5">
          <Image
            src={session.user.image}
            alt="userImage"
            height={100}
            width={100}
            className="rounded-full"
          ></Image>
        </div>
        <div className=" md:text-xl text-sm font-semibold">
          <div className="p-4 text-gray-400">{session.user.name}</div>
          <div className="p-4 text-gray-500">{session.user.email}</div>
          <div className="flex">
            <div className="p-4 text-gray-400">{uploadsCount} uploads</div>
            <div className="p-4 text-gray-400">{likssCount} likes</div>
          </div>
        </div>
      </div>
    </>
  );
}
