import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ul className="md:flex lg:block sm:block list-none">
            <li className="pr-[10px] text-point-color-light">리액트</li>
            <li className="pr-[10px]">next</li>
        </ul>
      {children}
      </body>
    </html>
  )
}

