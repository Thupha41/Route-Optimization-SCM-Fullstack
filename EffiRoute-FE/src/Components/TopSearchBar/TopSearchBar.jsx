import { useState } from "react";
import searchIcon from "../../assets/Admin/search.png";
import menuIcon from "../../assets/Admin/menu.png";
import notificationIcon from "../../assets/Admin/notification.png";
import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "../../redux/action/accountAction";
import { useNavigate } from "react-router-dom";
const TopSearchBar = () => {
  const user = useSelector((state) => state.account.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    dispatch(doLogout());
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between w-full p-4 font-nunito">
      {/* Left side*/}
      <div className="flex items-center space-x-4">
        {/* Menu Icon */}
        <img src={menuIcon} alt="Menu" className="w-6 h-6 cursor-pointer" />

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full border-2 border-[#D5D5D5] px-4 py-2 w-[70rem]">
          <img src={searchIcon} alt="Search" className="w-4 h-4 mr-2" />
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <img
            src={notificationIcon}
            alt="Notification"
            className="w-8 h-8 cursor-pointer"
          />
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-1.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            6
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          {user && user.access_token && (
            <>
              <div className="flex flex-col items-start">
                <span className="text-base font-bold">{user.username}</span>
                <span className="text-sm text-gray-500">
                  {user.roleWithPermission.name}
                </span>
              </div>
            </>
          )}
          <div className="setting-container relative">
            <button
              onClick={toggleDropdown}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Settings{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
