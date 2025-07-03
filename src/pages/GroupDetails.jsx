import React from "react";
import { useLoaderData } from "react-router";
import useTitle from "../hooks/useTitle";

const GroupDetails = () => {
  const group = useLoaderData();
  useTitle("Group Details");
  const isActive = new Date(group.startDate) > new Date();

  return (
    <section className="w-11/12 md:w-10/12 mx-auto">
      <div className="pt-[80px] mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="w-full h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Group Info */}
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <h2 className="text-3xl font-bold text-[#ff0000]">
              {group.groupName}
            </h2>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {group.hobbyCategory}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {group.description}
            </p>
            <p>
              <span className="font-semibold">Meeting Location:</span>{" "}
              {group.meetingLocation}
            </p>
            <p>
              <span className="font-semibold">Maximum Members:</span>{" "}
              {group.maxMembers}
            </p>
            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {(() => {
                const date = new Date(group.startDate);
                const day = String(date.getDate()).padStart(2, "0");
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const year = date.getFullYear();
                return `${day}-${month}-${year}`;
              })()}
            </p>
            <p>
              <span className="font-semibold">Created At:</span>{" "}
              {new Date(group.createdAt)
                .toISOString()
                .replace("T", " ")
                .slice(0, 19)}{" "}
              UTC
            </p>

            <div className="flex items-center gap-4 mt-4">
              <img
                src={group.userPhoto}
                alt={group.userName}
                className="w-12 h-12 rounded-full border object-cover"
              />
              <div>
                <p className="font-semibold">{group.userName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{group.userEmail}</p>
              </div>
            </div>

            {/* Join Group or Inactive Message */}
            <div className="mt-6">
              {isActive ? (
                <button className="bg-[#ff0000] text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 cursor-pointer">
                  Join Group
                </button>
              ) : (
                <p className="text-red-600 font-semibold text-lg">
                  This group is no longer active.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupDetails;
