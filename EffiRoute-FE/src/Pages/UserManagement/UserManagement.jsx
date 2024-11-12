/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { useSelector } from "react-redux";
import "./UserManagement.css";
const UserManagement = () => {
  const user = useSelector((state) => state.account.userInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [memberInfo, setMemberInfo] = useState({
    email: "",
    password: "********",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    username: "",
    phone: "",
    marketingAgreement: true,
  });

  const [companyInfo, setCompanyInfo] = useState({
    companyName: "EffiRoute",
    registrationNumber: "",
    sector: "Route Optimization",
  });

  // Update memberInfo when user data is available
  useEffect(() => {
    if (user) {
      setMemberInfo({
        email: user.email || "",
        password: "********",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        username: user.username || "",
        phone: user.phone || "",
        marketingAgreement: true,
      });
    }
  }, [user]);

  const [isEditingCompany, setIsEditingCompany] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Validate passwords if they were changed
    if (memberInfo.newPassword || memberInfo.confirmPassword) {
      if (!memberInfo.oldPassword) {
        alert("Please enter your current password");
        return;
      }
      if (memberInfo.newPassword !== memberInfo.confirmPassword) {
        alert("New passwords do not match");
        return;
      }
      if (memberInfo.newPassword.length < 6) {
        alert("New password must be at least 6 characters long");
        return;
      }
    }

    // TODO: Add API call to update user information
    setIsEditing(false);

    // Clear password fields
    setMemberInfo((prev) => ({
      ...prev,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const handleCompanyInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveCompanyChanges = () => {
    // Logic to save changes (e.g., API call)
    setIsEditingCompany(false);
  };

  // Update the useEffect to reset password fields when editing is cancelled
  useEffect(() => {
    if (!isEditing) {
      setMemberInfo((prev) => ({
        ...prev,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    }
  }, [isEditing]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Hidden on mobile, shown as top bar */}
      <aside className="w-full md:w-64 lg:w-80 border-b md:border-r md:border-b-0 bg-white p-4">
        <h3 className="text-lg font-semibold text-gray-400 mb-4">
          Basic Information Management
        </h3>
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 mb-4 rounded cursor-pointer">
            Manage Account Information
          </li>
        </ul>
        <h3 className="text-lg font-semibold text-gray-400 mb-4">
          Manage Payment Information
        </h3>
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded cursor-pointer">
            Payment Management
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Member Information Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b">
            <div className="flex items-center mb-4 sm:mb-0">
              <FaUser className="text-primary bg-orange-100 rounded-lg w-10 h-10 p-2 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold">
                Member Information
              </h2>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <button
                className="flex-1 sm:flex-none bg-gray-200 text-gray-500 px-4 py-2 rounded hover:bg-gray-300"
                onClick={handleEditToggle}
              >
                {isEditing ? "Cancel" : "Edit information"}
              </button>
              {isEditing && (
                <button
                  className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 rounded hover:bg-orange-600 ml-2"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField
                label="Email"
                value={memberInfo.email}
                name="email"
                isEditing={isEditing}
                onChange={handleInputChange}
              />
              <InfoField
                label="Password"
                value={memberInfo.password}
                memberInfo={memberInfo}
                isEditing={isEditing}
                isPassword={true}
                onChange={handleInputChange}
              />
              <InfoField
                label="Name"
                value={memberInfo.username}
                name="username"
                isEditing={isEditing}
                onChange={handleInputChange}
              />
              <InfoField
                label="Phone number"
                value={memberInfo.phone}
                isEditing={isEditing}
                onChange={(e) => handleInputChange(e, "phone")}
              />
              <InfoField
                label="Receive marketing information"
                value={memberInfo.marketingAgreement ? "Yes" : "No"}
                isEditing={isEditing}
                isCheckbox={true}
                checked={memberInfo.marketingAgreement}
                onChange={() =>
                  setMemberInfo((prev) => ({
                    ...prev,
                    marketingAgreement: !prev.marketingAgreement,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Company Information Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b">
            <div className="flex items-center mb-4 sm:mb-0">
              <IoIosBusiness className="text-green-500 bg-green-100 rounded-lg w-10 h-10 p-2 mr-2" />
              <h2 className="text-xl md:text-2xl font-bold">
                Company Information
              </h2>
            </div>
            <div className="flex items-center w-full sm:w-auto">
              <button
                className="flex-1 sm:flex-none bg-gray-200 text-gray-500 px-4 py-2 rounded hover:bg-gray-300"
                onClick={() => setIsEditingCompany(!isEditingCompany)}
              >
                {isEditingCompany ? "Cancel" : "Edit information"}
              </button>
              {isEditingCompany && (
                <button
                  className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 rounded hover:bg-orange-600 ml-2"
                  onClick={handleSaveCompanyChanges}
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoField label="Company name" value={companyInfo.companyName} />
              <InfoField
                label="Business registration number"
                value={companyInfo.registrationNumber}
                isEditing={isEditingCompany}
                onChange={(e) =>
                  handleCompanyInputChange(e, "registrationNumber")
                }
              />
              <InfoField
                label="Industrial sector"
                value={companyInfo.sector}
                isEditing={isEditingCompany}
                onChange={(e) => handleCompanyInputChange(e, "sector")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable InfoField component
const InfoField = ({
  label,
  value,
  name,
  isEditing,
  onChange,
  isPassword,
  isCheckbox,
  checked,
  memberInfo,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-2">
      <label className="text-gray-600 w-full md:w-1/3 mb-1 md:mb-0">
        {label}
      </label>
      <div className="w-full md:w-2/3">
        {isEditing ? (
          isPassword ? (
            <div className="space-y-2 w-full">
              <input
                type="password"
                name="oldPassword"
                placeholder="Current Password"
                value={memberInfo?.oldPassword || ""}
                onChange={onChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={memberInfo?.newPassword || ""}
                onChange={onChange}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={memberInfo?.confirmPassword || ""}
                onChange={onChange}
                className="w-full p-2 border rounded"
              />
              {memberInfo?.newPassword &&
                memberInfo?.confirmPassword &&
                memberInfo.newPassword !== memberInfo.confirmPassword && (
                  <span className="text-red-500 text-sm">
                    Passwords do not match
                  </span>
                )}
            </div>
          ) : isCheckbox ? (
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="w-4 h-4"
            />
          ) : (
            <input
              type="text"
              name={name}
              value={value}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          )
        ) : (
          <span className="font-bold">{value}</span>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
