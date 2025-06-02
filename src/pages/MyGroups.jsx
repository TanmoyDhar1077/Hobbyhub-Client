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
  console.log(myGroups);

  useEffect(() => {
    if (user?.email) {
      const filterMyGroups = allCreatedGroups.filter(
        (groups) => groups.userEmail === user.email
      );
      setMyGroups(filterMyGroups);
    }
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
      background: "#fff",
      color: "#333",
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
                timer: 2000,
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
      <h2 className="text-3xl font-bold text-center mb-6 text-[#ff0000]">
        My Created Groups
      </h2>
      {myGroups.length < 0 ? (
        <p className="text-center text-gray-500">
          You haven't created any groups yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-[#ff0000] text-white">
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
                  className="border-t text-[#ff0000] hover:bg-red-50 transition"
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
      )}
    </section>
  );
};

export default MyGroups;
