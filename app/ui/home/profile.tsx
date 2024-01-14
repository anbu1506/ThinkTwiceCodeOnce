import getSession from "@/app/lib/getSession";
import { MySession } from "@/app/lib/mySession";
import { authConfig } from "@/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
  const session = await getSession();
  return (
    <>
      <div className="flex items-center">
        <Link href={"/home/myAccount"}>
          <Image
            src={session.user.image}
            alt="user Image"
            width={30}
            height={30}
            className="rounded-full m-2"
          ></Image>
        </Link>
      </div>
    </>
  );
}
