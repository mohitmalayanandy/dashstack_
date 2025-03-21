import { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState({
    date: "",
    type: "",
    status: "",
  });

  useEffect(() => {
    fetch("/orders.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    let result = data;

    if (filter.date) {
      result = result.filter((item) => item.date === filter.date);
    }

    if (filter.type) {
      result = result.filter((item) => item.type === filter.type);
    }

    if (filter.status) {
      result = result.filter((item) => item.status === filter.status);
    }

    setFilteredData(result);
  }, [filter, data]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Processing":
        return "bg-blue-100 text-blue-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      case "On Hold":
        return "bg-yellow-100 text-yellow-600";
      case "In Transit":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const resetFilter = () => {
    setFilter({ date: "", type: "", status: "" });
  };

  return (
    <div className="container mx-auto p-4 h-full overflow-hidden">
      <div className="flex gap-4 mb-2 justify-end items-center">
        <input
          type="date"
          name="date"
          value={filter.date}
          onChange={handleFilterChange}
          className="border border-gray-300 p-2 rounded-md"
        />

        <select
          name="type"
          value={filter.type}
          onChange={handleFilterChange}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Order Type</option>
          {[...new Set(data.map((item) => item.type))].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="">Order Status</option>
          {[...new Set(data.map((item) => item.status))].map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button
          onClick={resetFilter}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Reset Filter
        </button>
      </div>

      <div className="overflow-x-auto h-full pb-12">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Address</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.address}</td>
                <td className="py-2 px-4 border-b">{item.date}</td>
                <td className="py-2 px-4 border-b">{item.type}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
