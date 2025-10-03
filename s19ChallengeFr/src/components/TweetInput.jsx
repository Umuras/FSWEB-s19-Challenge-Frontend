export function TweetInput({ user }) {
  return (
    <>
      <div className="flex flex-row justify-start w-full border-1 border-gray-500 text-white">
        <div className=" py-5 flex items-start">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl text-amber-100">Home</h1>
            <div className="flex gap-4">
              <img
                src={`https://picsum.photos/id/${user.userId}/200/300`}
                alt=""
                className="rounded-full h-12 w-12"
              />
              <input
                type="text"
                className="px-50 py-2 rounded-full bg-gray-500"
                placeholder="What's happening?"
              />
            </div>
            <div className="">
              <button className="px-16 py-2 text-center rounded-3xl bg-blue-500 text-white font-bold ml-120 mt-2 cursor-pointer">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
