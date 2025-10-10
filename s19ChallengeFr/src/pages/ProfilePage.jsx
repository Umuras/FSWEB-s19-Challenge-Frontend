import { useEffect, useState } from "react";
import { HomePageLeftColumn } from "../components/HomePageLeftColumn";
import { HomePageRightColumn } from "../components/HomePageRightColumn";
import { ProfilePageHeader } from "../components/ProfilePageHeader";
import axios from "axios";
import { TweetArea } from "../components/TweetArea";

export function ProfilePage({ user }) {
  const [tweets, setTweets] = useState([]);
  const [commentQuantity, setCommentQuantity] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/workintech/api/v1/tweet/user", {
        withCredentials: true, //Bunun sayesinde çerezlerin backende gönderilip oturum doğrulaması yaptırıyoruz.
        headers: {
          Authorization: `Bearer ${token}`, // Kullanıcının token'ını header'a ek
        },
      })
      .then((response) => {
        console.log(response);
        setTweets(response.data);
      });

    axios
      .get("http://localhost:3000/workintech/api/v1/comment/quantity/1", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setCommentQuantity(response.data);
      });
  }, []);

  return (
    <section className="bg-gray-800 min-h-screen">
      <div className="flex">
        <div className="flex flex-col justify-start items-start ml-[88px]">
          <HomePageLeftColumn user={user} />
        </div>
        <div className="flex flex-col mr-16 w-[70.3%]">
          <ProfilePageHeader user={user} tweets={tweets} />
          <TweetArea tweets={tweets} commentQuantity={commentQuantity} />
        </div>
        <div className="flex flex-col justify-start items-start ml-8 mr-24">
          <HomePageRightColumn />
        </div>
      </div>
    </section>
  );
}
