"use client";

import Heading from "@/components/ui/Heading";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

const VehicleList = () => {
  const fields = [
    {
      id: 0,
      fields: "Vehicle Name",
    },
    {
      id: 1,
      fields: "Brand",
    },
    {
      id: 2,
      fields: "Model",
    },
  ];

  const vehicleData = [
    {
      vehicleName: "desh",
      brand: "tyota",
      model: "MX154",
    },
    {
      vehicleName: "desh",
      brand: "tyota",
      model: "MY154",
    },
    {
      vehicleName: "desh",
      brand: "tyota",
      model: "MZ154",
    },
    {
      vehicleName: "desh",
      brand: "tyota",
      model: "MY154",
    },
    {
      vehicleName: "desh",
      brand: "tyota",
      model: "MM154",
    },
  ];
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Heading>
        <p>Vehicle List </p>
      </Heading>
      <div className="overflow-x-auto">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E] rounded-tl-2xl rounded-tr-2xl"
        >
          <div className="mx-auto max-w-[55%] md:max-w-[42%] my-2">
            <Input
              size="small"
              placeholder={`Search by Brand total ${vehicleData?.length} Vehicle`}
              prefix={<SearchOutlined />}
              onChange={(event) => {
                setSearchTerm(event?.target?.value);
              }}
            />
          </div>
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(fields ?? []).map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {(vehicleData ?? [])
                ?.filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } else if (
                    value?.model
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                ?.map((V, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {V?.vehicleName}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">{V?.brand}</td>

                    <td className="px-2 py-3 text-sm leading-5">{V?.model}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
