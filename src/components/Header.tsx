"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const BLOG = "/blog";
  const DOWNLOADS = "/downloads";
  const SETUP = "/setup";

  return (
    <nav className="w-full bg-custom-green-50 flex justify-between p-4 items-center sm:flex-row flex-col font-roboto">
      <div>
        <h2 className="text-xl font-bold">SHINDOW</h2>
      </div>

      <ul className="flex space-x-6 sm:mt-0 mt-2 flex-wrap">
        <Link
          href={DOWNLOADS}
          className={`${
            pathname === DOWNLOADS
              ? "text-white font-semibold cursor-default"
              : "text-white/80 hover:scale-105 duration-100 cursor-pointer"
          }`}
        >
          Downloads
        </Link>

        <Link
          href={"/blog"}
          className={`${
            pathname === BLOG
              ? "text-white font-semibold cursor-default"
              : "text-white/80 hover:scale-105 duration-100 cursor-pointer"
          }`}
        >
          Blog
        </Link>

        <Link
          href={"/setup"}
          className={`${
            pathname === SETUP
              ? "text-white font-semibold cursor-default"
              : "text-white/80 hover:scale-105 duration-100 cursor-pointer"
          }`}
        >
          Setup
        </Link>
      </ul>
    </nav>
  );
}
