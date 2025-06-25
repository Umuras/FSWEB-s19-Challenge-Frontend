import axios from "axios";
import { useEffect, useState } from "react";
import { HomePageLeftColumn } from "../components/HomePageLeftColumn";
import { TweetInput } from "../components/TweetInput";
import { TweetArea } from "../components/TweetArea";
import { HomePageRightColumn } from "../components/HomePageRightColumn";

export function MainPage() {
  const [tweets, setTweets] = useState([]);
  const [commentQuantity, setCommentQuantity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workintech/api/v1/tweet/all", {
        withCredentials: true, //Bunun sayesinde çerezlerin backende gönderilip oturum doğrulaması yaptırıyoruz.
      })
      .then((response) => {
        console.log(response);
        setTweets(response.data);
      });

    axios
      .get("http://localhost:3000/workintech/api/v1/comment/quantity", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setCommentQuantity(response.data);
      });
  }, []);
  function getTweets() {}

  return (
    // Sayfanın yüksekliği en az ekran kadar olur ama içerik fazlaysa uzar. min-h-screen ile
    <section className="bg-gray-800 min-h-screen">
      <div className="flex ">
        <div className="flex flex-col justify-start items-start ml-60">
          <HomePageLeftColumn />
        </div>
        <div className="flex flex-col">
          <TweetInput />
          <TweetArea tweets={tweets} commentQuantity={commentQuantity} />
        </div>
        <div className="flex flex-col justify-start items-start ml-8 w-[580px]">
          <HomePageRightColumn />
        </div>
      </div>
    </section>
  );
}
