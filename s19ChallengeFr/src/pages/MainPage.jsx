import axios from "axios";
import { useEffect, useState } from "react";
import { HomePageLeftColumn } from "../components/HomePageLeftColumn";
import { TweetInput } from "../components/TweetInput";
import { TweetArea } from "../components/TweetArea";
import { HomePageRightColumn } from "../components/HomePageRightColumn";

export function MainPage({ user }) {
  const [tweets, setTweets] = useState([]);
  const [commentQuantity, setCommentQuantity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workintech/api/v1/tweet/all", {
        withCredentials: true, //Bunun sayesinde çerezlerin backende gönderilip oturum doğrulaması yaptırıyoruz.
      })
      .then((response) => {
        setTweets(response.data);
      });

    axios
      .get("http://localhost:3000/workintech/api/v1/comment/quantity/1", {
        withCredentials: true,
      })
      .then((response) => {
        setCommentQuantity(response.data);
      });
  }, []);

  return (
    // Sayfanın yüksekliği en az ekran kadar olur ama içerik fazlaysa uzar. min-h-screen ile
    <section className="bg-[#17202A] min-h-screen">
      <div className="flex max-w-[1440px]">
        <div className="flex flex-col justify-start items-start ml-[5.5rem]">
          <HomePageLeftColumn user={user} />
        </div>
        <div className="flex flex-col">
          <TweetInput user={user} />
          <TweetArea tweets={tweets} commentQuantity={commentQuantity} />
        </div>
        <div className="flex flex-col justify-start items-start ml-8 mr-24">
          <HomePageRightColumn />
        </div>
      </div>
    </section>
  );
}
