import { useEffect, useState } from "react";
import { HomePageLeftColumn } from "../components/HomePageLeftColumn";
import { HomePageRightColumn } from "../components/HomePageRightColumn";
import { ProfilePageHeader } from "../components/ProfilePageHeader";
import axios from "axios";
import { TweetArea } from "../components/TweetArea";

export function ProfilePage() {
  const [tweets, setTweets] = useState([]);
  const [commentQuantity, setCommentQuantity] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/workintech/api/v1/tweet/user", {
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

  return (
    <section className="bg-gray-800 min-h-screen">
      <div className="flex ">
        <div className="flex flex-col justify-start items-start ml-60">
          <HomePageLeftColumn />
        </div>
        <div className="flex flex-col w-[655px]">
          <ProfilePageHeader />
          <TweetArea tweets={tweets} commentQuantity={commentQuantity} />
        </div>
        <div className="flex flex-col justify-start items-start ml-8 w-[580px]">
          <HomePageRightColumn />
        </div>
      </div>
    </section>
  );
}
