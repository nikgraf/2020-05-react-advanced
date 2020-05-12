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
    </ul>
  );
};

export default Navigation;
