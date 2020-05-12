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
        <Link href="/user/[username]" as={`/user/${"nikgraf"}`}>
          <a>nikgraf</a>
        </Link>
      </li>
      <li>
        <Link href="/user/[username]" as={`/user/${"cassidoo"}`}>
          <a>cassidoo</a>
        </Link>
      </li>
      <li>
        <Link href="/user/[username]" as={`/user/${"mxstbr"}`}>
          <a>mxstbr</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
