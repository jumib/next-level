"use client";

import { useState } from "react";
import "./globals.css";

type Theme = "light" | "dark" | "sepia";
type Scale = "sm" | "md" | "lg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const changeTheme = (val: Theme) => {
    setTheme(val);
  };

  const [scale, setScale] = useState<Scale>("md");
  const changeScale = (val: Scale) => {
    setScale(val);
  };

  return (
    <html>
      {/* <body className={`${theme}` + ` ${scale}`}> */}
      <body className="text-primary">
        {/* <select
          defaultValue={"light"}
          onChange={(e: any) => changeTheme(e.target.value)}
        >
          <option value={"light"}>light</option>
          <option value={"dark"}>dark</option>
          <option value={"sepia"}>sepia</option>
        </select>
        <select
          defaultValue={"md"}
          onChange={(e: any) => changeScale(e.target.value)}
        >
          <option value={"sm"}>sm</option>
          <option value={"md"}>md</option>
          <option value={"lg"}>lg</option>
        </select> */}
        <ul className="flex list-none">
          <li className="pr-[10px]">리액트</li>
          <li className="pr-[10px]">next</li>
        </ul>
        {children}
      </body>
    </html>
  );
}
