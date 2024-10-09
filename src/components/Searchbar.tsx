import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Search from "./Search";
import { useRouter } from "next/navigation";
import { formatDate } from "../utils/utils";
type propsType = {
  from?: string;
  to?: string;
  date?: string;
  returnDate?: string;
};
const Searchbar = ({ from, to, date, returnDate }: propsType) => {
  const formattedDate = formatDate(date, returnDate);
  const [show, setShow] = useState(false);
  const router = useRouter();
  if (show) {
    return (
    <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full rounded-lg flex justify-center">
        <Search isNav={true} handleNavClick={() => setShow(false)} />
      </div>
    </div>
    );
  }
  return (
    <div className="w-screen flex justify-around px-[192px] py-[24px] items-center">
      <div className="rounded-[32px] flex border-[1px]  items-center px-[10px] py-[5px]">
        <p className="max-w-[300px] overflow-hidden whitespace-nowrap">
          <strong>{from?.split(" ")[0]}</strong>{" "}
          {from?.split(" ").slice(1).join(" ")}
        </p>

        <div
          className="vertical-line mx-4"
          style={{ borderLeft: "1px solid #ccc", height: "20px" }}
        ></div>

        <p className="max-w-[300px] overflow-hidden whitespace-nowrap">
          <strong>{to?.split(" ")[0]}</strong>{" "}
          {to?.split(" ").slice(1).join(" ")}
        </p>

        <div
          className="vertical-line mx-4"
          style={{ borderLeft: "1px solid #ccc", height: "20px" }}
        ></div>

        <p className="font-semibold">{formattedDate}</p>

        <div
          className="vertical-line mx-4"
          style={{ borderLeft: "1px solid #ccc", height: "20px" }}
        ></div>
        <div
          className="icon rounded-full p-3 border-[1px] bg-[#E5EBEB] h-[44px] w-[44px] cursor-pointer"
          onClick={() => setShow(true)}
        >
          <CiSearch />
        </div>
      </div>

      <div
        className="icon rounded-full p-3 border-[1px] flex items-center h-[44px] w-[44px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        <IoCloseSharp />
      </div>
    </div>
  );
};

export default Searchbar;
