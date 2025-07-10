import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

const CreateGroup = () => {
  useTitle("Create Group");
  const { user } = use(AuthContext);
  // console.log(user);

  const handleAddGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroupData = Object.fromEntries(formData.entries());
    const currentDate = new Date().toISOString();
    newGroupData.createdAt = currentDate;
    const photoUrl = user.photoURL;
    newGroupData.userPhoto = photoUrl;
    // console.log(newGroupData);

    fetch("https://hobbyhub-server-psi.vercel.app/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGroupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Group Created Successfully",
            text: `Group Name: ${newGroupData.groupName}`,
            showConfirmButton: false,
            iconColor: "#7fdf4b",
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error creating group:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
        });
      });
  };

  const hobbyOptions = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
    "Rock Climbing",
    "Cycling",
    "Bike Riding",
    "DIY & Crafts",
    "Camping",
    "Rock Climbing",
    "Dancing",
    "Acting",
    "Singing",
    "Robotics",
    "Coding",
    "Meditation",
    "Yoga",
    "Mental Health Awareness",
    "Animal Care",
    "Music & Instruments",
    "Cooking & Baking",
  ];

  return (
    <div className="pt-[65px] w-11/12 lg:w-10/12 mx-auto">
      <div className="max-w-3xl mx-auto p-6 my-10 bg-red-100 shadow-lg rounded-lg border border-red-200 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ff0000] dark:text-white">
          Create a Hobby Group
        </h2>
        <form onSubmit={handleAddGroup} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="groupName"
            placeholder="Group Name"
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <select
            name="hobbyCategory"
            className="w-full bg-white border text-red-500  border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          >
            <option value="">Select Hobby Category</option>
            {hobbyOptions.map((hobby, i) => (
              <option key={i} value={hobby}>
                {hobby}
              </option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Description"
            className="w-full bg-white border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <input
            type="text"
            name="meetingLocation"
            placeholder="Meeting Location"
            className="w-full bg-white border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <input
            type="number"
            name="maxMembers"
            placeholder="Max Members"
            className="w-full bg-white border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <input
            type="date"
            name="startDate"
            className="w-full bg-white border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <input
            type="url"
            name="imageUrl"
            placeholder="Image URL"
            className="w-full bg-white border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
            required
          />

          <input
            type="text"
            name="userName"
            value={user.displayName}
            readOnly
            className="w-full bg-gray-100 border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
          />
          <input
            type="email"
            name="userEmail"
            value={user.email}
            readOnly
            className="w-full bg-gray-100 border text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-gray-500"
          />

          <button
            type="submit"
            className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] border border-[#ff0000] w-full mt-4 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-300"
          >
            Create Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
