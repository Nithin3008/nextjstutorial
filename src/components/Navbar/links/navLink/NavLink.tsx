"use client";
import React from "react";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
interface propsLinks {
  item: { title: string; path: string };
}
const NavLink = ({ item }: propsLinks) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
