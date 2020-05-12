import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    // <ul>
    //   <li>
    //     <a href="/">Home</a>
    //   </li>
    //   <li>
    //     <a href="/time">Time</a>
    //   </li>
    //   <li>
    //     <a href="/time/vienna">Time Vienna</a>
    //   </li>
    //   <li>
    //     <a href="/time/paris">Time Paris</a>
    //   </li>
    // </ul>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/time">
          <a>Time</a>
        </Link>
      </li>
      <li>
        <Link href="/time/[city]" as={`/time/${"vienna"}`}>
          <a>Time Vienna</a>
        </Link>
      </li>
      <li>
        <Link href="/time/[city]" as={`/time/${"paris"}`}>
          <a>Time Paris</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
