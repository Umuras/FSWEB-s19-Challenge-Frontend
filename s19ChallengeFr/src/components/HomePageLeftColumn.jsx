import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function HomePageLeftColumn({ user }) {
  const history = useHistory();

  return (
    <div className="flex flex-col justify-start items-start w-90 h-screen bg-gray-800 text-white">
      <img src="/twittersymbol.png" alt="" className="w-10 h-10 ml-8 mt-8" />
      <Link className="flex items-center gap-4 ml-8 mt-8" to="/mainpage">
        <img src="/home.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Home</p>
      </Link>
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
      <Link
        className="flex items-center gap-4 ml-8 mt-8 cursor-pointer"
        to="/profile"
      >
        <img src="/profile.png" alt="" className="w-10 h-10" />
        <p className="font-bold">Profile</p>
      </Link>
      <div className="flex items-center gap-4 ml-8 mt-8">
        <img src="/more.png" alt="" className="w-10 h-10" />
        <p className="font-bold">More</p>
      </div>
      <button
        className="px-24 py-4 text-center rounded-3xl bg-blue-500 text-white font-bold ml-8 mt-8 cursor-pointer"
        onClick={() => alert("Merhaba")}
      >
        Tweet
      </button>

      <div className="flex ml-8">
        <img
          src={`https://picsum.photos/id/${user.userId}/200/300`}
          alt=""
          className="rounded-full h-12 w-12 p-0 mt-32 mr-4"
        />
        <div className="flex flex-col">
          <label htmlFor="" className="mt-32 font-bold">
            {user.userName}
          </label>
          <label
            htmlFor=""
            className=" font-bold text-gray-500 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/login");
            }}
          >
            Log out
          </label>
        </div>
        <div className="flex mt-32 ml-8 items-center">
          <img src="/more.png" className="w-8 h-8" alt="" />
        </div>
      </div>
    </div>
  );
}
