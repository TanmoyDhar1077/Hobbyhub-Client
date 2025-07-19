import React, { useState, useEffect } from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
// import SortDropdown from "../components/SortDropdown";

const AllGroups = () => {
  useTitle("All Groups");
  const groupsData = useLoaderData();

  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredGroups, setFilteredGroups] = useState([]);
  

  useEffect(() => {
    const filtered = groupsData.filter((group) =>
      group.groupName.toLowerCase().includes(searchText.toLowerCase())
    );

    filtered.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredGroups(filtered);
  }, [searchText, sortOrder, groupsData]);

  const formatDateToBD = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  return (
    <section className="w-11/12 md:w-10/12 mx-auto text-center">
      <div className="pt-[75px] mb-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff0000] dark:text-white mb-4">
          Explore All Hobby Groups
        </h2>

        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by group name..."
            className="w-full md:w-1/2 border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-700"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-700"
          >
            <option value="asc">Sort by Date: Oldest First</option>
            <option value="desc">Sort by Date: Newest First</option>
          </select>
        </div>

        {/* Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredGroups.map((group) => (
            <div
              key={group._id}
              className="flex flex-col bg-[#fff5f5] dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-left border border-gray-200 dark:border-gray-700"
            >
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-48 object-cover"
              />
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

                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Starting Date: {formatDateToBD(group.startDate)}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={group.userPhoto}
                      alt={group.userName}
                      className="w-8 h-8 rounded-full object-cover border dark:border-gray-600"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
                      Group Created By:{" "}
                      <span className="font-medium text-gray-800 dark:text-gray-200">{group.userName}</span>
                    </span>
                  </div>
                </div>

                <Link to={`/groupDetails/${group._id}`}>
                  <button className="mt-auto bg-[#ff0000] text-white py-2 px-4 rounded-full w-full hover:bg-red-600 dark:bg-gray-600 dark:hover:bg-gray-700 transition duration-300 cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <p className="mt-8 text-gray-500 dark:text-gray-300">
            No groups found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllGroups;
