"use client"

export default function Header() {

    const menu = [
        {
            "title": "next",
            "link": "next"
        },
        {
            "title": "리액트",
            "link": "react"
        }
    ]

    return (
        <>
            <div>
                <ul className="flex list-none">
                    {
                        menu.map((item)=>
                            <li className="pr-[10px]">{item.title}</li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}