export function TweetInput({ user }) {
  return (
    <section className="border-1 border-[#3A444C] mb-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-white m-3.5">Home</h2>
        <img src="/star.png" alt="" className="w-[3%] h-[3%] m-3.5" />
      </div>
      <div className="border-1 border-[#3A444C] mb-2.5"></div>
      <div className="flex gap-4 px-4 text-white">
        <img
          src={`https://picsum.photos/id/${user.userId}/200/300`}
          alt=""
          className="rounded-full h-12 w-12"
        />
        <input
          type="text"
          className="py-2 text-xl focus:outline-none w-full text-white"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex justify-between items-center w-[86%] ml-20 mb-2.5">
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
    </section>
  );
}
