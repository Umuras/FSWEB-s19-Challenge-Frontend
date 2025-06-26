import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TweetArea } from "./TweetArea";

export function ProfilePageHeader() {
  return (
    <div className="flex flex-col justify-start items-start w-[100%] border-1 border-gray-500">
      <div className="flex items-center justify-start px-2 gap-8 mt-2">
        <Link to="/mainpage">
          <img src="/backarrow.png" alt="" className="w-6" />
        </Link>
        <div className="flex flex-col justify-start items-start mb-3">
          <label className="text-white font-bold text-lg" htmlFor="">
            Name
          </label>
          <label className="text-gray-400 font-semibold text-sm" htmlFor="">
            9 Tweets
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col relative">
          <img
            src="https://picsum.photos/id/11/599/200"
            alt=""
            className="w-[100%] h-[247px] m-0 p-0"
          />
          <img
            src="https://picsum.photos/id/1/139/139"
            alt=""
            className="rounded-full h-[139px] w-[139px] p-0 absolute top-[180px] left-[14px]"
          />
        </div>
      </div>
      <div className="flex justify-end mt-2 w-full pr-2">
        <button className="text-blue-400 bg-[#1e2830] rounded-3xl !px-8 py-2 border-2 border-blue-400">
          Edit profile
        </button>
      </div>

      <div className="flex flex-col justify-start items-start w-full mt-6 ml-3">
        <label className="text-white font-bold text-xl" htmlFor="">
          Ali Umur Kucur
        </label>
        <label className="text-gray-500 text-lg font-bold w-[92%] !m-0 !p-0">
          @auk@test.com
        </label>
        <label className="text-white font-semibold text-lg" htmlFor="">
          Full-Stack Developer
        </label>
        <div className="flex items-center gap-2 mt-2">
          <div className="">
            <img src="/Group.png" alt="" className="" />
          </div>
          <label className="text-gray-400 font-semibold text-lg" htmlFor="">
            Istanbul
          </label>
          <div className="">
            <img src="/Calendar.png" alt="" className="" />
          </div>
          <label className="text-gray-400 font-semibold text-lg" htmlFor="">
            Joined April 2025
          </label>
        </div>
        <div className="flex gap-2 mt-2">
          <label className="text-white text-lg font-bold" htmlFor="">
            569
          </label>
          <label className="text-gray-400 font-semibold text-lg" htmlFor="">
            Following
          </label>
          <label className="text-white text-lg font-bold" htmlFor="">
            72
          </label>
          <label className="text-gray-400 font-semibold text-lg" htmlFor="">
            Followers
          </label>
        </div>
      </div>
      <nav className="flex justify-between items-center w-full mt-4 px-2 mb-4">
        <button className="text-gray-400 font-bold text-xl cursor-pointer hover:border-b-2 hover:border-blue-400  focus:border-b-2 focus:border-blue-400">
          Tweets
        </button>
        <button className="text-gray-400 font-bold text-xl cursor-pointer hover:border-b-2 hover:border-blue-400  focus:border-b-2 focus:border-blue-400">
          Tweets & replise
        </button>
        <button className="text-gray-400 font-bold text-xl cursor-pointer hover:border-b-2 hover:border-blue-400  focus:border-b-2 focus:border-blue-400">
          Media
        </button>
        <button className="text-gray-400 font-bold text-xl cursor-pointer hover:border-b-2 hover:border-blue-400  focus:border-b-2 focus:border-blue-400">
          Likes
        </button>
      </nav>
    </div>
  );
}
