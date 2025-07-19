import React from "react";
import { Link, useNavigate } from "react-router";
import { Fade, Zoom } from "react-awesome-reveal";

const Groups = ({ groupsData }) => {
  const navigate = useNavigate();
  const displayedGroups = groupsData.slice(0, 6);
  // console.log(groupsData);

  return (
    <section className="w-11/12 md:w-10/12 mx-auto my-12 text-center">
      {/* Section Title */}
      <Fade direction="down" triggerOnce>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] dark:text-white mb-8">
          Explore Our Groups
        </h2>
      </Fade>

      {/* Group Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedGroups.map((group) => (
          <Zoom triggerOnce cascade damping={0.1} key={group._id}>
            <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-left border border-gray-200 dark:border-gray-600">
              {/* Group Image */}
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-sm font-semibold text-[#ff0000] dark:text-red-400 mb-1">
                    {group.hobbyCategory}
                  </p>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {group.groupName}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                    {group.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={group.userPhoto}
                      alt={group.userName}
                      className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-600"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                      Group Created By:{" "}
                      <span className="font-medium text-gray-800 dark:text-gray-200">{group.userName}</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Button */}
                <Link to={`/groupDetails/${group._id}`}>
                  <button className="mt-auto bg-[#ff0000] text-white py-2 px-4 rounded-full w-full hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition duration-300 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </Zoom>
        ))}
      </div>

      {/* View More Button */}
      {groupsData.length > 6 && (
        <Fade direction="up" triggerOnce delay={200}>
          <div className="mt-10">
            <button
              onClick={() => navigate("/allGroups")}
              className="bg-[#ff0000] text-white py-2 px-6 rounded-full hover:bg-red-600 text-lg cursor-pointer transition duration-300 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              View More
            </button>
          </div>
        </Fade>
      )}
    </section>
  );
};

export default Groups;
