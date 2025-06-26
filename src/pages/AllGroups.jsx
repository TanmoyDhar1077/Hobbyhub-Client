import React from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router";
import { Link } from "react-router";

const AllGroups = () => {
  useTitle("All Groups");
  const groupsData = useLoaderData();

  return (
    <section className="w-11/12 md:w-10/12 mx-auto text-center">
      <div className="pt-[75px] mb-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] mb-8 dark:bg-gray-800 dark:text-white">
          Explore All Hobby Groups
        </h2>

        {/* Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {groupsData.map((group) => (
            <div className="flex flex-col bg-[#fff5f5] rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-left">
              {/* Group Image */}
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm font-semibold text-[#ff0000] mb-1">
                    {group.hobbyCategory}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {group.groupName}
                  </h3>

                  <p className="text-gray-700 mb-3 line-clamp-2">
                    {group.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={group.userPhoto}
                      alt={group.userName}
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span className="text-sm text-gray-600 line-clamp-1">
                      Group Created By:{" "}
                      <span className="font-medium">{group.userName}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Button */}
                <Link to={`/groupDetails/${group._id}`}>
                  <button className="mt-auto bg-[#ff0000] text-white py-2 px-4 rounded-full w-full hover:bg-red-600 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllGroups;
