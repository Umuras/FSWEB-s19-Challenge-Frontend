export function TweetArea(props) {
  const { tweets } = props;
  console.log(tweets);

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div
            className="flex flex-col border-1 border-gray-500 px-4"
            key={tweet.id}
          >
            <div className="flex items-center mt-10 justify-between">
              <div className="flex items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={`https://picsum.photos/id/${tweet.userId}/200/300`}
                    alt=""
                    className="rounded-full h-10 w-10 m-0 p-0"
                  />
                </div>

                <div className="flex justify-start flex-col ml-2">
                  <div className="flex justify-between items-center w-[605px]">
                    <label className="text-white font-bold" htmlFor="">
                      {tweet.userFirstName + " " + tweet.userLastName} @
                      {tweet.email}
                    </label>
                    <img src="/more.png" alt="" className="w-10 h-10" />
                  </div>
                  <label className="text-white font-bold block mb-2" htmlFor="">
                    {tweet.tweetText}
                  </label>
                  {/* <img src="" className="w-[509px] h-[247px] m-0 p-0" alt="" /> */}
                  <div className="flex gap-40">
                    <div className="flex gap-2 items-center cursor-pointer">
                      <img src="/commenticon.png" alt="" className="w-5 h-5" />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.commentCount}
                      </label>
                    </div>

                    <div className="flex gap-2 cursor-pointer items-center">
                      <img src="/retweeticon.png" alt="" className="w-7 h-7" />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.retweetCount}
                      </label>
                    </div>

                    <div className="flex gap-2 items-center cursor-pointer">
                      <img src="/likeicon.png" alt="" className="w-5 h-5" />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.likeCount}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
