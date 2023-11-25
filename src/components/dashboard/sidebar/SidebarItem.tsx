"use client";

import Link from "next/link";

const SidebarItem = ({ icon, text, link }: any) => {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {icon && (
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {icon}
          </svg>
        )}
        <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
