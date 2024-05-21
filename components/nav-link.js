"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function NavLink({ href, children }) {
  const pathName = usePathname();
  return (
    <Link className={pathName.startsWith(href) ? "active" : ""} href={href}>
      {children}
    </Link>
  );
}
