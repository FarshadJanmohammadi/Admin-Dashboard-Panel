import React from "react";
import "./list.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainre">
        <Navbar />
        datatable
      </div>
    </div>
  );
};

export default List;
