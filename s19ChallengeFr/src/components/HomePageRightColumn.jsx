export function HomePageRightColumn() {
  return (
    <div className="flex flex-col bg-[#17202A] text-white w-[26rem] mt-2.5">
      <div className="relative">
        <input
          type="text"
          className="w-full h-[39px] rounded-2xl bg-[#283340] text-xl pl-14 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Twitter"
        />
        <img
          src="/searchicon.png"
          alt=""
          className="w-8 h-8 absolute left-4 top-[1.2rem] -translate-y-1/2 pointer-events-none"
        />
      </div>

      <div className="flex flex-col justify-start items-start mt-6 border-gray-600 rounded-2xl p-2 bg-[#1e2830]">
        <div className="flex items-start justify-start w-full py-4 border-b-gray-600 border-b-2 mb-4">
          <label className="font-bold text-white text-xl text-center">
            What's happening
          </label>
        </div>

        <div className="flex">
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="" className="text-gray-400 text-xl mb-1">
              COVID 19 Last night
            </label>
            <p className="text-white text-[1rem] font-bold w-[90%]">
              England's Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </p>
            <label htmlFor="" className="text-gray-400 text-lg font-bold mt-2">
              Trending with <span className="text-blue-300">#covid19</span>
            </label>
          </div>
          <img src="/Media.png" alt="" className="w-[7rem] h-[7rem] mr-3.5" />
        </div>

        <div className="border-b-2 border-gray-500 w-full mt-6"></div>

        <div className="flex mt-8">
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="" className="text-gray-400 text-xl mb-1">
              US news 4h ago
            </label>
            <p className="text-white text-[1rem] font-bold w-[90%]">
              Parler may go offline following suspensions by Amazon, Apple and
              Google
            </p>
            <label htmlFor="" className="text-gray-400 text-lg font-bold mt-2">
              Trending with <span className="text-blue-300">#trump</span>
            </label>
          </div>
          <img src="/phone.png" alt="" className="w-[7rem] h-[7rem] mr-3.5" />
        </div>

        <div className="border-b-2 border-gray-500 w-full mt-6"></div>

        <div className="flex mt-8">
          <div className="flex flex-col justify-start items-start">
            <label htmlFor="" className="text-gray-400 text-xl mb-1">
              India 1h ago
            </label>
            <p className="text-white text-[1rem] font-bold w-[90%]">
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </p>
            <label htmlFor="" className="text-gray-400 text-lg font-bold mt-2">
              Trending with <span className="text-blue-300">#sport</span>
            </label>
          </div>
          <img
            src="/place.png"
            alt=""
            className="w-[7rem] h-[7rem] mr-3.5 rounded-2xl"
          />
        </div>

        <div className="border-b-2 border-gray-500 w-full mt-6"></div>
        <p className="text-2xl font-semibold text-blue-300 w-full pt-4">
          Show more
        </p>
      </div>

      <div className="flex flex-col justify-start items-start mt-2 w-full border-2 border-gray-600 rounded-2xl p-2 bg-[#1e2830]">
        <div className="flex items-start justify-start w-full py-4 border-b-gray-600 border-b-2 mb-4">
          <label className="font-bold text-white text-4xl text-center">
            Who to follow
          </label>
        </div>

        <div className="flex w-[98%]">
          <div className="flex justify-between items-start w-full">
            <div className="flex justify-start items-start">
              <img
                src="https://picsum.photos/id/13/200/300"
                alt=""
                className="w-14 h-14 mr-3.5 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="" className="text-white text-xl">
                  Bessie Cooper
                </label>
                <p className="text-gray-500 text-lg font-bold w-[92%] !m-0 !p-0">
                  @alessandroveronezi
                </p>
              </div>
            </div>

            <button className="text-blue-400 bg-[#1e2830] rounded-3xl px-8 py-3 border-2 border-blue-400">
              Follow
            </button>
          </div>
        </div>

        <div className="border-b-2 border-gray-500 w-full mt-6"></div>

        <div className="flex mt-4 w-full">
          <div className="flex justify-between w-[98%]">
            <div className="flex justify-start items-start">
              <img
                src="https://picsum.photos/id/12/200/300"
                alt=""
                className="w-14 h-14 mr-3.5 rounded-full"
              />
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="" className="text-white text-xl">
                  Jenny Wilson
                </label>
                <p className="text-gray-500 text-lg font-bold w-[92%] !m-0 !p-0">
                  @gabrielcantarin
                </p>
              </div>
            </div>

            <button className="text-blue-400 bg-[#1e2830] rounded-3xl !px-8 py-2 border-2 border-blue-400">
              Follow
            </button>
          </div>
        </div>

        <div className="border-b-2 border-gray-500 w-full mt-6"></div>
        <p className="text-2xl font-semibold text-blue-300 w-full pt-4">
          Show more
        </p>
      </div>
    </div>
  );
}
