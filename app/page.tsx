import Link from "next/link";
import Search from "./ui/search";
import SearchPreview from "./ui/searchPreview";
import { redirectIfAuthenticated } from "./lib/getUserAuth";
import LoginBtn, { GithubLogin, JoinCommunity } from "./ui/loginBtn";
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
              src="screen.png"
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
      <div className="h-64 bg-homeColor pt-10">
        <h1 className="text-3xl leading-normal text-white text-center font-bold">
          Learn, Share And Evolve With{" "}
          <span className="text-blue-400">Think Twice Code Once</span>
        </h1>
        <div className="flex justify-center mt-4 items-center">
          <p className="text-center text-xl font-bold text-gray-300">
            contact us through
          </p>
          <a href="github.com" className="m-3">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a href="linkedin.com" className="m-3">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
