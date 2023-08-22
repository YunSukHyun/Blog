import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header flex items-center justify-between p-2 border-b border-blue-800">
      <Link className="text-xl" href="/">
        Blog
      </Link>
      <nav>
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="/posts">
          Post
        </Link>
        <Link className="p-2" href="/about">
          About
        </Link>
        <Link className="p-2" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
