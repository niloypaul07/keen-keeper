import React from "react";
import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  return (

  
    <Link href={`/friends/${friend.id}`}>
      
      <div className="group relative  border border-base-300 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 text-center overflow-hidden hover:-translate-y-1">
        
        <div className="absolute inset-0 opacity-0 "></div>

        
        <div className="relative w-20 h-20 mx-auto mb-4">
          <Image
            src={friend.picture}
            alt={friend.name}
            loading="eager"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full "
          />
        </div>

        
        <h2 className="text-lg font-semibold text-base-content">
          {friend.name}
        </h2>

        
        <p className="text-sm text-gray-500 mb-2">
          {friend.days_since_contact} days ago
        </p>

        
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline badge-sm px-3 py-2 text-xs "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div
          className={`inline-block px-4 py-2 rounded-full text-xs font-semibold capitalize shadow-sm ${
            friend.status === "overdue"
              ? "bg-[#EF4444] text-white"
                  : friend.status === "almost due"
                    ? "bg-amber-400 text-white"
                    : "bg-[#244D3F] text-white"
          }`}
        >
          {friend.status}
        </div>
        
      </div>
    </Link>
  );
};

export default FriendCard;
