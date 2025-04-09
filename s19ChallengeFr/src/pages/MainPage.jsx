import axios from "axios";
import { useEffect, useState } from "react";
import { HomePageLeftColumn } from "../components/HomePageLeftColumn";
import { TweetInput } from "../components/TweetInput";
import { TweetArea } from "../components/TweetArea";

export function MainPage() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workintech/api/v1/tweet/all", {
        withCredentials: true, //Bunun sayesinde çerezlerin backende gönderilip oturum doğrulaması yaptırıyoruz.
      })
      .then((response) => {
        console.log(response);
        setTweets(response.data);
      });
  }, []);
  function getTweets() {}

  return (
    // Sayfanın yüksekliği en az ekran kadar olur ama içerik fazlaysa uzar. min-h-screen ile
    <section className="bg-cyan-900 min-h-screen w-screen">
      <div className="flex ">
        <div className="flex flex-col justify-start items-start ml-20">
          <HomePageLeftColumn />
        </div>
        <div className="flex flex-col w-screen">
          <TweetInput />
          <TweetArea tweets={tweets} />
        </div>
      </div>
    </section>
  );
}
