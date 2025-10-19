export function TweetInput({ user }) {
  return (
    <>
      <div className="flex flex-row justify-start w-full border-1 border-[#3A444C] text-white">
        <div className="py-[15px] flex items-start">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center px-4">
              <h1 className="font-bold text-xl text-white">Home</h1>
              <img src="/star.png" alt="" />
            </div>
            <div className="border-1 border-[#3A444C] w-[44rem]"></div>

            <div className="flex gap-4 px-4">
              <img
                src={`https://picsum.photos/id/${user.userId}/200/300`}
                alt=""
                className="rounded-full h-12 w-12"
              />
              <input
                type="text"
                className="py-2 text-xl focus:outline-none w-full"
                placeholder="What's happening?"
              />
            </div>
            <div className="flex justify-between items-center w-[86%] ml-20">
              <div className="flex gap-4">
                <img src="/smallmedia.png" alt="" />
                <img src="/gif.png" alt="" />
                <img src="/poll.png" alt="" />
                <img src="/emoji.png" alt="" />
                <img src="/schedule.png" alt="" />
              </div>
              <button className="px-6 py-2 text-center rounded-3xl bg-blue-500 text-white font-bold mt-2 cursor-pointer">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
