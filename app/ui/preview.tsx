"use client";

import { useEffect, useState } from "react";
import { HandThumbUpIcon as NotLikedIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon as LikedIcon } from "@heroicons/react/24/solid";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { getLikedCount, likeOrDislikeCode } from "../lib/actions";
import { Code } from "@/prisma/types";
import { isAlreadyLiked } from "../lib/actions";
import { useSession } from "next-auth/react";
import { MySession } from "../lib/mySession";
import Image from "next/image";
import { getProfileImage } from "../lib/actions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Preview(code: Code) {
  const session = useSession();
  const data = session.data as MySession;
  const [isCopied, setIsCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(code.likes);
  const [profileImage, setProfileImage] = useState("");

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code.answer);
      setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  };

  useEffect(() => {
    (async () => {
      if (session.status === "authenticated") {
        isAlreadyLiked(data.user.id, code.id).then((res) => setIsLiked(res));
        const likes = await getLikedCount(code.id);
        setLikeCount(likes || 0);
      }
      const image = await getProfileImage(code.userId);
      setProfileImage(image?.image || "");
    })();
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center items-center ">
          <div className=" w-[350px] md:w-1/2  rounded-lg shadow-lg border border-slate-50">
            <div className="bg-neutral-700 p-2  text-white  flex flex-col md:flex-row  rounded-t-lg justify-between  shadow-lg">
              <div className="text-lg px-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span className="ml-2">{code.question}</span>
              </div>
              <div className="flex  items-center justify-end my-2">
                <Link
                  href={`/${code.userId}/account`}
                  className="w-[50px] mr-5"
                >
                  <Image
                    src={profileImage}
                    alt="profile"
                    width={50}
                    height={50}
                    className="rounded-full mx-4"
                  ></Image>
                </Link>
                <div
                  onClick={async () => {
                    if (session.status !== "authenticated") {
                      alert("Please login to like the code");
                      return;
                    }
                    isLiked
                      ? setLikeCount(likeCount - 1)
                      : setLikeCount(likeCount + 1);
                    await likeOrDislikeCode(code.id, isLiked, data.user.id);
                    setIsLiked(!isLiked);
                  }}
                >
                  {isLiked ? (
                    <LikedIcon className="h-6 w-6 " />
                  ) : (
                    <NotLikedIcon className="h-6 w-6 " />
                  )}
                </div>
                <span className="text-lg mr-4">{likeCount}</span>
                {isCopied ? (
                  "Copied !"
                ) : (
                  <svg
                    onClick={handleCopyClick}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {/* <pre className="overflow-auto  py-8  p-4 rounded-b-lg  bg-white">{answer}</pre> */}
            <pre
              className="overflow-auto  py-8  p-4 rounded-b-lg text-gray-50 bg-neutral-800 border-t border-slate-50"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(code.answer, Prism.languages.js, "js"),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
