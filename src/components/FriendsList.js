"use client";
import React, { useEffect, useState } from "react";
import friendsData from "../../public/friends.json";
import FriendCard from "./FriendCard";

const FriendsList = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-5 px-4 max-w-7xl mx-auto">
      <h2 className=" text-3xl font-bold text-[#2d4f4f] mb-5">Your Friends</h2>
      {loading ? (
        <div className="h-64 flex flex-col items-center justify-center gap-4">
          <span className="loading loading-spinner loading-lg text-[#2d4f4f]"></span>
         
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friendsData.map((friend, id) => (
            <FriendCard key={id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsList;
