"use client"
import Header from "@/components/common/Header";
import LeftBar from "@/components/common/LeftBar";

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
