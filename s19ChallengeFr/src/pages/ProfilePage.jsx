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
    <section className="bg-[#17202A] min-h-screen">
      <div className="flex max-w-[1440px]">
        <div className="flex flex-col justify-start items-start ml-[5.5rem]">
          <HomePageLeftColumn user={user} />
        </div>
        <div className="flex flex-col">
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
