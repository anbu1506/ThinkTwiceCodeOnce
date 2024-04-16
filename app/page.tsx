import Link from "next/link";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";
import { redirectIfAuthenticated } from "./lib/getUserAuth";
import LoginBtn, { GithubLogin, JoinCommunity } from "./ui/loginBtn";
import BottomBar from "./ui/BottomBar";
export default async function Root({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  await redirectIfAuthenticated();

  return (
    <>
      <div className="h-screen bg-homeColor p-4">
        <div className="nav flex justify-between">
          <div className="flex justify-around w-[30%] items-center font-semibold">
            <a className="text-white" href="">
              About
            </a>
            <a className="text-white" href="">
              roducts
            </a>
            <a className="text-white" href="">
              Teams
            </a>
          </div>
          <input
            className="bg-white px-3 py-2 outline-none rounded-md w-[30%]"
            placeholder="search"
            type="text"
          />
          <LoginBtn></LoginBtn>
        </div>
        <div className="py-5 px-3 h-[80%] mx-10 my-10 flex flex-col md:flex-row">
          <div className="h-1/2 md:w-1/2 md:h-full flex flex-col items-center justify-around">
            <h1 className="text-xl md:text-7xl md:leading-normal font-extrabold text-white">
              Every <span className="text-blue-500">Developer </span>Has A Tab
              Open To
              <span className="text-blue-500">Think Twice Code Once</span>{" "}
              Platform.
            </h1>
            <p className="text-gray-400 self-start">
              Easily Create , Organize, And Discover Knowledge through Your
              Entire Learnig Journey
            </p>
            <GithubLogin></GithubLogin>
          </div>
          <div className="h-1/2 md:w-1/2 md:h-full">
            <img
              className="h-full w-full"
              src="screen.jpg"
              alt="network pf devs"
            />
          </div>
        </div>
      </div>

      <div className="md:h-screen grid md:grid-cols-2 md:grid-rows-2">
        <div className="flex items-center justify-center">
          <img
            className="h-full w-4/2 rounded-full p-10"
            src="net.jpeg"
            alt="network of devs"
          />
        </div>
        <div className="flex items-center justify-center mb-10">
          <div className="h-3/4 w-3/5 flex items-center justify-around flex-col">
            <h1 className="text-blue-500 font-extrabold text-3xl leading-normal self-start">
              Find The Best Answer To Your Technical Question, Help Others
              Answer Theirs
            </h1>
            <p className="text-gray-400 self-start">
              A Community Based Space To Find And Conttribute Answers To
              Technical Challenges, And One Of The Most opular Websites In The
              World.
            </p>
            <JoinCommunity></JoinCommunity>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-3/4 w-3/5 flex items-center justify-around flex-col">
            <h1 className="text-blue-500 font-extrabold text-3xl leading-normal self-start">
              A Public Collaboration & Knowledge Sharing Platform for Curious
              Minds.
            </h1>
            <p className="text-gray-400 self-start">
              A Community Based Space To Find And Conttribute Answers To
              Technical Challenges, And One Of The Most opular Websites In The
              World.
            </p>
            <JoinCommunity></JoinCommunity>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="h-full w-4/2 rounded-full p-20"
            src="net.jpeg"
            alt="network of devs"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-4 p-10">
        <button className="h-80 w-60 m-4 border border-blue-950 px-4 py-2 text-homeColor hover:bg-homeColor hover:text-white hover:h-72 hover:w-72 font-semibold rounded-md">
          <div></div>
          <p>
            Express your appreciation with a simple click! Use the 'Like' button
            to show support for posts, comments, and discussions that resonate
            with you. Spread positivity and encourage engagement by
            acknowledging valuable contributions from fellow users.
          </p>
        </button>

        <button className="h-80 w-60 m-4 border border-blue-950 px-4 py-2 text-homeColor hover:bg-homeColor hover:text-white hover:h-72 hover:w-72 font-semibold rounded-md">
          <div></div>
          <p>
            Ready to share your thoughts with the community? Create a new post
            and join the conversation! Share your ideas, insights, questions, or
            experiences on topics that matter to you. Your posts have the power
            to spark meaningful discussions and connect you with like-minded
            individuals.
          </p>
        </button>

        <button className="h-80 w-60 m-4 border border-blue-950 px-4 py-2 text-homeColor hover:bg-homeColor hover:text-white hover:h-72 hover:w-72 font-semibold rounded-md">
          <div></div>
          <p>
            Spread the word and amplify the reach of interesting content with
            the 'Share' option! Share posts, articles, or discussions that you
            find valuable or thought-provoking with your friends, followers, or
            colleagues. Help create a ripple effect of engagement by sharing
            content that inspires you.
          </p>
        </button>

        <button className="h-80 w-60 m-4 border border-blue-950 px-4 py-2 text-homeColor hover:bg-homeColor hover:text-white hover:h-72 hover:w-72 font-semibold rounded-md">
          <div></div>
          <p>
            Join the dialogue and add your voice to the conversation! Use the
            'Comment' option to share your thoughts, ask questions, or provide
            feedback on posts and discussions. Engage with fellow users, offer
            insights, and contribute to a dynamic exchange of ideas within the
            community.
          </p>
        </button>
      </div>
      <BottomBar></BottomBar>
    </>
  );
}
