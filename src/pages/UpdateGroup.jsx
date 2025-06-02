import React, { use } from "react";
import { useNavigate, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../context/AuthContext";

const UpdateGroup = () => {
  useTitle("Update Group");
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
  } = useLoaderData();

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    const currentDate = new Date().toISOString();
    updatedData.createdAt = currentDate;
    const photoUrl = user.photoURL;
    updatedData.userPhoto = photoUrl;

    fetch(`https://hobbyhub-server-psi.vercel.app/groups/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => { 
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Group Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myGroups");
        }
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
      <div className="max-w-3xl mx-auto p-6 my-10 bg-red-100 shadow-lg rounded-lg border border-red-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#ff0000]">
          Update Hobby Group
        </h2>
        <form onSubmit={handleUpdateGroup} className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="groupName"
            defaultValue={groupName}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <select
            type="text"
            name="hobbyCategory"
            defaultValue={hobbyCategory}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
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
            defaultValue={description}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <input
            type="text"
            name="meetingLocation"
            defaultValue={meetingLocation}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <input
            type="number"
            name="maxMembers"
            defaultValue={maxMembers}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <input
            type="date"
            name="startDate"
            defaultValue={startDate}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <input
            type="url"
            name="imageUrl"
            defaultValue={imageUrl}
            className="w-full border bg-white text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
            required
          />

          <input
            type="text"
            name="userName"
            value={user.displayName}
            readOnly
            className="w-full border bg-gray-100 text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
          />

          <input
            type="email"
            name="userEmail"
            value={user.email}
            readOnly
            className="w-full border bg-gray-100 text-red-500 border-red-300 focus:outline-none focus:ring-1 focus:ring-red-300 p-2 rounded-md"
          />

          <button
            type="submit"
            className="btn bg-[#ff0000] text-white hover:bg-white hover:text-[#ff0000] border border-[#ff0000] w-full mt-4"
          >
            Update Group
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateGroup;
