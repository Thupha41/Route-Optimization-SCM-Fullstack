import React from "react";
import TopSearchBar from "../../Components/TopSearchBar/TopSearchBar";
import SideBarAdmin from "../../Components/SidebarAdmin/SidebarAdmin";

const Admin = () => {
  return (
    <div className="flex h-screen font-nunito">
      <SideBarAdmin />

      {/* Main content*/}
      <div className="flex-1 flex flex-col">
        <TopSearchBar />
        <div className="p-6 bg-gray-100 flex-grow">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
