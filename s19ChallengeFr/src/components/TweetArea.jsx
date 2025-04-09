export function TweetArea(props) {
  const { tweets } = props;
  console.log(tweets);

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div className="flex flex-col justify-center" key={tweet.id}>
            <div className="flex items-center  mx-122 justify-between mt-10">
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/id/${tweet.userId}/200/300`}
                  alt=""
                  className="rounded-full h-10 w-10 m-0 p-0"
                />
                <label className="text-white font-bold" htmlFor="">
                  {tweet.userFirstName + " " + tweet.userLastName} @
                  {tweet.email} - 15 gün önce
                </label>
              </div>

              <img src="/more.png" alt="" className="w-10 h-10" />
            </div>
            <div className="flex justify-start flex-col mx-122">
              <label className="text-black font-bold block" htmlFor="">
                {tweet.tweetText}
              </label>
              <div className="flex gap-2 items- justify-between">
                <div className="flex gap-2 items-center cursor-pointer">
                  <img src="/commenticon.png" alt="" className="w-5 h-5" />
                  <label htmlFor="" className="font-bold text-white">
                    10
                  </label>
                </div>

                <div className="flex gap-2 cursor-pointer items-center">
                  <img src="/retweeticon.png" alt="" className="w-7 h-7" />
                  <label htmlFor="" className="font-bold text-white">
                    10
                  </label>
                </div>

                <div className="flex gap-2 items-center cursor-pointer">
                  <img src="/likeicon.png" alt="" className="w-5 h-5" />
                  <label htmlFor="" className="font-bold text-white">
                    10
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
