import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import List_Table from "../../components/tables/listTable";

const List = () => {
  return (
    <div className="w-full">
      <div className="p-[10px] m-auto">
        <div className="flex">
          <div className="w-[300px] h-[full]">
            <Sidebar />
          </div>
          <div className="w-full ml-[5px] bg-[#FAF8F8]">
            <List_Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
