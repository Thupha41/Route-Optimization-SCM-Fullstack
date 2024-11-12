import React, { useState } from "react";
import TopSearchBar from "../../../Components/TopSearchBar/TopSearchBar";
import SideBarAdmin from "../../../Components/SidebarAdmin/SidebarAdmin";
import filter from "../../../assets/Admin/filter.png";
import arrowdown from "../../../assets/Admin/arrowdown.png";
import reset from "../../../assets/Admin/reset.png";

const AccountManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "0123456789",
      address: "123 Main St",
      role: "Manager",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "0312893818",
      address: "456 Elm St",
      role: "Planner",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "Manager",
  });
  const [editUserId, setEditUserId] = useState(null);
  const [filterRole, setFilterRole] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const handleCreate = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      role: "Manager",
    });
    setEditUserId(null);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const newUser = {
      id: editUserId || Date.now(),
      ...formData,
      created_at: editUserId
        ? users.find((user) => user.id === editUserId).created_at
        : now,
      updated_at: now,
    };

    if (editUserId) {
      setUsers(users.map((user) => (user.id === editUserId ? newUser : user)));
    } else {
      setUsers([...users, newUser]);
    }

    setIsModalOpen(false);
    setEditUserId(null);
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
    });
    setEditUserId(user.id);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleResetFilters = () => {
    setFilterRole("");
    setFilterDate("");
  };

  const filteredUsers = users.filter((user) => {
    const matchesRole = filterRole ? user.role === filterRole : true;
    const matchesDate = filterDate
      ? user.created_at.toLocaleDateString() ===
        new Date(filterDate).toLocaleDateString()
      : true;
    return matchesRole && matchesDate;
  });

  return (
    <div className="flex h-screen font-nunito">
      <SideBarAdmin />
      <div className="flex-1 flex flex-col">
        <TopSearchBar />
        <div className="p-6 bg-gray-100 flex-grow">
          <h1 className="text-3xl font-bold mb-4">Account Management</h1>

          {/* Filter Section */}
          <div className="flex items-center w-full">
            <div className="flex items-center">
              <img src={filter} alt="Filter" className="w-5 h-5 mr-2" />
              <span className="mx-10 font-bold">Filter By</span>

              {/* Date Filter */}
              <div className="relative flex items-center mx-10">
                <span className="font-bold mr-5">Date</span>
                <img
                  src={arrowdown}
                  alt="Date Filter"
                  className="cursor-pointer w-5 h-5 mr-1"
                  onClick={() => setShowDateDropdown(!showDateDropdown)}
                />
                {showDateDropdown && (
                  <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="absolute top-10 left-0 p-1 border border-gray-300 rounded"
                  />
                )}
              </div>

              {/* Role Filter */}
              <div className="relative flex items-center mx-10">
                <span className="font-bold mr-5">Role</span>
                <img
                  src={arrowdown}
                  alt="Role Filter"
                  className="cursor-pointer w-5 h-5 mr-1"
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                />
                {showRoleDropdown && (
                  <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="absolute top-10 left-0 p-1 border border-gray-300 rounded"
                  >
                    <option value="">All</option>
                    <option value="Manager">Manager</option>
                    <option value="Planner">Planner</option>
                  </select>
                )}
              </div>

              <button
                onClick={handleResetFilters}
                className="flex items-center text-red-600 p-2 font-semibold rounded"
              >
                <img src={reset} alt="Reset Filter" className="mr-1 w-4 h-4" />
                Reset Filter
              </button>
            </div>

            <button
              onClick={handleCreate}
              className="bg-blue-500 text-white p-2 rounded mb-4 ml-auto"
            >
              Create Account
            </button>
          </div>
          <div className="overflow-x-auto mb-6">
            {/* Users Table */}
            <table className="w-full mt-4 table-fixed border-collapse shadow-md rounded-lg bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    ID
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Phone
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Address
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Role
                  </th>
                  <th className="border p-2 text-left font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border p-2 text-gray-800">{user.id}</td>
                    <td className="border p-2 text-gray-800">{user.name}</td>
                    <td className="border p-2 text-gray-800">{user.email}</td>
                    <td className="border p-2 text-gray-800">{user.phone}</td>
                    <td className="border p-2 text-gray-800">{user.address}</td>
                    <td className="border p-2 text-gray-800">{user.role}</td>
                    <td className="border p-2 text-gray-800">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-500 hover:text-blue-700 font-semibold mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-500 hover:text-red-700 font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-2xl font-bold mb-4">
                  {editUserId ? "Edit Account" : "Create Account"}
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block font-semibold mb-1">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    >
                      <option value="Manager">Manager</option>
                      <option value="Planner">Planner</option>
                    </select>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="bg-gray-500 text-white p-2 rounded mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white p-2 rounded"
                    >
                      {editUserId ? "Update Account" : "Save Account"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
