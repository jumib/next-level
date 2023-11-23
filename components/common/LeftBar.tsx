"use client"

import "../../app/css/LeftBar.scss";

export default function LeftBar() {
    return (
        <>
            <div className="left-bar leftBar">
                <ul>
                    <li>시작하기</li>
                </ul>
                <ul>
                    <li>라우팅</li>
                    <ul>
                        <li>페이지레이아웃</li>
                        <li>미들웨어</li>
                    </ul>
                </ul>
                <ul>
                    <li>캐싱</li>
                </ul>
            </div>
        </>
    )
}