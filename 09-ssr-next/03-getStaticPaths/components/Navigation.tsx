import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
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
