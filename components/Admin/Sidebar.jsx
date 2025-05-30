import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 border border-black p-4">
        <Image src={assets.logo} alt="" width={160} />
      </div>
      <div className="pt-10 w-28 sm:w-60 h-[100vh] relative py-12 border border-black cursor-pointer">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href="/admin/addBlog">
            <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <Image src={assets.add_icon} alt="add" width={28} />
              <p>Add Blog</p>
            </div>
          </Link>
          <Link href="/admin/blogLists">
            <div className="mt-4 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
              <Image src={assets.blog_icon} alt="add" width={28} />{" "}
              <p>BlogList</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
