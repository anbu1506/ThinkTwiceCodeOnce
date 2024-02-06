import Image from "next/image";

export default function About() {
  return (
    <div className="font-mono">
      <div className="text-white p-8 bg-gray-900 h-screen flex flex-col justify-evenly items-center">
        <h1 className="text-3xl font-bold ">About Think Twice Code Once</h1>
        <div className="grid md:grid-cols-2 ">
          <div
            className=" flex justify-center items-center"
            data-aos="fade-right"
          >
            <Image
              className="rounded-full"
              alt="img"
              src={"/971.jpg"}
              height={300}
              width={300}
            />
          </div>
          <div
            className=" flex justify-center items-center"
            data-aos="zoom-in-left"
          >
            <p className="font-mono text-lg">
              Welcome to CodeShare, where learners unite to share, discover, and
              collaborate on code snippets. Our platform encourages effortless
              sharing, liking, and managing of code snippets, creating a vibrant
              community of passionate coders. Join us in building a space where
              coding knowledge is freely exchanged, and everyone is inspired to
              learn and grow. Happy coding!
            </p>
          </div>
        </div>
      </div>
      <div className="text-white">
        <div className="bg-gray-800   flex flex-col justify-evenly items-center h-screen p-4 font-mono">
          <h1 className="text-3xl font-bold">
            How to share code in Think Twice Code Once
          </h1>

          <div
            className="grid md:grid-cols-3 md:pl-20 pl-10"
            data-aos="slide-up"
          >
            <ol className="list-decimal col-span-2 flex justify-center items-center gap-5 flex-col">
              <li className="mb-2">
                <strong>Post Your Brilliance:</strong> Create a post, give it a
                catchy title, and share your code snippet with the world. Don't
                forget to add relevant tags for easy discovery.
              </li>
              <li className="mb-2">
                <strong>Discover and Learn:</strong> Explore a diverse array of
                snippets contributed by fellow Think Twice Code Once members.
                Find solutions, learn new tricks, and get inspired to take your
                coding skills to the next level.
              </li>
              <li className="mb-2">
                <strong>Build Connections:</strong> Like, comment, and connect
                with other learners and developers. Think Twice Code Once is
                more than a platform; it's a community where collaboration and
                support thrive.
              </li>
            </ol>
            <div
              className="flex justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                className="rounded-full "
                alt="img"
                src={"/share.jpg"}
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
        <div className="md:h-screen flex flex-col justify-evenly items-center bg-gray-900 p-4">
          <div className="grid md:grid-cols-2">
            <div
              className="flex justify-center items-center"
              data-aos="fade-right"
            >
              <Image
                className="rounded-full "
                alt="img"
                src={"/ttco.jpg"}
                height={300}
                width={300}
              />
            </div>
            <div className="flex flex-col justify-evenly" data-aos="slide-up">
              <h2 className="text-2xl font-bold mt-8 mb-4 self-start md:self-auto">
                Ready to Think Twice Code Once?
              </h2>

              <p>
                "Ready to Think Twice, Code Once." Our platform embraces the
                philosophy of thoughtful coding, encouraging developers to
                carefully consider their approach before crafting elegant
                solutions. Here, we value quality over quantity, emphasizing the
                importance of clear thinking and efficient code. Join our
                community of mindful coders, where every line is a reflection of
                strategic thinking and coding excellence. Let's collaborate,
                learn, and elevate our coding practices together!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 self-start md:self-auto">
            Contact Us
            <p className=" text-sm font-normal">github.com/anbu1506/</p>
          </h2>

          <a href="https://github.com/anbu1506">
            <Image
              alt="github"
              src={"/github-mark-white.svg"}
              height={50}
              width={50}
            ></Image>
          </a>

          <p className="text-lg ">Happy coding!</p>

          <p className="text-lg">The Think Twice Code Once Team ✨</p>
        </div>
      </div>
    </div>
  );
}
