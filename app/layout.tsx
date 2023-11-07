"use client";

import { useState } from "react";
import "./globals.css";

type Theme = "theme-light" | "theme-dark" | "theme-sepia";
type Scale = "scale-sm" | "scale-md" | "scale-lg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("theme-light");
  const changeTheme = (val: Theme) => {
    setTheme(val);
  };

  const [scale, setScale] = useState<Scale>("scale-md");
  const changeScale = (val: Scale) => {
    setScale(val);
  };

  return (
    <html>
      <body className={`${theme}` + `${scale}`}>
        <select
          defaultValue={"theme-light"}
          onChange={(e: any) => changeTheme(e.target.value)}
        >
          <option value={"theme-light"}>light</option>
          <option value={"theme-dark"}>dark</option>
          <option value={"theme-sepia"}>sepia</option>
        </select>
        <select
          defaultValue={"scale-md"}
          onChange={(e: any) => changeScale(e.target.value)}
        >
          <option value={"scale-sm"}>sm</option>
          <option value={"scale-md"}>md</option>
          <option value={"scale-lg"}>lg</option>
        </select>
        <ul className="flex list-none">
          <li className="pr-[10px]">리액트</li>
          <li className="pr-[10px]">next</li>
        </ul>
        {children}
      </body>
    </html>
  );
}
