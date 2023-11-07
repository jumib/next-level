import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ul className="flex list-none">
            <li className="pr-[10px]">리액트</li>
            <li className="pr-[10px]">next</li>
        </ul>
      {children}
      </body>
    </html>
  )
}

