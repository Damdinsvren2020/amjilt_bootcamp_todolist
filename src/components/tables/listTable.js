import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Modal } from "@mantine/core";
import Swal from "sweetalert2";
const getDatafromLS = () => {
  const data = localStorage.getItem("lists");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const List_Table = () => {
  const [opened, setOpened] = useState(false);
  const [lists, setLists] = useState(getDatafromLS());
  console.log("array", lists);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleAddListSubmit = (e) => {
    e.preventDefault();
    let list = {
      title,
      description,
    };
    setLists([...lists, list]);
    setTitle("");
    setDescription("");
    Swal.fire({
      title: "Амжилттай нэмэгдлээ",
      icon: "success",
    });
  };
  const deleteList = (description) => {
    const filteredLists = lists.filter((element, index) => {
      return element.description !== description;
    });
    setLists(filteredLists);
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);
  return (
    <div>
      <div>
        <div className="flex space-x-2 justify-end p-[20px]">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setOpened(true)}
          >
            Нэмэх
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Гарчиг
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Тайлбар
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Үйлдэл
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lists.map((list) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {list.title}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {list.description}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <AiFillDelete
                          className="text-red-500 text-lg"
                          onClick={() => deleteList(list.description)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="List нэмэх"
      >
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleTel0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Гарчиг
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="title"
              placeholder="Та гарчиг аа оруулна уу"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleTel0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Тайлбар
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="description"
              placeholder="Та тайлбар аа оруулна уу"
            />
          </div>
        </div>

        <div className="flex space-x-2 justify-end">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleAddListSubmit}
          >
            Нэмэх
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default List_Table;
