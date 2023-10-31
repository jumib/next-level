import Header from '../components/common/Header'
import LeftBar from '../components/common/LeftBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = 'light'
  return (
    <html>
      <body>
        {/* <Header/>
        <LeftBar/> */}
        <ul className="md:flex lg:block sm:block list-none">
            <li className={`pr-[10px] text-point-color-${theme}`}>리액트</li>
            <li className="pr-[10px]">next</li>
        </ul>
      {children}
      </body>
    </html>
  )
}

