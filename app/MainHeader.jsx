import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import NavLink from "@/components/nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="Logo" priority />
        <p>NextLevel Food</p>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;