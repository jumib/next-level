"use client"
import Header from "@/component/common/Header";
import LeftBar from "@/component/common/LeftBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body>
      <Header />
      <LeftBar/>
      {children}
    </body>
  )
}
