import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const MyGroups = () => {
  useTitle("My Groups");
  const navigate = useNavigate();
  const allCreatedGroups = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);

  // Filter groups created by the logged-in user
  useEffect(() => {
    const filteredGroups = allCreatedGroups.filter(
      (group) => group?.userEmail === user?.email
    );
    setMyGroups(filteredGroups);
  }, [allCreatedGroups, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "Cancel",
      background: document.documentElement.classList.contains('dark') ? '#374151' : '#fff',
      color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#333',
      iconColor: "#ff0000",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobbyhub-server-psi.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
                showConfirmButton: false,
                iconColor: "#7fdf4b",
                timer: 2000,
                background: document.documentElement.classList.contains('dark') ? '#374151' : '#ffffff',
                color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#333333',
              });
              const remainingGroups = myGroups.filter(
                (group) => group._id !== id
              );
              setMyGroups(remainingGroups);
            }
          });
      }
    });
  };

  return (
    <section className="pt-[80px] w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#ff0000] dark:text-white">
        My Created Groups
      </h2>
      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-6">
          <thead className="bg-[#ff0000] dark:bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">SL.</th>
              <th className="py-3 px-4 text-left">Group Name</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Created By</th>
              <th className="py-3 px-4 text-left">User Email</th>
              <th className="py-3 px-4 text-left">Start Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroups.map((group, index) => (
              <tr
                key={group._id}
                className="border-t text-[#ff0000] dark:text-gray-300 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{group.groupName}</td>
                <td className="py-3 px-4">{group.hobbyCategory}</td>
                <td className="py-3 px-4">{group.userName}</td>
                <td className="py-3 px-4">{group.userEmail}</td>
                <td className="py-3 px-4">
                  {new Date(group.startDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 cursor-pointer"
                    onClick={() => navigate(`/updateGroup/${group._id}`)}
                  >
                    <FaRegEdit size={20} />
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 cursor-pointer"
                    onClick={() => handleDelete(group._id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyGroups;
