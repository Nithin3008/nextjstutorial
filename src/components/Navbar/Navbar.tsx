import React from "react";
import styles from "./navbar.module.css";
import Links from "@/components/Navbar/links/Links";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links></Links>
    </div>
  );
};

export default Navbar;
