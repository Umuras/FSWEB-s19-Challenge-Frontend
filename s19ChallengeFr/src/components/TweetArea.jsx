export function TweetArea(props) {
  const { tweets } = props;

  tweets.sort((a, b) => a.tweetId - b.tweetId);

  return (
    <>
      {tweets.map((tweet) => {
        return (
          <div
            className="flex flex-col border-1 border-[#3A444C] w-full mr-12 px-4"
            key={tweet.tweetId}
          >
            <div className="flex items-center mt-[9px] justify-between">
              <div className="flex items-start justify-center">
                <div className="flex items-center">
                  <img
                    src={`https://picsum.photos/id/${tweet.userId}/200/300`}
                    alt=""
                    className="rounded-full h-12 w-12 mt-[5px] mr-2"
                  />
                </div>

                <div className="flex justify-start flex-col ml-2">
                  <div className="flex justify-between items-center w-[605px]">
                    <label className="text-white font-bold" htmlFor="">
                      {tweet.userFirstName + " " + tweet.userLastName}{" "}
                      <label className="text-gray-500 font-normal" htmlFor="">
                        @{tweet.userName}
                      </label>
                    </label>
                  </div>
                  <label
                    className="text-white font-normal text-[15px] block mb-2"
                    htmlFor=""
                  >
                    {tweet.tweetText}
                  </label>
                  {tweet.tweetImageUrl && (
                    <img
                      src={tweet.tweetImageUrl}
                      className="w-[509px] h-[247px] m-0 p-0 rounded-2xl border-1 border-[#3A444C] mb-2"
                      alt=""
                    />
                  )}

                  <div className="flex gap-25 mb-2">
                    <div className="flex gap-2 items-center cursor-pointer">
                      <img src="/comment2.png" alt="" className="w-5 h-5" />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.commentCount}
                      </label>
                    </div>

                    <div className="flex gap-2 cursor-pointer items-center">
                      <img src="/retweet2.png" alt="" className="w-5 h-4" />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.retweetCount}
                      </label>
                    </div>

                    <div className="flex gap-2 items-center cursor-pointer">
                      <img
                        src="/likeicon.png"
                        alt=""
                        className="w-5 h-5 background-gray-500"
                      />
                      <label htmlFor="" className="font-bold text-white">
                        {tweet.likeCount}
                      </label>
                    </div>

                    <div className="flex gap-2 items-center cursor-pointer">
                      <img
                        src="/share.png"
                        alt=""
                        className="w-5 h-5 background-gray-500"
                      />
                      <label htmlFor="" className="font-bold text-white">
                        0
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
