export function HomePageLeftColumn() {
  return (
    <>
      <img src="/twittersymbol.png" alt="" className="w-10 h-10 ml-8 mt-8" />
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/home.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Home</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/explore.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Explore</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/bell.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Notifications</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/mail.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Messages</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/bookmark.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Bookmarks</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/lists.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Lists</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/profile.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Profile</p>
      </div>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/more.png" alt="" className="w-10 h-10" />
        <p className="font-bold">More</p>
      </div>
      <button
        className="px-16 py-4 text-center rounded-3xl bg-blue-500 text-white font-bold ml-8 mt-8 cursor-pointer"
        onClick={() => alert("Merhaba")}
      >
        Tweet
      </button>

      <div className="flex ml-16">
        <img
          src="https://picsum.photos/id/2/200/300"
          alt=""
          className="rounded-full h-12 w-12 p-0 mt-32 mr-4"
        />
        <div className="flex flex-col">
          <label htmlFor="" className="mt-32 font-bold">
            auk@test.com
          </label>
          <label htmlFor="" className=" font-bold text-gray-500 cursor-pointer">
            Log out
          </label>
        </div>
      </div>
    </>
  );
}
