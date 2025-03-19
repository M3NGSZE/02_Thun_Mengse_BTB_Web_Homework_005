"use client";
import Link from "next/link";
import { navigation } from "../../data/navigation";
import { usePathname } from "next/navigation";

export default function SideBarMenu() {
  const pathname = usePathname();

  return (
    <ul className="mt-6 space-y-1">
      {navigation.map((menu) => {
        return (
          <li key={menu.id}>
            <Link
              href={menu?.link ?? "/"}
              className={`block rounded-lg px-8 py-2 text-sm font-medium hover:bg-gray-200 ${
                menu.link === pathname ? "bg-gray-100" : ""
              } `}
            >
              <div className="flex gap-2">
                <img src={menu.icon} alt="" />
                {menu.title}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
