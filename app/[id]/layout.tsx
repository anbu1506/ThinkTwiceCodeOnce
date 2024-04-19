import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" font-bold  text-2xl   md: text-center  fixed top-0 right-0 left-0   py-4 shadow-lg text-white bg-homeColor">
        <Link href={"/home"}>Think Twice Code Once</Link>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
