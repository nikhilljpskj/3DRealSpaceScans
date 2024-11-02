import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNavbar from "containers/AdminNavbar/LeftNavbar";
import TopNavbar from "containers/AdminNavbar/TopNavbar";
import Input from "shared/Input/Input";
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  password?: string; // To store the new password for update
}

const UsersList: React.FC = () => {

  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("jwtToken");
    if (!token) {
       navigate("/login");
    }
  }, [navigate]);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handlePasswordChange = (id: number, newPassword: string) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, password: newPassword } : user
    ));
  };

  const handleUpdate = async (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (!user || !user.password) return;
  
    try {
      const response = await axios.put(`/api/users/${userId}`, {
        fullName: user.name,
        email: user.email,
        mobile: user.mobile,
        password: user.password, // Ensure password hashing on the backend
      });
      console.log(response.data.message);
      alert("User details updated successfully");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  

  const handleRemove = async (userId: number) => {
    try {
      await axios.delete(`/api/users/deleteuser/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Error removing user:", error);
    }
  };

  return (
    <div className="flex">
      <LeftNavbar />
      <div className="flex-1 ml-64">
        <TopNavbar />
        <div className="p-6 mt-16">
          <h2 className="text-3xl font-semibold mb-6">User List</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                <th className="border border-gray-300 px-4 py-2">Update Password</th>
                <th className="border border-gray-300 px-4 py-2">Update</th>
                <th className="border border-gray-300 px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.mobile}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Input
                      className="mt-1.5"
                      type="password"
                      value={user.password || ""}
                      onChange={(e) => handlePasswordChange(user.id, e.target.value)}
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      onClick={() => handleUpdate(user.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleRemove(user.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
